# Tasks: Pagina de Bio Links Estatica

**Input**: Design documents from `/specs/001-bio-links-page/`

**Prerequisites**: plan.md (required), spec.md (required), research.md, data-model.md, contracts/, quickstart.md

**Tests**: A especificacao nao exige TDD nem suite automatizada obrigatoria; este plano prioriza validacao funcional/manual e checks tecnicos (`lint`/`build`).

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Inicializacao da stack e estrutura base obrigatoria para a feature

- [X] T001 Instalar dependencias de UI e animacao em package.json (`tailwindcss`, `@tailwindcss/vite`, `lucide-react`, `framer-motion`)
- [X] T002 Configurar TailwindCSS 4 no pipeline do Vite em vite.config.ts
- [X] T003 [P] Criar tokens e reset global em src/styles/globals.css
- [X] T004 Atualizar bootstrap de estilos em src/main.tsx para carregar src/styles/globals.css
- [X] T005 Habilitar `strict: true` e validar compilacao estrita em tsconfig.app.json
- [X] T006 [P] Definir contratos TypeScript (`LucideIconName`, `LinkItem`, `Profile`, `Theme`, `Meta`, `SiteConfig`) em src/types.ts
- [X] T007 Criar configuracao inicial unica editavel pelo usuario em src/config.ts
- [X] T008 Documentar arquitetura obrigatoria `config -> types -> components` em README.md

### Constitution Gates for Setup (mandatory)

- [X] T009 Confirmar limite de dependencias e stack aprovada em specs/001-bio-links-page/plan.md
- [X] T010 Confirmar regra de customizacao exclusiva em src/config.ts no contrato em specs/001-bio-links-page/contracts/site-config.contract.md

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Fundacoes reutilizaveis que bloqueiam todas as user stories

**⚠️ CRITICAL**: Nenhuma user story inicia antes desta fase

- [X] T011 [P] Criar mapa tipado de icones Lucide e resolver `LucideIconName` em src/components/iconMap.tsx
- [X] T012 [P] Criar classificador de links sociais (social vs primary) em src/components/socialClassifier.ts
- [X] T013 [P] Criar utilitario para aplicar variaveis de tema no root em src/components/themeVariables.ts
- [X] T014 [P] Criar utilitario de metadados locais (`title`, `description`, `og:image`) em src/components/seoMeta.ts
- [X] T015 [P] Criar componente base ProfileCard com props tipadas em src/components/ProfileCard.tsx
- [X] T016 [P] Criar componente base LinkButton com acessibilidade e external-link policy em src/components/LinkButton.tsx
- [X] T017 [P] Criar componente base LinkList com separacao de estado vazio em src/components/LinkList.tsx
- [X] T018 [P] Criar componente base SocialIcons em src/components/SocialIcons.tsx
- [X] T019 Integrar fundacoes no orquestrador principal em src/App.tsx

**Checkpoint**: Foundation pronta; user stories podem iniciar

---

## Phase 3: User Story 1 - Explorar Perfil e Links (Priority: P1) 🎯 MVP

**Goal**: Entregar pagina publica com perfil visivel e links principais clicaveis em nova aba

**Independent Test**: Abrir a URL em viewport movel (320px+) e validar exibicao de perfil + clique de cada botao principal abrindo nova aba

### Implementation for User Story 1

- [X] T020 [P] [US1] Implementar render completo de perfil (foto, nome, @handle, bio) em src/components/ProfileCard.tsx
- [X] T021 [P] [US1] Implementar comportamento de botao com `target="_blank"`, `rel="noreferrer noopener"` e `aria-label` em src/components/LinkButton.tsx
- [X] T022 [P] [US1] Implementar lista principal de links nao-sociais em src/components/LinkList.tsx
- [X] T023 [US1] Integrar `ProfileCard` + `LinkList` com dados de src/config.ts em src/App.tsx
- [X] T024 [US1] Adicionar estado vazio para ausencia de links principais em src/components/LinkList.tsx
- [X] T025 [US1] Ajustar layout mobile-first (320px) da experiencia principal em src/styles/globals.css
- [X] T026 [US1] Registrar criterios de verificacao independente da US1 em specs/001-bio-links-page/quickstart.md

**Checkpoint**: US1 funcional e testavel isoladamente (MVP)

---

## Phase 4: User Story 2 - Personalizar Conteudo e Tema por Configuracao (Priority: P2)

**Goal**: Permitir customizacao de conteudo e tema editando apenas src/config.ts

**Independent Test**: Alterar somente src/config.ts e confirmar atualizacao de perfil, links e cores apos novo build

### Implementation for User Story 2

- [X] T027 [P] [US2] Consolidar dados de perfil/links/tema/meta exclusivamente em src/config.ts
- [X] T028 [P] [US2] Aplicar variaveis de tema vindas de `SiteConfig.theme` em src/App.tsx
- [X] T029 [P] [US2] Renderizar linha de redes sociais separada a partir do classificador em src/components/SocialIcons.tsx
- [X] T030 [P] [US2] Integrar metadados SEO locais com `meta` do config em src/App.tsx
- [X] T031 [US2] Garantir que componentes consumam somente props tipadas de src/types.ts em src/components/ProfileCard.tsx
- [X] T032 [US2] Garantir que componentes consumam somente props tipadas de src/types.ts em src/components/LinkButton.tsx
- [X] T033 [US2] Garantir que componentes consumam somente props tipadas de src/types.ts em src/components/LinkList.tsx
- [X] T034 [US2] Garantir que componentes consumam somente props tipadas de src/types.ts em src/components/SocialIcons.tsx
- [X] T035 [US2] Documentar fluxo de personalizacao (arquivo unico) em README.md

