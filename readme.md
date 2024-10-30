# Bold Brasil

Este é o projeto **Bold Brasil**, uma aplicação web desenvolvida com React e Vite. Este README inclui instruções para instalação, scripts disponíveis, dependências utilizadas, e informações gerais para ajudar no desenvolvimento e utilização do projeto.

---

## Índice

- [Introdução](#introdução)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Dependências](#dependências)
- [DevDependencies](#devdependencies)
- [Estrutura do Projeto](#estrutura-do-projeto)

---

## Introdução

Bold é uma aplicação web construída com Vite e React, integrando bibliotecas de design, gerenciamento de estado, roteamento, validação de formulários e gráficos, além de uma estrutura modular que suporta extensibilidade e manutenibilidade.

## Pré-requisitos

- **Node.js**: v16 ou superior
- **npm**: v7 ou superior
- **yarn**: v1 ou superior

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/BrenoVital/bold-brasil.git
   ```

2. Navegue até a pasta do projeto:

   ```bash
   cd bold
   ```

3. Instale as dependências:
   ```bash
   npm install ou yarn
   ```

## Scripts Disponíveis

- **`npm run dev`**: Inicia o servidor de desenvolvimento com Vite.
- **`npm run build`**: Compila o projeto TypeScript e realiza o build de produção com Vite.
- **`npm run lint`**: Executa o ESLint para análise estática do código.
- **`npm run preview`**: Inicia o servidor de pré-visualização para o build de produção.

## Dependências

Abaixo estão listadas as principais bibliotecas utilizadas no projeto:

- **[@ant-design/icons](https://www.npmjs.com/package/@ant-design/icons)**: Ícones da biblioteca Ant Design.
- **[@fontsource/nunito](https://www.npmjs.com/package/@fontsource/nunito)**: Fonte personalizada Nunito.
- **[@hookform/resolvers](https://www.npmjs.com/package/@hookform/resolvers)**: Resolvers para integração de validação de formulários com `react-hook-form`.
- **[@tanstack/react-query](https://www.npmjs.com/package/@tanstack/react-query)**: Gerenciamento de estado para requisições assíncronas.
- **[antd](https://www.npmjs.com/package/antd)**: Componentes de design do Ant Design.
- **[axios](https://www.npmjs.com/package/axios)**: Biblioteca para fazer requisições HTTP.
- **[dayjs](https://www.npmjs.com/package/dayjs)**: Manipulação de datas e horas.
- **[react](https://www.npmjs.com/package/react) e [react-dom](https://www.npmjs.com/package/react-dom)**: Bibliotecas principais para construção da interface de usuário.
- **[react-helmet-async](https://www.npmjs.com/package/react-helmet-async)**: Gerenciamento de metadados para SEO.
- **[react-hook-form](https://www.npmjs.com/package/react-hook-form)**: Gerenciamento de formulários e validação.
- **[react-router-dom](https://www.npmjs.com/package/react-router-dom)**: Roteamento para navegação entre páginas.
- **[recharts](https://www.npmjs.com/package/recharts)**: Gráficos e visualizações.
- **[zod](https://www.npmjs.com/package/zod)**: Biblioteca de validação de dados.
- **[zustand](https://www.npmjs.com/package/zustand)**: Gerenciamento de estado.

## DevDependencies

Ferramentas de desenvolvimento e configurações:

- **[@eslint/js](https://www.npmjs.com/package/@eslint/js)**: Configuração para linting do JavaScript.
- **[@types/react e @types/react-dom](https://www.npmjs.com/package/@types/react)**: Tipos para suporte TypeScript com React.
- **[@vitejs/plugin-react](https://www.npmjs.com/package/@vitejs/plugin-react)**: Plugin React para Vite.
- **[eslint](https://www.npmjs.com/package/eslint)**: Ferramenta de linting.
- **[eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)**: Regras de linting para hooks do React.
- **[eslint-plugin-react-refresh](https://www.npmjs.com/package/eslint-plugin-react-refresh)**: Regras para linting com React Refresh.
- **[globals](https://www.npmjs.com/package/globals)**: Definições globais para ESLint.
- **[typescript](https://www.npmjs.com/package/typescript)**: Suporte a TypeScript.
- **[vite](https://www.npmjs.com/package/vite)**: Empacotador e servidor de desenvolvimento rápido.

## Estrutura do Projeto

A estrutura básica do projeto é a seguinte:

src/
ExternalCompany/
│ ├── components/
│ ├── pages/
│ ├── services/
│ └── types/
├── pages/
│ ├── About/
│ ├── Home/
│ ├── Login/
│ ├── NotFound/
Partner/
│ ├── components/
│ ├── pages/
│ ├── services/
│ └── types/
├── routes/
shared/
│ ├── components/
│ ├── Layout/
│ ├── store/
│ └── types/
App.tsx
main.tsx

**Nota**: Esta estrutura é um guia inicial e pode ser modificada conforme a necessidade.

## Contribuição

Para contribuir com o projeto:

1. Crie um fork do repositório.
2. Crie uma branch com a sua feature (`git checkout -b feature/nova-feature`).
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova feature'`).
4. Faça push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença

Este projeto é privado e para uso interno. Consultar os administradores do projeto para detalhes de uso e distribuição.
