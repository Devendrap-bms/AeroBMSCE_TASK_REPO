// Must match your GitHub repository name (the site lives at <user>.github.io/<REPO_NAME>/).
const REPO_NAME = "AeroBMSCE_TASK_REPO";

const basePath = process.env.NODE_ENV === "production" ? `/${REPO_NAME}` : "";

/** @type {import("next").NextConfig} */
const config = {
	basePath,
	// Single source of truth: src/lib/asset-path.ts reads this value.
	env: { NEXT_PUBLIC_BASE_PATH: basePath },
	images: { unoptimized: true },
	output: "export",
	trailingSlash: true,
};

export default config;
