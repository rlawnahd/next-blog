import Hero from '@/components/Hero';
import Image from 'next/image';
import FeaturedPosts from '@/components/FeaturedPosts';
export default function HomePage() {
    return (
        <>
            <Hero />
            <FeaturedPosts />
        </>
    );
}
