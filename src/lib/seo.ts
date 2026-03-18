export type SeoConfig = {
  title: string;
  description?: string;
  image?: string;
  path?: string;
  noIndex?: boolean;
};

const BRAND_NAME = "Go Global EdTech";
const DEFAULT_DESCRIPTION =
  "Go Global EdTech helps students study abroad with counselling, university shortlisting, admissions support, and MBBS overseas guidance.";

export const getSiteOrigin = (): string => {
  if (typeof window !== "undefined" && window.location?.origin) {
    return window.location.origin;
  }

  return "https://goglobaledtech.com";
};

export const toAbsoluteUrl = (input: string): string => {
  try {
    return new URL(input, getSiteOrigin()).toString();
  } catch {
    return input;
  }
};

const upsertMeta = (attr: "name" | "property", key: string, content: string) => {
  const selector = `meta[${attr}="${key}"]`;
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
};

const upsertLink = (rel: string, href: string) => {
  const selector = `link[rel="${rel}"]`;
  let element = document.head.querySelector(selector) as HTMLLinkElement | null;

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
};

const buildTitle = (title: string) => {
  if (!title) {
    return BRAND_NAME;
  }

  return title.includes(BRAND_NAME) ? title : `${title} | ${BRAND_NAME}`;
};

export const applySeo = (config: SeoConfig) => {
  const title = buildTitle(config.title);
  const description = config.description || DEFAULT_DESCRIPTION;
  const path = config.path || "/";
  const canonicalUrl = toAbsoluteUrl(path);
  const imageUrl = toAbsoluteUrl(config.image || "/assets/brand-logo-full.svg");
  const robots = config.noIndex ? "noindex, nofollow" : "index, follow";

  document.title = title;
  upsertMeta("name", "description", description);
  upsertMeta("name", "robots", robots);
  upsertMeta("name", "theme-color", "#0f172a");

  upsertMeta("property", "og:title", title);
  upsertMeta("property", "og:description", description);
  upsertMeta("property", "og:type", "website");
  upsertMeta("property", "og:url", canonicalUrl);
  upsertMeta("property", "og:image", imageUrl);
  upsertMeta("property", "og:site_name", BRAND_NAME);

  upsertMeta("name", "twitter:card", "summary_large_image");
  upsertMeta("name", "twitter:title", title);
  upsertMeta("name", "twitter:description", description);
  upsertMeta("name", "twitter:image", imageUrl);

  upsertLink("canonical", canonicalUrl);
};
