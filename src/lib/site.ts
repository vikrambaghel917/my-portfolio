const DEFAULT_SITE_URL = "https://vikrambaghel.vercel.app";

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL;
}

export function absoluteUrl(path = "/") {
  return new URL(path, getSiteUrl()).toString();
}
