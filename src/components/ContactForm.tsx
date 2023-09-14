'use client';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import Banner, { BannerData } from './Banner';
type Form = {
    from: string;
    subject: string;
    message: string;
};

export default function ContactForm() {
    const [form, setForm] = useState<Form>({ from: '', subject: '', message: '' });
    const [banner, setBanner] = useState<BannerData | null>(null);
    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };
    async function sendContactMail() {
        const response = await fetch('/api/mail', {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || '서버 요청에 실패함');
        }
        console.log(data);
        return data;
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        sendContactMail();
        setBanner({ message: '성공했어', state: 'success' });
        setTimeout(() => {
            setBanner(null);
        }, 3000);
    };

    return (
        <section className="w-full max-w-md">
            {banner && <Banner banner={banner} />}
            <form
                className="w-full  flex flex-col gap-2 my-4 p-4 bg-slate-700 rounded-xl text-white"
                onSubmit={onSubmit}
            >
                <label htmlFor="from" className="font-semibold">
                    Your Email
                </label>
                <input
                    className="text-black"
                    type="mail"
                    id="from"
                    name="from"
                    required
                    autoFocus
                    value={form.from}
                    onChange={onChange}
                />
                <label htmlFor="subject" className="font-semibold">
                    Subject
                </label>
                <input
                    className="text-black"
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    autoFocus
                    value={form.subject}
                    onChange={onChange}
                />
                <label htmlFor="message" className="font-semibold">
                    Message
                </label>
                <textarea
                    rows={10}
                    id="message"
                    name="message"
                    required
                    autoFocus
                    value={form.message}
                    onChange={onChange}
                    className="text-black"
                />
                <button className="bg-yellow-300 text-black font-bold hover:bg-yellow-400">Submit</button>
            </form>
        </section>
    );
}
