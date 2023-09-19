import Header from '@/components/Header';
import './globals.css';
import type { Metadata } from 'next';
import { Inter, Open_Sans } from 'next/font/google';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });
const openSans = Open_Sans({ subsets: ['latin'] });
export const metadata: Metadata = {
    title: {
        default: '주몽이의 블로그',
        template: '주몽이의 블로그 | %s',
    },
    description: '프론트엔드 개발자 김주몽 블로그',
    icons: {
        icon: '/favicon.ico',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={openSans.className}>
            <body className="flex flex-col w-full max-w-screen-2xl mx-auto">
                <Header />
                <main className="grow">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
