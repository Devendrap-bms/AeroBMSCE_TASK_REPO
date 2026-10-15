const BASE_PATH =
	process.env.NODE_ENV === "production" ? "/AeroBMSCE_TASK_REPO" : "";

export function assetPath(path: string): string {
	return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}
