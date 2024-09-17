'use client';
import { useState } from 'react';
import Header from '@/components/header';
import Main from '@/components/main';

export default function Home() {
  const [fontFamily, setFontFamily] = useState('font-mono');
  const switchFont = (value: string) => setFontFamily(value);
  return (
    <section className={`w-full max-w-4xl mx-auto ${fontFamily}`}>
      <Header onValueChange={switchFont} />
      <Main />
    </section>
  );
}
