import "@/styles/globals.css";

import type { Metadata } from "next";
import { Geist, Newsreader } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { assetPath } from "@/lib/asset-path";

export const metadata: Metadata = {
	description:
		"Explore AeroBMSCE's aerospace engineering, aeromodelling, UAV development, achievements and collaboration opportunities.",
	// Favicon needs the base path too, otherwise it 404s under /<repo>/ on GitHub Pages.
	icons: { icon: assetPath("/favicon.ico") },
	title: {
		default: "AeroBMSCE | Aerospace Engineering at BMSCE",
		template: "%s | AeroBMSCE",
	},
};

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const newsreader = Newsreader({
	subsets: ["latin"],
	variable: "--font-newsreader",
});

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html className={`${geist.variable} ${newsreader.variable}`} lang="en">
			<body className="flex min-h-screen flex-col bg-background text-foreground antialiased">
				<a
					className="sr-only z-[60] bg-primary px-4 py-3 font-semibold text-primary-foreground focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
					href="#main"
				>
					Skip to content
				</a>
				<SiteHeader />
				<main className="flex-1" id="main">
					{children}
				</main>
				<SiteFooter />
			</body>
		</html>
	);
}
