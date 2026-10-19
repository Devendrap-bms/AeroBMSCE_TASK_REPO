const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a /public path with the GitHub Pages base path (set once in next.config.js). */
export function assetPath(path: string): string {
	return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}
