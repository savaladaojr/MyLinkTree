# Contract - src/config.ts

## Objetivo

Definir o contrato editavel pelo usuario final sem necessidade de alterar componentes.

## TypeScript Interface (normativa)

```ts
interface SiteConfig {
  profile: Profile;
  links: LinkItem[];
  theme: Theme;
  meta: Meta;
}

interface Profile {
  name: string;
  handle: string;
  bio: string;
  avatarUrl: string;
}

interface LinkItem {
  id: string;
  title: string;
  url: string;
  icon: LucideIconName;
  highlighted?: boolean;
}

interface Meta {
  title: string;
  description: string;
  ogImage?: string;
}
```

## Behavioral Contract

- `src/config.ts` e o unico arquivo editavel para personalizacao.
- Todo `LinkItem.url` deve abrir em nova aba (`target="_blank"`) com `rel="noreferrer noopener"`.
- `title` do link e obrigatorio para texto visivel e `aria-label`.
- `profile.avatarUrl` deve sempre resultar em imagem com `alt` significativo.
- `meta` deve atualizar `document.title` e metadados SEO locais.

## Partition Rule

- `SocialIcons` recebe subconjunto de `links` com icones sociais reconhecidos.
- `LinkList` recebe os demais links como botoes principais.

## Non-Functional Contract

- Renderizacao legivel e funcional em 320px.
- Contraste minimo WCAG AA nas combinacoes de cor relevantes.
- Sem uso de estado global.

## Implementation Confirmation

- 2026-06-26: Regra de customizacao exclusiva confirmada em src/config.ts, sem necessidade de edicao em componentes para personalizacao de conteudo, tema e SEO.
