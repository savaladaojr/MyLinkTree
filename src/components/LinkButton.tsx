import { motion } from "framer-motion";
import type { LinkItem, Theme } from "../types";
import { iconMap } from "./iconMap";

interface LinkButtonProps {
  link: LinkItem;
  buttonStyle: Theme["buttonStyle"];
}

export default function LinkButton({ link, buttonStyle }: LinkButtonProps) {
  const Icon = iconMap[link.icon];

  return (
    <motion.a
      className={`link-button link-${buttonStyle}${link.highlighted ? " is-highlighted" : ""}`}
      href={link.url}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`Open ${link.title} in a new tab`}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.99 }}
    >
      <Icon aria-hidden size={18} strokeWidth={2} />
      <span>{link.title}</span>
    </motion.a>
  );
}
