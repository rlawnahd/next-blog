'use client';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import Banner, { BannerData } from './Banner';
import { sendContactEmail } from '@/service/contact';
type Form = {
    from: string;
    subject: string;
    message: string;
};
const DEFAULT_DATA = { from: '', subject: '', message: '' };
export default function ContactForm() {
    const [form, setForm] = useState<Form>(DEFAULT_DATA);
    const [banner, setBanner] = useState<BannerData | null>(null);
    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(form);
        sendContactEmail(form)
            .then(() => {
                setBanner({ message: '메일을 성공적으로 보냈습니다.', state: 'success' });
                setForm(DEFAULT_DATA);
            })
            .catch((error) => {
                console.log(error);
                setBanner({ message: '메일 전송에 실패했습니다. 다시 시도해 주세요', state: 'error' });
            })
            .finally(() => {
                setTimeout(() => {
                    setBanner(null);
                }, 3000);
            });
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
                <button type="submit" className="bg-yellow-300 text-black font-bold hover:bg-yellow-400">
                    Submit
                </button>
            </form>
        </section>
    );
}
