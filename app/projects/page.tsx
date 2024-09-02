import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  return (
    <>
    <section className="container max-w-4xl py-32" >
      <article>
        <div className="mt-3 flex justify-between flex-col gap-4 md:items-center md:flex-row">
          <h2 className="m-0">Dedoficicador de Texto</h2>
          <div className="flex items-center gap-4">
            <div className="ring-1 ring-zinc-950 dark:ring-zinc-100 px-2 py-1">JavaScript</div>
            <div className="ring-1 ring-zinc-950 dark:ring-zinc-100 px-2 py-1">CSS</div>
            <div className="ring-1 ring-zinc-950 dark:ring-zinc-100 px-2 py-1">HTML</div>
          </div>
        </div>
        <a
          href="https://jkhlf.github.io/decodificador/"
          target="_blank"
          className="group block overflow-hidden my-6 relative ring-1 ring-zinc-950 dark:ring-zinc-100"
        >
          <span className="z-10 absolute flex items-center transition-all gap-2 top-2 right-2 opacity-0 group-hover:opacity-100 text-zinc-950 dark:text-zinc-50">
            Click to visit website <ArrowRight />
          </span>
          <Image
            className="intrinsic object-cover group-hover:scale-105 transition-all"
            src="/projects/oracle.png"
            width={990}
            height={250}
            alt="Logo Referente a Campanha da Oracle com + Alura para Desenvolvedores"
          />
        </a>
        <p>Challenge ONE - Alura</p>
        <ul className="py-3">
          <li className="py-3">
            <span className="font-bold">Sobre o desafio:</span> As "chaves" de criptografia que utilizaremos são: A letra "e" é convertida para "enter" A letra "i" é convertida para "imes" A letra "a" é convertida para "ai" A letra "o" é convertida para "ober" A letra "u" é convertida para "ufat"
          </li>
          <li>
            <span className="font-bold">Requisitos:</span> Deve funcionar apenas com letras minúsculas, não devem ser utilizados letras com acentos nem caracteres especiais.
            Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original.
          </li>
        </ul>
        <div className="items-center flex gap-4">
          <a
            className="items-center flex gap-2 mt-2"
            href="https://jkhlf.github.io/decodificador/"
            target="_blank"
          >
            Visit website
            <ArrowRight />
          </a>
          <a
            className="items-center flex gap-2 mt-2"
            href="https://github.com/jkhlf/decodificador"
            target="_blank"
          >
            Code base
            <ArrowRight />
          </a>
        </div>
      </article>

      <article className="relative mb-14 group">
        <div className="absolute inset-0 bg-transparent backdrop-blur-sm"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold mb-2">Em Construção</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>

        <div className="mt-20 flex justify-between flex-col gap-4 md:items-center md:flex-row">
          <h2 className="m-0">Dedoficicador de Texto</h2>
          <div className="flex items-center gap-4">
            <div className="ring-1 ring-zinc-950 dark:ring-zinc-100 px-2 py-1">JavaScript</div>
            <div className="ring-1 ring-zinc-950 dark:ring-zinc-100 px-2 py-1">CSS</div>
            <div className="ring-1 ring-zinc-950 dark:ring-zinc-100 px-2 py-1">HTML</div>
          </div>
        </div>
        {/* <a
          href="https://jkhlf.github.io/decodificador/"
          target="_blank"
          className="group block overflow-hidden my-6 relative ring-1 ring-zinc-950"
        >
          <Image
            // className="intrinsic object-cover group-hover:scale-105 transition-all"
            src="/images/"
            width={300}
            height={250}
            alt=""
          /> */}
        {/* </a> */}
        <p> Em Construção </p>
        <ul className="py-3">
          <li className="py-3">
            <span className="font-bold">Sobre o desafio:</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero esse nobis odit. Aperiam blanditiis ut, officia quis modi ex voluptatum eaque repellat ducimus vero, beatae culpa, vel numquam sed animi.
          </li>
          <li>
            <span className="font-bold">Requisitos:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fuga velit nostrum vero! Minus harum voluptatibus, consectetur consequuntur quae praesentium molestias veniam doloremque optio ducimus, ea impedit eligendi quod! Quo.
          </li>
        </ul>
        <div className="items-center flex gap-4">
          <a
            className="items-center flex gap-2 mt-2"
            href="https://jkhlf.github.io/decodificador/"
            target="_blank"
          >
            Visit website
            <ArrowRight />
          </a>
          <a
            className="items-center flex gap-2 mt-2"
            href="https://github.com/jkhlf/decodificador"
            target="_blank"
          >
            Code base
            <ArrowRight />
          </a>
        </div>
      </article>
    </section>
  </>
  )
}
