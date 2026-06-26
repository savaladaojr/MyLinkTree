<!--
Sync Impact Report
- Version change: template -> 1.0.0
- Modified principles:
	- Principle 1 -> I. TypeScript Estrito e Tipagem Explicita
	- Principle 2 -> II. Componentes Funcionais e Contratos Nomeados
	- Principle 3 -> III. Arquitetura Config -> Types -> Components
	- Principle 4 -> IV. Design Mobile-First e Acessibilidade WCAG AA
	- Principle 5 -> V. SEO Estruturado e Deploy Estatico Portavel
- Added sections:
	- Restrições de Stack e Dependências
	- Fluxo de Desenvolvimento e Critérios de Revisão
- Removed sections:
	- None
- Templates requiring updates:
	- ✅ updated .specify/templates/plan-template.md
	- ✅ updated .specify/templates/spec-template.md
	- ✅ updated .specify/templates/tasks-template.md
	- ✅ checked .specify/templates/commands/*.md (directory not present)
- Runtime guidance references:
	- ✅ updated README.md com diretrizes do projeto
- Follow-up TODOs:
	- Nenhum
-->

# Constituição do Projeto myLinkTree

## Core Principles

### I. TypeScript Estrito e Tipagem Explícita

Todo código TypeScript do projeto MUST ser compilado com `strict: true` e MUST evitar
`any` implícito ou explícito sem justificativa técnica aprovada em revisão. Contratos
de dados MUST ser definidos previamente e usados de forma consistente entre camadas.
Racional: reduz regressões silenciosas e garante previsibilidade na manutenção.

### II. Componentes Funcionais e Contratos Nomeados

A interface de usuário MUST usar apenas componentes funcionais React. Class components
MUST NOT ser introduzidos. Toda prop de componente MUST ser tipada por interfaces
nomeadas declaradas em `types.ts` (ou arquivos dedicados de tipos com o mesmo padrão).
Lógica de negócio MUST NOT residir em componentes de UI; componentes exibem estado e
delegam regras para configuração/serviços utilitários.
Racional: melhora legibilidade, reuso e testabilidade.

### III. Arquitetura Config -> Types -> Components

Toda personalização de conteúdo e aparência pelo usuário final MUST ser centralizada em
`src/config.ts`; customização MUST NOT exigir edição em outros arquivos. O fluxo
arquitetural obrigatório é `config` (dados) -> `types` (contratos) -> `components`
(renderização). Qualquer desvio MUST ser tratado como violação arquitetural.
Racional: permite manutenção simples e segura por pessoas não desenvolvedoras.

### IV. Design Mobile-First e Acessibilidade WCAG AA

Todos os componentes MUST funcionar em largura mínima de 320px sem perda funcional.
Cores, tipografia e espaçamento MUST seguir `design-system.md` como referência
normativa quando este arquivo existir no repositório. Links MUST ter `aria-label`,
imagens MUST ter `alt` apropriado e combinações de cor MUST atender WCAG AA.
Racional: garante experiência inclusiva e consistente em dispositivos móveis.

### V. SEO Estruturado e Deploy Estático Portável

O projeto MUST fornecer SEO local e estruturado, incluindo metadados de página e dados
estruturados pertinentes ao conteúdo de bio links. O artefato de `vite build` MUST
funcionar em qualquer CDN estático sem configuração adicional de servidor. GitHub Pages
é o alvo principal e MUST ser validado em fluxo de release.
Racional: maximiza descoberta orgânica e portabilidade de hospedagem.

## Restrições de Stack e Dependências

O stack obrigatório é React 19 + React DOM 19 + TypeScript + Vite. Dependências de
runtime MUST permanecer mínimas: apenas React, React DOM e no máximo uma biblioteca de
ícones além do stack base. Qualquer dependência adicional MUST apresentar justificativa
de custo/benefício, impacto no bundle e alternativa rejeitada.

## Fluxo de Desenvolvimento e Critérios de Revisão

Toda mudança MUST passar por revisão verificando conformidade explícita com os cinco
princípios desta constituição. Pull requests MUST incluir evidências de:

1. conformidade arquitetural (`src/config.ts` como único ponto de customização),
2. conformidade de tipagem (strict, sem `any` indevido),
3. validação de responsividade em 320px,
4. checagem de acessibilidade (aria-label, alt, contraste AA),
5. validação de build estático com `vite build`.

## Governance

Esta constituição prevalece sobre práticas locais conflitantes. Emendas MUST ser feitas
via pull request dedicado com: contexto, impacto, plano de migração (se aplicável) e
atualização dos templates em `.specify/templates/`. Política de versionamento da
constituição segue SemVer:

1. MAJOR para remoção/redefinição incompatível de princípio.
2. MINOR para adição de princípio/seção ou expansão normativa material.
3. PATCH para clarificações sem mudança normativa.

Revisões de conformidade MUST ocorrer em todo PR e antes de cada release. Violações
MUST gerar tarefas corretivas no mesmo ciclo de entrega ou bloqueio de merge quando
afetarem qualidade, acessibilidade, SEO ou deploy estático.

**Version**: 1.0.0 | **Ratified**: 2026-06-26 | **Last Amended**: 2026-06-26
