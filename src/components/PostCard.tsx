import { Post } from '@/service/posts';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = { post: Post };
export default function PostCard({ post: { title, description, date, category, path } }: Props) {
    return (
        <Link href={`/posts/${path}`}>
            <Image src={`/images/posts/${path}.png`} alt={title} width={200} height={100} />
            <div>
                <time>{date.toString()}</time>
                <h3>{title}</h3>
                <p>{description}</p>
                <span>{category}</span>
            </div>
        </Link>
    );
}
