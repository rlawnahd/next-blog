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
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(form);
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
                <input type="mail" id="from" name="from" required autoFocus value={form.from} onChange={onChange} />
                <label htmlFor="subject" className="font-semibold">
                    Subject
                </label>
                <input
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
