import React from 'react';
import PostsGrid from './PostsGrid';
import { getAllPosts, getFeaturedPosts } from '@/service/posts';

export default async function FeaturedPosts() {
    const posts = await getFeaturedPosts();
    return (
        <section>
            <h2>Featured Posts</h2>
            <PostsGrid posts={posts} />
        </section>
    );
}
