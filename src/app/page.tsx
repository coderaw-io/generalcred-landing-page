import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 to-slate-900 flex justify-center items-center space-y-4">
      <div className="flex flex-col space-y-4">
        <Image
          src="/logo.png"
          className="w-1/4"
          alt="logo da Generalcred"
          width={500}
          height={500}
        />

        <p className="max-w-lg w-full text-lg font-medium text-muted-foreground">
          A General nasceu em 2021 com o objetivo de se tornar uma referência no mercado financeiro, abrindo
          novos caminhos para os seus clientes e fornecedores, por quem é sempre lembrada e recomendada.
        </p>
      </div>
    </div>
  );
}
