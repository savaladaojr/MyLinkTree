export type LucideIconName =
  | "globe"
  | "mail"
  | "briefcase"
  | "file-text"
  | "github"
  | "linkedin"
  | "instagram"
  | "youtube"
  | "twitter"
  | "twitch"
  | "music-2";

export interface LinkItem {
  id: string;
  title: string;
  url: string;
  icon: LucideIconName;
  highlighted?: boolean;
}

export interface Profile {
  name: string;
  handle: string;
  bio: string;
  avatarUrl: string;
}

export interface Theme {
  background: string;
  surface: string;
  primary: string;
  text: string;
  mutedText: string;
  buttonStyle: "solid" | "outline" | "soft";
}

export interface Meta {
  title: string;
  description: string;
  ogImage?: string;
}

export interface SiteConfig {
  profile: Profile;
  links: LinkItem[];
  theme: Theme;
  meta: Meta;
}
