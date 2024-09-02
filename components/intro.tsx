import Image from 'next/image';
import React from 'react';
import Avatar from '@/public/images/author/undraw_hello.svg';

export default function Intro() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center gap-y-8 gap-x-10 py-12">
      <div className="flex-1 md:mt-0 text-center md:text-left">
        <span className="text-muted-foreground block mb-2">Hi There 👋</span>
        <h1 className="text-3xl no-underline">I'm Khalaf,</h1>
        <h1 className="text-3xl no-underline text-indigo-500">a Software Engineer</h1>
        <p className="mt-3 font-light text-muted-foreground text-2xl">
          Estudante na Fatec Rubens Lara em Sistemas para Internet- 03/06, atualmente sou Monitor de Estrutura de Dados em C++.
        </p>
        <p className="mt-3 font-light text-2xl text-muted-foreground">
          Especializado em <span className="text-indigo-500">Java</span>, SpringBoot e tecnologias front-end como TypeScript, <span className="text-indigo-500">Next.js</span> e Tailwind CSS.
        </p>
      </div>

      <div className="relative flex-1">
        <Image
          className="rounded-lg object-contain"
          src={Avatar}
          alt="Avatar"
          width={500}
          height={200}
          priority
        />
      </div>
    </section>
  );
}
