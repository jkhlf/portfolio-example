import Image from "next/image";

export default function AboutPage() {
  return (
    <article className="flex flex-col justify-center items-center mx-auto max-w-prose min-h-[90vh] px-4">
      <div className="flex justify-center items-center mb-16">
        <Image
          src={"/images/author/meme.png"}
          alt={"Garfield meme dizendo que o café não é forte o bastante, feito por Paws."}
          width={350}
          height={50}
          className="object-cover rounded-3xl w-full max-w-xs"
        />
      </div>
      
      <div className="text-center">
        <p className="py-2 text-base sm:text-lg">
          Sou um engenheiro de software brasileiro apaixonado por criar coisas
          do zero. Atualmente, estou cursando uma graduação em sistemas de internet na
          Fatec Rubens Lara, Brasil.
        </p>
        <p className="py-2 text-base sm:text-lg">
          Gosto de academia, música, boa comida, anime e café (bastante café). Sou uma pessoa simples, não espero muito de mim, mas vejo meu valor.
        </p>
        <p className="py-2 text-base sm:text-lg">
          Obrigado por visitar!
          Espero que tenha gostado do que viu.
          Sinta-se à vontade para entrar em contato a qualquer momento.
          Vamos criar algo incrível juntos!
        </p>
      </div>
    </article>
  );
}
