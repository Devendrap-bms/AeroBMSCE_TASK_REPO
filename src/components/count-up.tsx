"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { EASE } from "@/lib/motion";

type Props = { animateValue?: boolean; suffix?: string; value: number };

/** Counts up once when scrolled into view. Screen readers get the final number only. */
export function CountUp({ animateValue = true, suffix = "", value }: Props) {
	const ref = useRef<HTMLSpanElement>(null);
	const inView = useInView(ref, { amount: 0.6, once: true });
	const reduce = useReducedMotion();
	const [shown, setShown] = useState(value);

	useEffect(() => {
		if (!inView || reduce || !animateValue) return;

		const controls = animate(0, value, {
			duration: 1.4,
			ease: EASE,
			onUpdate: (latest) => setShown(Math.round(latest)),
		});

		return () => controls.stop();
	}, [animateValue, inView, reduce, value]);

	return (
		<span ref={ref}>
			<span aria-hidden="true">
				{shown}
				{suffix}
			</span>
			<span className="sr-only">
				{value}
				{suffix}
			</span>
		</span>
	);
}
