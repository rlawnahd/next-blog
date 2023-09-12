import Hero from '@/components/Hero';
import React from 'react';

const TITLE_CLASS = 'text-2xl font-bold text-gray-800 my-2';
export default function AboutPage() {
    return (
        <>
            <Hero />
            <section className="bg-gray-100 shadow-lg p-8 m-8 text-center">
                <h2 className={TITLE_CLASS}>Who Am I?</h2>
                <p>
                    프론트엔드 개발자 <br />
                    웹앱어플리케이션을 만드는중..
                </p>
                <h2 className={TITLE_CLASS}>Career</h2>
                <p>구글 (-Now)</p>
                <p>레드펜 소프트 (-2023)</p>
                <h2 className={TITLE_CLASS}>Skills</h2>
                <p>
                    Javascript, Typescript, React.js, Next.js <br />
                    Node.js, Git
                </p>
            </section>
        </>
    );
}
