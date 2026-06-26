import type { LinkItem, LucideIconName } from "../types";

const socialIconSet: ReadonlySet<LucideIconName> = new Set([
  "github",
  "linkedin",
  "instagram",
  "youtube",
  "twitter",
  "twitch",
  "music-2",
]);

export function classifyLinks(links: LinkItem[]): {
  socialLinks: LinkItem[];
  primaryLinks: LinkItem[];
} {
  const socialLinks: LinkItem[] = [];
  const primaryLinks: LinkItem[] = [];

  links.forEach((link) => {
    if (socialIconSet.has(link.icon)) {
      socialLinks.push(link);
      return;
    }
    primaryLinks.push(link);
  });

  return { socialLinks, primaryLinks };
}
