/**
 * Sub-path the site is served from (e.g. "/Youthstrengthassociation" on
 * GitHub Pages). Empty locally. Set at build time via NEXT_PUBLIC_BASE_PATH.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Prefix a /public file path with the base path. `next/link` does this
 * automatically, but `next/image` and metadata URLs do not.
 */
export const asset = (path: string) => (path.startsWith("/") ? `${basePath}${path}` : path);
