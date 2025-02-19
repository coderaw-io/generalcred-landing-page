import heroImg from "@/assets/images/fgts-img-bg1111.jpg";
import Image from "next/image";

export function HeroSection() {
  return (
    <div className="w-full text-white space-y-8 lg:relative">
      <h1 className="max-w-2xl w-full text-3xl md:text-5xl font-bold leading-tight">
        ANTECIPE ATÉ {" "}
        <span className="text-primary-gold">10 PARCELAS</span> DO SEU SAQUE
        ANIVERSÁRIO FGTS
      </h1>

      <ul className="space-y-2">
        <li className="flex items-center">
          <span className="h-3 w-3 bg-primary-gold rounded-full inline-block mr-3"></span>
          Taxa de juros a partir de 1,29% a.m.*
        </li>
        <li className="flex items-center">
          <span className="h-3 w-3 bg-primary-gold rounded-full inline-block mr-3"></span>
          Dinheiro rápido mesmo para negativados
        </li>
        <li className="flex items-center">
          <span className="h-3 w-3 bg-primary-gold rounded-full inline-block mr-3"></span>
          É simples e não precisa criar uma conta
        </li>
      </ul>

      <Image
        src={heroImg}
        alt="Passo 5"
        className="object-cover w-full rounded-[0.3rem] md:w-[90%]"
        priority
      />
    </div>
  )
}