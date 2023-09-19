import AdjacentPostCard from '@/components/AdjacentPostCard';
import PostContainer from '@/components/PostContainer';
import { getPostData } from '@/service/posts';
import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';
type Props = {
    params: {
        slug: string;
    };
};
export async function generateMetadata({ params: { slug } }: Props): Promise<Metadata> {
    const { title, description } = await getPostData(slug);
    return {
        title,
        description,
    };
}

export default async function PostPage({ params: { slug } }: Props) {
    const post = await getPostData(slug);
    const { title, path, next, prev } = post;
    return (
        <article className="rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4">
            <Image
                className="w-full h-1/5 max-h-[500px]"
                src={`/images/posts/${path}.png`}
                alt={title}
                width={760}
                height={420}
            />
            <PostContainer post={post} />
            <section className="flex shadow-md">
                {prev && <AdjacentPostCard post={prev} type="prev" />}
                {next && <AdjacentPostCard post={next} type="next" />}
            </section>
        </article>
    );
}
