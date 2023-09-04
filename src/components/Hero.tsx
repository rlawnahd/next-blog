import Image from 'next/image';
import React from 'react';
import profileImage from '../../public/images/profile.jpeg';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="text-center">
            <Image className="rounded-full mx-auto" src={profileImage} alt="profile" width={50} height={50} priority />
            <h2 className="text-3xl font-bold mt-2">{"Hi, I'm Mong"}</h2>
            <h3 className="text-xl font-semibold">Front-end Engineer</h3>
            <p>김주몽</p>
            <Link href="/contact">
                <button className="bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2">Contact Me</button>
            </Link>
        </section>
    );
}
