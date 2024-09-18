import Image from "next/image";

export default function AboutPage() {
  return (
    <article className="container mx-auto max-w-prose flex flex-col justify-center items-center px-4 py-32 mt-3">
      <div className="flex justify-center items-center mb-14">
        <Image
          src={"/images/author/meme.png"}
          alt={"Garfield meme dizendo que o café não é forte o bastante, feito por Paws."}
          width={650}
          height={50}
          className="object-cover rounded-3xl w-full max-w-sm"
        />
      </div>

      <div className="text-center">
        <p className="py-2 sm:py-4 text-base sm:text-lg">
        As a software engineer and Internet Systems student at Fatec Rubens Lara - BS, I build innovative tools and solutions that simplify daily tasks and improve people's lives, constantly learning and applying new technologies to create meaningful results.    </p>
        <p className="py-2 text-base sm:text-lg">
          I like the gym, music, anime and coffee (lots of coffee). I'm a simple person, I don't expect much from myself, but I see my value.        </p>
        <p className="py-2 sm:py-4 text-base sm:text-lg">
          Feel free to contact me at any time.        </p>
      </div>
    </article>
  );
}
