"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { assetPath } from "@/lib/asset-path";

const navigation = [
	{ label: "Home", href: "/#home", id: "home", path: "/" },
	{
		label: "Who We Are",
		href: "/#who-we-are",
		id: "who-we-are",
		path: "/who-we-are",
	},
	{
		label: "What We Build",
		href: "/#what-we-build",
		id: "what-we-build",
		path: "/what-we-build",
	},
	{
		label: "Achievements",
		href: "/#achievements",
		id: "achievements",
		path: "/achievements",
	},
	{
		label: "Partners",
		href: "/#partners",
		id: "partners",
		path: "/partners",
	},
	{
		label: "Contact",
		href: "/#contact",
		id: "contact",
		path: "/contact",
	},
];

function normalizePath(path: string) {
	const withoutBasePath = path.replace(/^\/AeroBMSCE_TASK_REPO(?=\/|$)/, "");

	return withoutBasePath.replace(/\/+$/, "") || "/";
}

export function SiteHeader() {
	const rawPathname = usePathname();
	const pathname = normalizePath(rawPathname ?? "/");
	const isHomePage = pathname === "/";

	const [activeSection, setActiveSection] = useState("home");

	useEffect(() => {
		// Detail pages: select the navigation item matching the current route.
		if (!isHomePage) {
			const currentPage = navigation.find((item) => item.path === pathname);

			setActiveSection(currentPage?.id ?? "");
			return;
		}

		// Homepage: update the underline as the user scrolls.
		const sections = navigation
			.map((item) => document.getElementById(item.id))
			.filter((section): section is HTMLElement => section !== null);

		if (sections.length === 0) return;

		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((entry) => entry.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio);

				if (visible[0]) {
					setActiveSection(visible[0].target.id);
				}
			},
			{
				rootMargin: "-20% 0px -60% 0px",
				threshold: [0, 0.1, 0.25, 0.5],
			},
		);

		sections.forEach((section) => {
			observer.observe(section);
		});

		const updateFromHash = () => {
			const id = window.location.hash.slice(1);

			if (navigation.some((item) => item.id === id)) {
				setActiveSection(id);
			}
		};

		window.addEventListener("hashchange", updateFromHash);
		updateFromHash();

		return () => {
			observer.disconnect();
			window.removeEventListener("hashchange", updateFromHash);
		};
	}, [isHomePage, pathname]);

	function renderLink(item: (typeof navigation)[number], mobile = false) {
		const active = activeSection === item.id;

		return (
			<Link
				aria-current={active ? "location" : undefined}
				className={`relative shrink-0 whitespace-nowrap py-2 font-semibold transition-colors duration-200 ${
					mobile
						? "w-full text-center text-[11px] sm:text-xs"
						: "text-xs 2xl:text-[13px]"
				} ${active ? "text-[#a5223b]" : "text-[#4b484a] hover:text-[#a5223b]"}`}
				href={item.href}
				key={item.id}
				onClick={() => setActiveSection(item.id)}
			>
				{item.label}
				<span
					className={`absolute inset-x-0 -bottom-[2px] h-0.5 origin-left bg-[#a5223b] transition-transform duration-300 ${
						active ? "scale-x-100" : "scale-x-0"
					}`}
				/>
			</Link>
		);
	}

	return (
		<header className="sticky top-0 z-50 border-black/10 border-b bg-[#faf9f6]/95 backdrop-blur-xl">
			<div className="mx-auto flex min-h-[76px] max-w-[1440px] items-center justify-between gap-4 px-5 sm:gap-5 sm:px-8 lg:px-14">
				<Link
					aria-label="AeroBMSCE home"
					className="flex shrink-0 items-center gap-3"
					href="/"
					onClick={() => setActiveSection("home")}
				>
					<Image
						alt="AeroBMSCE logo"
						className="h-11 w-auto object-contain"
						height={44}
						src={assetPath("/images/header-logo.png")}
						width={160}
					/>
					<span className="hidden border-black/15 border-l pl-3 font-semibold text-[#68666a] text-[10px] uppercase leading-relaxed tracking-[0.12em] sm:block">
						Aerospace Engineering
						<br />
						BMS College of Engineering
					</span>
				</Link>

				<nav
					aria-label="Main navigation"
					className="hidden items-center gap-5 xl:flex 2xl:gap-7"
				>
					{navigation.map((item) => renderLink(item))}
				</nav>

				<Link
					className="group inline-flex shrink-0 items-center gap-2 bg-[#a5223b] px-3 py-3 font-semibold text-white text-xs transition-colors duration-300 hover:bg-[#81182d] sm:px-5"
					href="/contact/"
					onClick={() => setActiveSection("contact")}
				>
					<span className="hidden sm:inline">Collaborate with us</span>
					<span className="sm:hidden">Collaborate</span>
					<svg
						aria-hidden="true"
						className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
						fill="none"
						viewBox="0 0 24 24"
					>
						<path
							d="M7 17 17 7M7 7h10v10"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="1.8"
						/>
					</svg>
				</Link>
			</div>

			<nav
				aria-label="Mobile navigation"
				className="grid grid-cols-3 gap-x-4 gap-y-2 border-black/5 border-t px-4 py-3 sm:px-8 xl:hidden"
			>
				{navigation.map((item) => renderLink(item, true))}
			</nav>
		</header>
	);
}