**Checkpoint**: US2 funcional e testavel isoladamente

---

## Phase 5: User Story 3 - Publicar em Hospedagem Gratuita (Priority: P3)

**Goal**: Gerar build estatico e fluxo de deploy gratuito com foco em GitHub Pages

**Independent Test**: Executar build e deploy, publicar URL e validar pagina funcionando sem backend

### Implementation for User Story 3

- [X] T036 [P] [US3] Adicionar script `deploy` e dependencia de publicacao estatica em package.json
- [X] T037 [P] [US3] Ajustar configuracao de base path para ambiente de pages em vite.config.ts
- [X] T038 [P] [US3] Criar workflow de deploy para GitHub Pages em .github/workflows/deploy.yml
- [X] T039 [US3] Atualizar orientacoes de deploy para GitHub Pages, Vercel e Netlify em README.md
- [X] T040 [US3] Atualizar roteiro de validacao de publicacao em specs/001-bio-links-page/quickstart.md

**Checkpoint**: US3 funcional e testavel isoladamente

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Refinos finais transversais e validacao de conformidade

- [X] T041 [P] Otimizar carregamento de avatar e fallback para conexao lenta em src/components/ProfileCard.tsx
- [X] T042 [P] Refinar animacoes de entrada/interacao com framer-motion em src/components/LinkButton.tsx
- [X] T043 [P] Executar passe final de contraste/tipografia/tokens em src/styles/globals.css
- [X] T044 Revalidar acessibilidade (aria-label, alt, estrutura semantica) em src/App.tsx
- [X] T045 Revalidar conformidade constitucional final em specs/001-bio-links-page/plan.md
- [X] T046 Registrar checklist final de validacao funcional e tecnica em specs/001-bio-links-page/quickstart.md

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: sem dependencias
- **Foundational (Phase 2)**: depende de Setup; bloqueia todas as user stories
- **User Stories (Phases 3-5)**: dependem da conclusao de Foundational
- **Polish (Phase 6)**: depende da conclusao das user stories desejadas

### User Story Dependencies

- **US1 (P1)**: inicia apos Foundational; independente de US2/US3
- **US2 (P2)**: inicia apos Foundational; usa base de US1 mas e validavel isoladamente por alteracao de `config.ts`
- **US3 (P3)**: inicia apos Foundational; independente de US1/US2 para pipeline de publicacao

### Within Each User Story

- Componentes base existentes antes da integracao em `App.tsx`
- Integracao da historia antes da validacao independente da historia
- Atualizacao de documentacao da historia apos comportamento implementado

### Suggested Story Completion Order

1. US1 (MVP)
2. US2
3. US3

---

## Parallel Opportunities

- **Setup**: T003, T006 podem executar em paralelo apos T002
- **Foundational**: T011-T018 podem executar em paralelo; T019 depende da finalizacao deles
- **US1**: T020, T021, T022 podem executar em paralelo; T023 depende destes
- **US2**: T027, T029, T030 podem executar em paralelo; T031-T034 podem ser distribuidos por componente
- **US3**: T036, T037, T038 podem executar em paralelo; T039-T040 dependem da estrategia definida
- **Polish**: T041, T042, T043 podem executar em paralelo

---

## Parallel Example: User Story 1

```bash
Task: "T020 [US1] Implementar render completo de perfil em src/components/ProfileCard.tsx"
Task: "T021 [US1] Implementar comportamento de botao externo em src/components/LinkButton.tsx"
Task: "T022 [US1] Implementar lista principal de links em src/components/LinkList.tsx"
```

## Parallel Example: User Story 2

```bash
Task: "T027 [US2] Consolidar dados exclusivamente em src/config.ts"
Task: "T029 [US2] Renderizar redes sociais em src/components/SocialIcons.tsx"
Task: "T030 [US2] Integrar metadados SEO em src/App.tsx"
```

## Parallel Example: User Story 3

```bash
Task: "T036 [US3] Adicionar script deploy em package.json"
Task: "T037 [US3] Ajustar base path de pages em vite.config.ts"
Task: "T038 [US3] Criar workflow em .github/workflows/deploy.yml"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Completar Phase 1 (Setup)
2. Completar Phase 2 (Foundational)
3. Completar Phase 3 (US1)
4. Validar independentemente a US1 via quickstart

### Incremental Delivery

1. Entregar MVP (US1)
2. Entregar customizacao (US2)
3. Entregar publicacao (US3)
4. Executar polish e regressao final

### Parallel Team Strategy

1. Time conclui Setup + Foundational
2. Distribuicao por historia:
   - Dev A: US1
   - Dev B: US2
   - Dev C: US3
3. Consolidar com Phase 6 (Polish)

---

## Notes

- Tarefas com `[P]` nao compartilham dependencia direta de implementacao incompleta
- Cada tarefa inclui caminho exato de arquivo para execucao por LLM
- Cada user story possui criterio de teste independente explicito
- Ordem favorece entrega incremental sem quebrar conformidade constitucional

