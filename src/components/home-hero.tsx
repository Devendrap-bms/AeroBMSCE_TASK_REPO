"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import Image from "next/image";
import { LinkButton } from "@/components/link-button";
import { assetPath } from "@/lib/asset-path";
import { EASE } from "@/lib/motion";

export function HomeHero() {
	const reduce = useReducedMotion();

	// One orchestrated page-load sequence: eyebrow, headline, copy, actions, tagline.
	const container: Variants = {
		hidden: {},
		visible: {
			transition: { delayChildren: 0.1, staggerChildren: reduce ? 0 : 0.12 },
		},
	};
	const item: Variants = {
		hidden: { opacity: 0, y: reduce ? 0 : 24 },
		visible: {
			opacity: 1,
			transition: { duration: reduce ? 0 : 0.7, ease: EASE },
			y: 0,
		},
	};

	return (
		<section className="on-dark relative isolate overflow-hidden">
			<Image
				alt=""
				aria-hidden="true"
				className="-z-20 object-cover opacity-30"
				fill
				priority
				sizes="100vw"
				src={assetPath("/images/bg.jpg")}
			/>
			<div
				aria-hidden="true"
				className="absolute inset-0 -z-10 bg-linear-to-r from-ink via-ink/90 to-ink/40"
			/>

			<div className="container-page grid min-h-[40rem] items-center gap-14 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
				<motion.div animate="visible" initial="hidden" variants={container}>
					<motion.p className="type-eyebrow mb-7 text-primary" variants={item}>
						Aerospace & UAV club at BMS College of Engineering
					</motion.p>
					<motion.h1 className="type-display max-w-3xl" variants={item}>
						Turning <span className="text-primary">aerospace ideas</span> into
						reality.
					</motion.h1>
					<motion.p
						className="type-lead mt-7 text-muted-foreground"
						variants={item}
					>
						One of India’s longest-running competitive aerospace and UAV teams,
						with international flight history. Students from 10+ departments
						design, build and test aircraft, drones and autonomous systems.
					</motion.p>
					<motion.div
						className="mt-9 flex flex-wrap gap-3 sm:gap-4"
						variants={item}
					>
						<LinkButton href="/what-we-build/">Explore our aircraft</LinkButton>
						<LinkButton arrow={false} href="/partners/" variant="outline">
							Partner with us
						</LinkButton>
					</motion.div>
					<motion.p
						className="mt-12 border-t pt-6 font-semibold text-primary text-sm"
						variants={item}
					>
						Above gravity. Beyond limits.
					</motion.p>
				</motion.div>

				<motion.figure
					animate={{ opacity: 1, x: 0 }}
					className="hidden border bg-foreground/5 p-5 backdrop-blur-sm lg:block"
					initial={reduce ? false : { opacity: 0, x: 32 }}
					transition={{
						delay: reduce ? 0 : 0.35,
						duration: reduce ? 0 : 0.9,
						ease: EASE,
					}}
				>
					<Image
						alt="CAD model of an AeroBMSCE aircraft"
						className="h-72 w-full object-contain"
						height={288}
						priority
						src={assetPath("/images/cad-plane.png")}
						width={480}
					/>
					<figcaption className="mt-4 flex items-center justify-between gap-4 border-t pt-4 text-muted-foreground text-sm">
						<span>Aircraft design model</span>
						<span className="text-primary">Build. Test. Learn. Repeat.</span>
					</figcaption>
				</motion.figure>
			</div>

			<div aria-hidden="true" className="absolute inset-x-0 bottom-0 flex h-1">
				<span className="w-1/3 bg-brand" />
				<span className="w-1/3 bg-gold" />
			</div>
		</section>
	);
}
