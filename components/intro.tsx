import React from 'react';
import Link from 'next/link';

export default function Intro() {
  return (
    <section className="max-w-4xl mx-auto min-h-[50vh] flex flex-col justify-center">
      <div className="text-center md:text-left space-y-6">
        <h2 className="text-xl text-muted-foreground mb-2 pl-1">
          HI THERE <span className="waving-hand text-3xl inline-block animate-wave">👋</span>
        </h2>
        <h1 className="text-5xl font-bold leading-tight">
          I'm Khalaf a
          <span className="text-primary block md:inline"> Software Developer</span>
        </h1>
        <h3 className="text-lg text-primary py-2">
          Student at Fatec Rubens Lara in Internet Systems - 03/06 
        </h3>
        <p className="text-lg text-muted-foreground mb-6">
          I'm a passionate software engineer specializing in Java, Spring Boot, 
          and front-end technologies like TypeScript, Next.js, and Tailwind CSS.
        </p>
        <div className="my-24 py-6 text-[18px] space-x-6">
          <Link className="font-bold transition-colors hover:text-primary" href="/projects">
            <span className="text-primary">1.</span> work/
          </Link>
          <Link className="font-bold transition-colors hover:text-primary" href="/about">
            <span className="text-primary">2.</span> about/
          </Link>
          <Link className="font-bold transition-colors hover:text-primary" href="/cv/curriculum.pdf" target="_blank" rel="noopener noreferrer">
            <span className="text-primary">3.</span> resume/
          </Link>
        </div>
      </div>
    </section>
  );
}