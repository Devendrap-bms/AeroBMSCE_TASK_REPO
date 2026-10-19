"use client";

import { Menu } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LinkButton } from "@/components/link-button";
import { Button } from "@/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { assetPath } from "@/lib/asset-path";
import { contactLink, isActivePath, navigation } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function SiteHeader() {
	const pathname = usePathname() ?? "/";
	const reduce = useReducedMotion();

	return (
		<header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur-xl">
			<div className="container-page flex h-[4.5rem] items-center justify-between gap-6">
				<Link
					aria-label="AeroBMSCE home"
					className="flex shrink-0 items-center gap-3"
					href="/"
				>
					<Image
						alt="AeroBMSCE logo"
						className="h-11 w-auto object-contain"
						height={44}
						priority
						src={assetPath("/images/header-logo.png")}
						width={160}
					/>
					<span className="hidden border-l pl-3 font-semibold text-muted-foreground text-xs leading-4 md:block">
						Aerospace engineering
						<br />
						BMS College of Engineering
					</span>
				</Link>

				<NavigationMenu className="hidden lg:flex">
					<NavigationMenuList className="gap-2">
						{navigation.map((item) => {
							const active = isActivePath(pathname, item.href);

							return (
								<NavigationMenuItem key={item.href}>
									<NavigationMenuLink
										active={active}
										className={cn(
											navigationMenuTriggerStyle(),
											"relative h-10 rounded-none bg-transparent px-3 font-semibold text-foreground/75 hover:bg-transparent hover:text-primary focus:bg-transparent aria-[current=page]:bg-transparent aria-[current=page]:text-primary",
										)}
										render={<Link href={item.href} />}
									>
										{item.label}
										{active ? (
											<motion.span
												aria-hidden="true"
												className="absolute inset-x-3 -bottom-px h-0.5 bg-primary"
												layoutId="nav-underline"
												transition={
													reduce
														? { duration: 0 }
														: { damping: 34, stiffness: 380, type: "spring" }
												}
											/>
										) : null}
									</NavigationMenuLink>
								</NavigationMenuItem>
							);
						})}
					</NavigationMenuList>
				</NavigationMenu>

				<div className="flex items-center gap-3">
					<LinkButton
						arrow="diagonal"
						className="hidden h-10 px-5 lg:inline-flex"
						href={contactLink.href}
					>
						{contactLink.label}
					</LinkButton>

					{/* Sheet handles focus trap, Escape and scroll lock. SheetClose on each link closes it on navigation. */}
					<Sheet>
						<SheetTrigger
							render={
								<Button
									aria-label="Open menu"
									className="size-11 rounded-none lg:hidden"
									size="icon"
									variant="outline"
								/>
							}
						>
							<Menu aria-hidden="true" />
						</SheetTrigger>
						<SheetContent className="w-[85vw] max-w-sm" side="right">
							<SheetHeader>
								<SheetTitle className="type-h3">Menu</SheetTitle>
								<SheetDescription className="sr-only">
									Site navigation
								</SheetDescription>
							</SheetHeader>
							<nav aria-label="Mobile" className="px-4 pb-6">
								<ul>
									{[...navigation, contactLink].map((item) => {
										const active = isActivePath(pathname, item.href);

										return (
											<li key={item.href}>
												<SheetClose
													nativeButton={false}
													render={
														<Link
															aria-current={active ? "page" : undefined}
															className={cn(
																"flex min-h-12 items-center justify-between border-b font-semibold text-base",
																active ? "text-primary" : "text-foreground",
															)}
															href={item.href}
														/>
													}
												>
													{item.label}
													{active ? (
														<span className="font-normal text-sm">
															Current page
														</span>
													) : null}
												</SheetClose>
											</li>
										);
									})}
								</ul>
							</nav>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}
