// External = full URLs, mailto/tel links and files served from /public/assets.
export const isExternalLink = (href = "") =>
  /^(https?:|mailto:|tel:)/.test(href) || href.startsWith("/assets/");
