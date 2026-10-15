import "@/styles/globals.css";

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
	title: {
		default: "AeroBMSCE | Aerospace Engineering at BMSCE",
		template: "%s | AeroBMSCE",
	},
	description:
		"Explore AeroBMSCE's aerospace engineering, aeromodelling, UAV development, achievements and collaboration opportunities.",
};

const geist = Geist({
	subsets: ["latin"],
	variable: "--font-geist-sans",
});

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html className={geist.variable} lang="en">
			<body className="min-h-screen bg-[#faf9f6] text-[#19191b] antialiased">
				<SiteHeader />
				{children}
				<SiteFooter />
			</body>
		</html>
	);
}
