"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import { EASE } from "@/lib/motion";

type Props = { children: ReactNode; className?: string };

/** Fade-up once when a block scrolls into view. Use per block, not per element. */
export function Reveal({ children, className }: Props) {
	const reduce = useReducedMotion();

	return (
		<motion.div
			className={className}
			initial={reduce ? false : { opacity: 0, y: 20 }}
			transition={{ duration: 0.6, ease: EASE }}
			viewport={{ amount: 0.2, margin: "0px 0px -8% 0px", once: true }}
			whileInView={{ opacity: 1, y: 0 }}
		>
			{children}
		</motion.div>
	);
}

const item: Variants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, transition: { duration: 0.55, ease: EASE }, y: 0 },
};

/** Parent for a group (card grid, list). Children wrapped in StaggerItem enter one after another. */
export function Stagger({ children, className }: Props) {
	const reduce = useReducedMotion();

	return (
		<motion.div
			className={className}
			initial={reduce ? "visible" : "hidden"}
			variants={{
				hidden: {},
				visible: { transition: { staggerChildren: 0.09 } },
			}}
			viewport={{ amount: 0.15, margin: "0px 0px -8% 0px", once: true }}
			whileInView="visible"
		>
			{children}
		</motion.div>
	);
}

export function StaggerItem({ children, className }: Props) {
	return (
		<motion.div className={className} variants={item}>
			{children}
		</motion.div>
	);
}
