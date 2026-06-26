import type { Meta } from "../types";

function upsertMeta(selector: string, attrs: Record<string, string>): void {
  const head = document.head;
  let tag = head.querySelector<HTMLMetaElement>(selector);

  if (!tag) {
    tag = document.createElement("meta");
    head.appendChild(tag);
  }

  Object.entries(attrs).forEach(([key, value]) => {
    tag?.setAttribute(key, value);
  });
}

export function applySeoMeta(meta: Meta): void {
  document.title = meta.title;

  upsertMeta('meta[name="description"]', {
    name: "description",
    content: meta.description,
  });

  upsertMeta('meta[property="og:title"]', {
    property: "og:title",
    content: meta.title,
  });

  upsertMeta('meta[property="og:description"]', {
    property: "og:description",
    content: meta.description,
  });

  if (meta.ogImage) {
    upsertMeta('meta[property="og:image"]', {
      property: "og:image",
      content: meta.ogImage,
    });
  }
}
