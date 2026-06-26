# Phase 0 Research - Bio Links Page Estatica

## Decision 1: Usar TailwindCSS 4 com plugin oficial do Vite

- Decision: Adotar `tailwindcss@latest` + `@tailwindcss/vite` e centralizar tokens de design em `src/styles/globals.css` com CSS custom properties.
- Rationale: Tailwind 4 simplifica setup no Vite, reduz configuracao manual e permite manter tokens coerentes com o design.
- Alternatives considered:
  - CSS Modules puros: rejeitado por reduzir produtividade para variacoes de layout.
  - Styled-components: rejeitado por custo de runtime e aumento de complexidade para projeto estatico.

## Decision 2: Tipagem de icones por nome com `lucide-react`

- Decision: Definir tipo `LucideIconName` em `types.ts` e resolver componente de icone por mapa controlado para evitar strings livres.
- Rationale: Mantem o `config.ts` amigavel e seguro, evitando imports de icones no arquivo editavel pelo usuario.
- Alternatives considered:
  - Guardar componente React direto no config: rejeitado por acoplamento e pior experiencia para usuario nao tecnico.
  - Guardar SVG inline por link: rejeitado por duplicacao e manutencao dificil.

## Decision 3: Animacoes apenas de entrada/interacao com `framer-motion`

- Decision: Usar `framer-motion` para fade/slide inicial e hover/tap em botoes, sem estado global.
- Rationale: Entrega percepcao premium sem sobrecarregar bundle nem introduzir gerenciamento global de estado.
- Alternatives considered:
  - CSS animations puras: rejeitado por menor controle de sequenciamento/stagger.
  - GSAP: rejeitado por ser mais robusto do que o necessario para este escopo.

## Decision 4: Estrategia de separacao entre links principais e sociais

- Decision: Manter um unico array `links` em `SiteConfig`; `SocialIcons` renderiza links cujo `icon` pertence a uma whitelist social (ex.: github, instagram, x, youtube, linkedin, twitch, tiktok), enquanto `LinkList` renderiza os demais.
- Rationale: Preserva a interface pedida (`SiteConfig` sem campo adicional) e ainda separa a apresentacao de forma previsivel.
- Alternatives considered:
  - Adicionar `socialLinks` em `SiteConfig`: rejeitado por violar contrato solicitado.
  - Usar apenas `highlighted` para separar: rejeitado por semantica ambigua.

## Decision 5: Deploy em GitHub Pages via script dedicado

- Decision: Adicionar script `deploy` no `package.json` executando build e publicacao da pasta `dist` (estrategia com `gh-pages`).
- Rationale: Fluxo simples, reproduzivel e alinhado ao alvo principal de deploy estatico.
- Alternatives considered:
  - Deploy manual de `dist`: rejeitado por ser propenso a erro humano.
  - Apenas Vercel/Netlify: rejeitado por nao cobrir alvo principal definido na constituicao.

## Decision 6: Conformidade com design system

- Decision: Como `design-system.md` nao existe no repositorio no momento do planejamento, os tokens base serao definidos em `src/styles/globals.css` e o arquivo `design-system.md` passa a ser prerequisito para refinamento visual na implementacao.
- Rationale: Permite avancar sem bloquear o plano e mantem trilha clara para cumprir CA-005.
- Alternatives considered:
  - Bloquear planejamento ate criacao do arquivo: rejeitado por interromper fluxo sem necessidade tecnica imediata.
  - Ignorar o design system: rejeitado por violar a constituicao.
