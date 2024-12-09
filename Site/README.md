# Site

## Desenvolvimento

### Prerequisitos

#### Codespaces

* Um navegador logado na sua conta do GitHub

#### Local

Ter as ferramentas a seguir instaladas e acessíveis pelo terminal:

* [Node.js v22](https://nodejs.org/)
* [pNpm](https://pnpm.io/)

### Rodar ambiente

#### Codespaces

Na página do repositório, siga a sequência de botões a seguir:
Botão verde "Código" → Seção "Codespaces" → Selecione um Codespace existente ou crie um novo

Você será redirecionado para um contêiner pré-configurado para desenvolvimento do nosso projeto github.dev.

Para iniciar o site, selecione "Executar e Depurar" na barra lateral, e rode o perfil "Iniciar Site".

Serão instaladas as dependências e então aparecerá um link no terminal que te leva a uma visualização do site que atualiza em tempo real conforme você salva suas alterações no código. Para acessar o link, use Ctrl+clique.

#### Local

Num terminal, entre na pasta do site e execute `pnpm install` para baixar as dependências do projeto.
Para rodar, ainda na pasta do site, rode `pnpm run dev` para executar um servidor de desenvolvimento que atualiza em tempo real conforme você salva suas alterações no código. Acesse-o pelo link exibido nos logs do servidor.

Se você utilizar VS Code, apenas inicie o perfil de depuração configurado.

## Compilando

Para criar uma versão de produção do app, use, na pasta do site:

```bash
pnpm run build
```

Você pode ver uma pré-visualização da versão de produção com `pnpm run preview`.

> Para dar deploy no app, será necessário o uso de um [adaptador](https://svelte.dev/docs/kit/adapters) para o ambiente desejado.

## Bibliotecas utilizadas

* [tailwindcss](https://tailwindcss.com/docs/): classes css com estilos comuns prontos
* [flowbite-svelte](https://flowbite-svelte.com/docs/components/accordion): componentes prontos para Svelte que fazem uso de tailwindcss
* [flowbite-svelte-blocks](https://flowbite-svelte-blocks.vercel.app/): conjuntos de componentes prontos que fazem uso dos componentes disponíveis em flowbite-svelte.

## Navegação

[Voltar para a tela inicial](../README.md)
