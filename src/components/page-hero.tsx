"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { assetPath } from "@/lib/asset-path";
import { EASE } from "@/lib/motion";

type Props = {
	children?: ReactNode; // calls to action
	crumb: string;
	description: string;
	eyebrow: string;
	image?: { alt: string; src: string };
	title: string;
};

/** Shared opener for every inner page: breadcrumb, headline, intro, optional photograph. */
export function PageHero({
	children,
	crumb,
	description,
	eyebrow,
	image,
	title,
}: Props) {
	const reduce = useReducedMotion();

	const container: Variants = {
		hidden: {},
		visible: { transition: { staggerChildren: reduce ? 0 : 0.1 } },
	};
	const item: Variants = {
		hidden: { opacity: 0, y: reduce ? 0 : 18 },
		visible: {
			opacity: 1,
			transition: { duration: reduce ? 0 : 0.6, ease: EASE },
			y: 0,
		},
	};

	return (
		<section className="on-dark relative isolate overflow-hidden">
			<div
				aria-hidden="true"
				className="pointer-events-none absolute -top-28 -right-28 -z-10 size-96 rounded-full border border-border"
			/>
			<div
				className={
					image
						? "container-page grid items-center gap-12 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:py-20"
						: "container-page py-14 lg:py-20"
				}
			>
				<motion.div animate="visible" initial="hidden" variants={container}>
					<motion.div className="mb-8" variants={item}>
						<Breadcrumb>
							<BreadcrumbList>
								<BreadcrumbItem>
									<BreadcrumbLink render={<Link href="/" />}>
										Home
									</BreadcrumbLink>
								</BreadcrumbItem>
								<BreadcrumbSeparator />
								<BreadcrumbItem>
									<BreadcrumbPage>{crumb}</BreadcrumbPage>
								</BreadcrumbItem>
							</BreadcrumbList>
						</Breadcrumb>
					</motion.div>
					<motion.p className="type-eyebrow mb-5 text-primary" variants={item}>
						{eyebrow}
					</motion.p>
					<motion.h1 className="type-h1 max-w-3xl" variants={item}>
						{title}
					</motion.h1>
					<motion.p
						className="type-lead mt-6 text-muted-foreground"
						variants={item}
					>
						{description}
					</motion.p>
					{children ? (
						<motion.div className="mt-9 flex flex-wrap gap-3" variants={item}>
							{children}
						</motion.div>
					) : null}
				</motion.div>

				{image ? (
					<motion.div
						animate={{ opacity: 1, scale: 1 }}
						initial={reduce ? false : { opacity: 0, scale: 1.04 }}
						transition={{
							delay: reduce ? 0 : 0.25,
							duration: reduce ? 0 : 0.9,
							ease: EASE,
						}}
					>
						<AspectRatio className="overflow-hidden border" ratio={4 / 3}>
							<Image
								alt={image.alt}
								className="object-cover"
								fill
								priority
								sizes="(min-width: 1024px) 40vw, 100vw"
								src={assetPath(image.src)}
							/>
						</AspectRatio>
					</motion.div>
				) : null}
			</div>
			<div aria-hidden="true" className="flex h-1">
				<span className="w-1/3 bg-brand" />
				<span className="w-1/3 bg-gold" />
			</div>
		</section>
	);
}
