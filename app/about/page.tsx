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
          Sou um engenheiro de software, gosto de criar coisas que possam ajudar tanto o meu dia a dia quanto de outras pessoas. Atualmente, estou cursando graduação em sistemas de internet na
          Fatec Rubens Lara, Brasil.
        </p>
        <p className="py-2 text-base sm:text-lg">
          Gosto de academia, música, anime e café (bastante café). Sou uma pessoa simples, não espero muito de mim, mas vejo meu valor.
        </p>
        <p className="py-2 sm:py-4 text-base sm:text-lg">
          Obrigado por visitar!
          Espero que tenha gostado do que viu.
          Sinta-se à vontade para entrar em contato a qualquer momento.
          Vamos criar algo!
        </p>
      </div>
    </article>
  );
}
