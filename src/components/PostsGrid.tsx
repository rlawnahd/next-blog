import { Post } from '@/service/posts';
import Image from 'next/image';
import React from 'react';
import PostCard from './PostCard';
type Props = {
    posts: Post[];
};
export default function PostsGrid({ posts }: Props) {
    return (
        <ul>
            {posts.map((post) => {
                return (
                    <>
                        <li key={post.path}>
                            <PostCard post={post} />
                        </li>
                    </>
                );
            })}
        </ul>
    );
}
