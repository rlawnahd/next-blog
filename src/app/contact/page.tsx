import ContactForm from '@/components/ContactForm';
import React from 'react';
import { AiFillGithub, AiFillYoutube, AiFillInstagram } from 'react-icons/ai';
const LINKS = [
    { icon: <AiFillGithub />, url: '' },
    { icon: <AiFillInstagram />, url: '' },
    { icon: <AiFillYoutube />, url: '' },
];
export default function ContactPage() {
    return (
        <section className="flex flex-col items-center ">
            <h2 className="text-3xl font-bold my-2">Contact Me</h2>
            <p>rlawnahd123@naver.com</p>
            <ul className="flex gap-4 my-2">
                {LINKS.map((link, index) => (
                    <a
                        className="text-5xl hover:text-yellow-400"
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {link.icon}
                    </a>
                ))}
            </ul>
            <h2 className="text-3xl font-bold my-8">Or Send me an email</h2>
            <ContactForm />
        </section>
    );
}
