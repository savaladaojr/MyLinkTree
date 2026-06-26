import type { LinkItem, Theme } from "../types";
import LinkButton from "./LinkButton";

interface LinkListProps {
  links: LinkItem[];
  buttonStyle: Theme["buttonStyle"];
}

export default function LinkList({ links, buttonStyle }: LinkListProps) {
  if (links.length === 0) {
    return (
      <section className="empty-state" aria-live="polite">
        <p>No primary links configured yet. Add items in src/config.ts.</p>
      </section>
    );
  }

  return (
    <section aria-label="Primary links" className="links-grid">
      {links.map((link) => (
        <LinkButton key={link.id} link={link} buttonStyle={buttonStyle} />
      ))}
    </section>
  );
}
