import type { SiteConfig } from "./types";

const siteConfig: SiteConfig = {
  profile: {
    name: "Sergio de Aguiar Valadão Junior",
    handle: "svcode",
    bio: "Software Engineer | System Analyst | Full stack Developer | Backend Developer | .NET | C# | ASP.NET Core | Blazor | ReactJs | Node.js | JavaScript | TypeScript | SQL Server | PostgreSQL",
    avatarUrl: "/favicon.svg",
  },
  links: [
    {
      id: "portfolio",
      title: "Portfolio",
      url: "https://svcode.com.br/portfolio",
      icon: "briefcase",
      highlighted: true,
    },
    {
      id: "blog",
      title: "Latest Articles",
      url: "https://svcode.com.br/blog",
      icon: "file-text",
    },
    {
      id: "contact",
      title: "Contact Me",
      url: "https://svcode.com.br/contact",
      icon: "mail",
    },
    {
      id: "github",
      title: "GitHub",
      url: "https://github.com/savaladaojr",
      icon: "github",
    },
    {
      id: "linkedin",
      title: "LinkedIn",
      url: "https://linkedin.com/in/savaladaojr",
      icon: "linkedin",
    },
  ],
  theme: {
    background: "#010102",
    surface: "#141516",
    primary: "#5e6ad2",
    text: "#f7f8f8",
    mutedText: "#d0d6e0",
    buttonStyle: "solid",
  },
  meta: {
    title: "Sergio de Aguiar Valadão Junior | Bio Links",
    description:
      "A curated set of links to my portfolio, writing, and professional profiles.",
    ogImage: "/favicon.svg",
  },
};

export default siteConfig;
