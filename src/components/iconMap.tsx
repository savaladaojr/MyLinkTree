import {
  Briefcase,
  FileText,
  Globe,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Music2,
  Twitch,
  Twitter,
  Youtube,
  type LucideIcon,
} from "lucide-react";
import type { LucideIconName } from "../types";

export const iconMap: Record<LucideIconName, LucideIcon> = {
  globe: Globe,
  mail: Mail,
  briefcase: Briefcase,
  "file-text": FileText,
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  youtube: Youtube,
  twitter: Twitter,
  twitch: Twitch,
  "music-2": Music2,
};
