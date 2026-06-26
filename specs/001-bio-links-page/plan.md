# Implementation Plan: Bio Links Page Estatica

**Branch**: `[001-bio-links-page]` | **Date**: 2026-06-26 | **Spec**: `/specs/001-bio-links-page/spec.md`

**Input**: Feature specification from `/specs/001-bio-links-page/spec.md`

## Summary

Implementar uma pagina de bio links estatica com React 19 + TypeScript + Vite, usando TailwindCSS 4, `lucide-react` e `framer-motion`, mantendo `src/config.ts` como unico ponto de edicao do usuario. A interface sera dividida em `ProfileCard`, `LinkList`, `LinkButton` e `SocialIcons`, com SEO local, acessibilidade minima, responsividade a partir de 320px e deploy estatico via script `deploy`.

## Technical Context

**Language/Version**: TypeScript 6.x, React 19, Vite 8

**Primary Dependencies**: `react`, `react-dom`, `tailwindcss@latest` (v4), `@tailwindcss/vite`, `lucide-react`, `framer-motion`

**Storage**: N/A (conteudo estatico em `src/config.ts`)

**Testing**: Validacao por `npm run lint`, `npm run build`, validacao manual responsiva (320px/375px/768px), e checklist funcional do quickstart

**Target Platform**: Navegadores modernos mobile-first, deploy em CDN estatica (GitHub Pages alvo principal)

**Project Type**: Frontend web app estatico (SPA)

**Performance Goals**: Primeira pintura util <= 2s em 3G tipico; bundle inicial enxuto e sem chamadas de rede bloqueantes

**Constraints**: Sem estado global (sem Redux, Zustand, Context API), sem backend, unico arquivo editavel pelo usuario em `src/config.ts`

**Scale/Scope**: 1 pagina publica, 4 componentes principais, ~5-30 links configuraveis

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

- `strict: true` habilitado no TypeScript e sem uso indevido de `any`.
- Apenas componentes funcionais React; nenhuma class component.
- Props tipadas com interfaces nomeadas em `types.ts` (ou equivalente dedicado).
- Nenhuma regra de negocio em componentes de UI.
- Personalizacao do usuario centralizada em `src/config.ts`.
- Fluxo arquitetural documentado: `config` -> `types` -> `components`.
- Dependencias limitadas ao stack base + no maximo 1 biblioteca de icones.
- Responsividade validada para largura minima de 320px.
- Conformidade com `design-system.md` (quando presente) para tokens visuais.
- Acessibilidade minima: `aria-label` em links, `alt` em imagens, contraste WCAG AA.
- SEO local e estruturado especificado no plano.
- Build `vite build` executa com saida compativel com CDN estatico e GitHub Pages.

**Gate Status (Pre-Research)**: PASS COM ACOES OBRIGATORIAS

- O repositorio atual ainda nao explicita `strict: true` em `tsconfig.app.json`; a implementacao desta feature deve habilitar `strict` e corrigir eventuais erros de tipagem.
- `design-system.md` nao foi encontrado no repositorio; para manter CA-005, a feature deve introduzir tokens em `src/styles/globals.css` e tratar `design-system.md` como artefato obrigatorio de referencia no ciclo de implementacao.

## Project Structure

### Documentation (this feature)

```text
specs/001-bio-links-page/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
src/
├── config.ts
├── types.ts
├── App.tsx
├── main.tsx
├── assets/
│   └── avatar.jpg
├── components/
│   ├── ProfileCard.tsx
│   ├── LinkButton.tsx
│   ├── LinkList.tsx
│   └── SocialIcons.tsx
└── styles/
    └── globals.css
```

**Structure Decision**: Projeto frontend unico com separacao clara `config` -> `types` -> `components`, mantendo `src/config.ts` como superficie de customizacao e `src/styles/globals.css` para tokens visuais + reset.

## Phase 0 Output (Research)

Pesquisa consolidada em `/specs/001-bio-links-page/research.md`, cobrindo:

- Integracao TailwindCSS 4 no Vite com React 19
- Mapeamento tipado de icones do `lucide-react`
- Estrategia de animacoes com `framer-motion` sem estado global
- Script de deploy para GitHub Pages sem backend

## Phase 1 Output (Design & Contracts)

- Modelo de dados em `/specs/001-bio-links-page/data-model.md`
- Contratos em `/specs/001-bio-links-page/contracts/`
- Guia de validacao em `/specs/001-bio-links-page/quickstart.md`
- Contexto do agente atualizado em `.github/copilot-instructions.md`

## Constitution Check (Post-Design)

**Gate Status (Post-Design)**: PASS

- Design e contratos mantem customizacao exclusiva em `src/config.ts`.
- Componentizacao funcional e contratos nomeados foram definidos (`types.ts` + components dedicados).
- Responsividade, acessibilidade minima e SEO local estao cobertos no quickstart e contratos.
- Dependencias planejadas seguem stack base + 1 biblioteca de icones (`lucide-react`) + animacao (`framer-motion`) conforme escopo aprovado.

## Complexity Tracking

Sem violacoes adicionais que exijam justificativa.

| Violation | Why Needed | Simpler Alternative Rejected Because |
| --------- | ---------- | ------------------------------------ |
| N/A       | N/A        | N/A                                  |

## Implementation Confirmation

- 2026-06-26: Stack e limite de dependencias revalidados durante implementacao.
- Dependencias mantidas dentro do plano aprovado: TailwindCSS 4, lucide-react, framer-motion e gh-pages para deploy estatico.
