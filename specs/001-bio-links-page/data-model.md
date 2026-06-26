# Data Model - Bio Links Page Estatica

## Entity: Profile

- Purpose: Dados publicos de apresentacao do dono da pagina.
- Fields:
  - `name: string` (required, 1..80)
  - `handle: string` (required, sem `@` inicial no dado bruto, 1..30)
  - `bio: string` (required, 1..240)
  - `avatarUrl: string` (required, URL relativa ou absoluta)
- Validation rules:
  - `name`, `handle` e `bio` nao podem ser vazios.
  - `handle` exibido no UI com prefixo `@`.

## Entity: LinkItem

- Purpose: Destino clicavel exibido como botao principal ou icone social.
- Fields:
  - `id: string` (required, unico)
  - `title: string` (required, 1..60)
  - `url: string` (required, URL absoluta `https://`)
  - `icon: LucideIconName` (required)
  - `highlighted?: boolean` (optional, default `false`)
- Validation rules:
  - `id` unico no array.
  - `url` valida e externa.
  - `title` usado em `aria-label` e texto visivel.
- Derived classification:
  - `social`: quando `icon` pertence ao conjunto social permitido.
  - `primary`: todos os demais links.

## Entity: Theme

- Purpose: Tokens visuais consumidos por CSS custom properties.
- Fields:
  - `background: string` (required, cor valida)
  - `surface: string` (required, cor valida)
  - `primary: string` (required, cor valida)
  - `text: string` (required, cor valida)
  - `mutedText: string` (required, cor valida)
  - `buttonStyle: 'solid' | 'outline' | 'soft'` (required)
- Validation rules:
  - Contraste AA minimo entre texto e fundos relevantes.

## Entity: Meta

- Purpose: Metadados SEO locais da pagina.
- Fields:
  - `title: string` (required, 10..70 recomendado)
  - `description: string` (required, 50..160 recomendado)
  - `ogImage?: string` (optional)
- Validation rules:
  - `title` e `description` obrigatorios para SEO basico.

## Aggregate: SiteConfig

- Purpose: Contrato unico editavel pelo usuario em `src/config.ts`.
- Fields:
  - `profile: Profile`
  - `links: LinkItem[]`
  - `theme: Theme`
  - `meta: Meta`
- Invariants:
  - Deve existir ao menos 1 link principal ou social ativo.
  - Nao deve haver `id` duplicado em `links`.

## UI State Transitions

- `initial -> loaded`: dados de `config.ts` aplicados e UI renderizada.
- `avatar-error -> fallback`: imagem de avatar falhou e UI usa fallback local.
- `link-idle -> link-hover/tap`: feedback visual por motion/tailwind.
