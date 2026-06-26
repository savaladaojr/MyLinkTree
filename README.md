# MyLinkTree

Pagina de bio links estatica para uso pessoal/profissional, com foco em performance, acessibilidade e personalizacao por configuracao.

## Tecnologias utilizadas

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Framer Motion
- Lucide React
- ESLint

## Como clonar o repositorio

```bash
git clone https://github.com/savaladaojr/MyLinkTree.git
cd MyLinkTree
```

## Como inicializar o projeto

Instale as dependencias:

```bash
npm install
```

## Como executar o projeto localmente

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Build de producao:

```bash
npm run build
```

Preview local do build:

```bash
npm run preview
```

Lint do codigo:

```bash
npm run lint
```

## Estrutura e personalizacao

A maior parte da personalizacao fica em `src/config.ts`:

- `profile`: nome, handle, bio e avatar
- `links`: links principais e sociais
- `theme`: variaveis de tema
- `meta`: titulo, descricao e OG image

## Como contribuir

1. Faça um fork do repositorio.
2. Crie uma branch para sua feature/correcao:

```bash
git checkout -b feat/minha-melhoria
```

3. Faça as alteracoes e valide localmente:

```bash
npm run lint
npm run build
```

4. Commit suas alteracoes:

```bash
git add .
git commit -m "feat: minha melhoria"
```

5. Envie para seu fork e abra um Pull Request.

## Licenca

Defina a licenca do projeto (ex.: MIT) conforme a necessidade.
