import type { LinkItem } from "../types";
import { iconMap } from "./iconMap";

interface SocialIconsProps {
  links: LinkItem[];
}

export default function SocialIcons({ links }: SocialIconsProps) {
  if (links.length === 0) {
    return null;
  }

  return (
    <nav aria-label="Social links" className="social-row">
      {links.map((link) => {
        const Icon = iconMap[link.icon];
        return (
          <a
            key={link.id}
            className="social-link"
            href={link.url}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`Open ${link.title} in a new tab`}
          >
            <Icon aria-hidden size={18} strokeWidth={2} />
          </a>
        );
      })}
    </nav>
  );
}
