# Quickstart - Validacao da Feature

## Prerequisitos

- Node.js LTS instalado
- npm disponivel
- Dependencias instaladas com `npm install`

## Setup

1. Instalar dependencias:

```bash
npm install
```

2. Rodar ambiente local:

```bash
npm run dev
```

3. Editar apenas src/config.ts para personalizar perfil, links, tema e SEO.

## Criterios independentes - US1

1. Abrir a pagina em largura minima de 320px.
2. Confirmar render de foto, nome, handle e bio.
3. Confirmar botoes de links primarios com icone e texto.
4. Clicar em cada botao primario e validar abertura em nova aba.
5. Confirmar estado vazio ao remover todos os links primarios do config.

## Validacao Funcional (E2E Manual)

1. Perfil visivel:

- Acessar a pagina e confirmar foto, nome, handle e bio.

2. Links principais:

- Confirmar botoes com icone + titulo.
- Clicar em cada botao e validar abertura em nova aba.

3. Links sociais:

- Confirmar linha separada de icones sociais.
- Validar navegacao para URLs corretas.

4. Responsividade:

- Testar em 320px, 375px e 768px.
- Confirmar que todos os links seguem acessiveis sem overlap.

5. Acessibilidade:

- Confirmar `aria-label` em links.
- Confirmar `alt` na imagem de avatar.
- Validar contraste AA das cores configuradas.

6. SEO local:

- Verificar `document.title` e metadados derivados de `meta`.

## Validacao Tecnica

1. Lint:

```bash
npm run lint
```

2. Build:

```bash
npm run build
```

3. Preview do build:

```bash
npm run preview
```

## Deploy

1. Executar script de deploy:

```bash
npm run deploy
```

2. Confirmar pagina publicada em hospedagem estatica (GitHub Pages alvo principal).

## Roteiro de validacao de publicacao - US3

1. Executar npm run build e validar dist gerado sem erros.
2. Executar npm run deploy e confirmar branch gh-pages atualizada.
3. Validar URL publica carregando:
   - perfil completo
   - links primarios
   - links sociais
   - metadados de title e description
4. Repetir validacao em largura 320px.

## Checklist final funcional e tecnica

- [x] Layout mobile-first funcional em 320px
- [x] Links externos com noreferrer noopener
- [x] Avatar com alt e fallback de erro
- [x] Tema aplicado por variaveis vindas do config
- [x] Metadados SEO locais aplicados
- [x] Lint e build executados sem erro
- [x] Deploy automatizavel via workflow GitHub Pages

## Referencias

- Modelo de dados: `/specs/001-bio-links-page/data-model.md`
- Contratos: `/specs/001-bio-links-page/contracts/site-config.contract.md`
- Schema: `/specs/001-bio-links-page/contracts/site-config.schema.json`
