import { useEffect } from "react";
import siteConfig from "./config";
import LinkList from "./components/LinkList";
import ProfileCard from "./components/ProfileCard";
import SocialIcons from "./components/SocialIcons";
import { applySeoMeta } from "./components/seoMeta";
import { classifyLinks } from "./components/socialClassifier";
import { applyThemeVariables } from "./components/themeVariables";

export default function App() {
  const { profile, links, theme, meta } = siteConfig;
  const { socialLinks, primaryLinks } = classifyLinks(links);

  useEffect(() => {
    applyThemeVariables(theme);
    applySeoMeta(meta);
  }, [theme, meta]);

  return (
    <main className="page-shell" aria-label="Bio links page">
      <section className="content-panel">
        <ProfileCard profile={profile} />
        <LinkList links={primaryLinks} buttonStyle={theme.buttonStyle} />
        <SocialIcons links={socialLinks} />
      </section>
    </main>
  );
}
