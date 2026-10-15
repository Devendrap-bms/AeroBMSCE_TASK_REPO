import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/asset-path";

const footerLinks = [
	{ label: "Home", href: "/#home" },
	{ label: "Who We Are", href: "/#who-we-are" },
	{ label: "What We Build", href: "/#what-we-build" },
	{ label: "Achievements", href: "/#achievements" },
	{ label: "Partners", href: "/#partners" },
	{ label: "Contact", href: "/#contact" },
];

export function SiteFooter() {
	return (
		<footer className="bg-[#15161a] px-5 py-10 text-white sm:px-8 lg:px-14">
			<div className="mx-auto flex max-w-[1312px] flex-col justify-between gap-8 lg:flex-row lg:items-center">
				<Link
					aria-label="AeroBMSCE home"
					className="flex w-fit items-center gap-4"
					href="/"
				>
					<Image
						alt="AeroBMSCE logo"
						className="h-10 w-auto object-contain"
						height={40}
						src={assetPath("/images/header-logo.png")}
						width={160}
					/>
					<div>
						<p className="font-semibold text-sm">AeroBMSCE</p>
						<p className="mt-1 text-white/60 text-xs">
							BMS College of Engineering
						</p>
					</div>
				</Link>

				<nav
					aria-label="Footer navigation"
					className="flex flex-wrap gap-x-6 gap-y-3"
				>
					{footerLinks.map((item) => (
						<Link
							className="text-white/65 text-xs transition-colors duration-200 hover:text-[#e0c37f]"
							href={item.href}
							key={item.label}
						>
							{item.label}
						</Link>
					))}
				</nav>

				<Link
					className="inline-flex w-fit items-center gap-2 border border-white/25 px-4 py-3 font-semibold text-white text-xs transition-colors duration-200 hover:border-[#e0c37f] hover:text-[#e0c37f]"
					href="/#contact"
				>
					Collaborate with us
					<span aria-hidden="true">↗</span>
				</Link>
			</div>

			<div className="mx-auto mt-8 max-w-[1312px] border-white/10 border-t pt-5 text-white/45 text-xs leading-6">
				<p>AeroBMSCE · Aerospace engineering, ideas, and exploration.</p>
				<p className="mt-1">
					Recruitment-task redesign. This is not the official AeroBMSCE website.
				</p>
			</div>
		</footer>
	);
}
