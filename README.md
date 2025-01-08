## Setup do projeto

Primeiro vamos instalar o gerenciador de pacotes `pnpm`

Linux 
`curl -fsSL https://get.pnpm.io/install.sh | env PNPM_VERSION=10.0.0 sh -`

Windows
`$env:PNPM_VERSION = "10.0.0"; Invoke-WebRequest https://get.pnpm.io/install.ps1 -UseBasicParsing | Invoke-Expression`

Se a instalação do `pnpm` for finalizada com sucesso, rode o comando `pnpm install` na raiz do projeto para instalar as dependências.

Após instalar o gerenciador de pacotes e as dependências do projeto, inicie o servidor com o comando abaixo

`pnpm run dev`

