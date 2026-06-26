import type { Theme } from "../types";

export function applyThemeVariables(theme: Theme): void {
  const root = document.documentElement;

  root.style.setProperty("--bg-canvas", theme.background);
  root.style.setProperty("--surface-2", theme.surface);
  root.style.setProperty("--color-primary", theme.primary);
  root.style.setProperty("--ink", theme.text);
  root.style.setProperty("--ink-muted", theme.mutedText);
}
