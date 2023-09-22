import React from 'react';
import { useTranslation } from '../i18in';
import Link from 'next/link';

export default async function Page({ params: { lng } }: any) {
    const { t } = await useTranslation(lng);
    console.log(t);
    return (
        <>
            <div>{t('h1')}</div>
            <div>
                {lng === 'ko' && <Link href="/en">en으로 변환</Link>}
                {lng === 'en' && <Link href="/ko">ko로 변환</Link>}
            </div>
        </>
    );
}
