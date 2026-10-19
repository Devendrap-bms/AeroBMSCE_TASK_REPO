"use client";

import { motion, useReducedMotion } from "motion/react";
import { EASE } from "@/lib/motion";

/** Re-mounts on every navigation, so each page fades in. Header and footer stay put. */
export default function Template({ children }: { children: React.ReactNode }) {
	const reduce = useReducedMotion();

	return (
		<motion.div
			animate={{ opacity: 1, y: 0 }}
			initial={reduce ? false : { opacity: 0, y: 10 }}
			transition={{ duration: 0.4, ease: EASE }}
		>
			{children}
		</motion.div>
	);
}
