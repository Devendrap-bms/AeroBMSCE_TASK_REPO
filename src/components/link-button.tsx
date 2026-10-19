import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Variant = "default" | "outline" | "link";

type Props = {
	arrow?: "right" | "diagonal" | false;
	children: ReactNode;
	className?: string;
	href: string;
	variant?: Variant;
};

// shadcn's own buttonVariants, sized for the AeroBMSCE design. Colours come from the
// tokens, so the same call looks right on light, dark (.on-dark) and brand (.on-brand) sections.
const fit: Record<Variant, string> = {
	default: "h-12 rounded-none px-6 font-semibold text-sm",
	link: "h-auto gap-2 px-0 py-1 font-semibold text-sm underline decoration-2 underline-offset-4",
	outline:
		"h-12 rounded-none border-foreground/60 px-6 font-semibold text-sm hover:border-primary",
};

/**
 * A link that looks like a shadcn Button. The Base UI Button always sets role="button",
 * so the docs say to style real links with buttonVariants instead of Button render={<a />}.
 */
export function LinkButton({
	arrow = "right",
	children,
	className,
	href,
	variant = "default",
}: Props) {
	const Icon = arrow === "diagonal" ? ArrowUpRight : ArrowRight;
	const classes = cn(
		buttonVariants({ variant }),
		fit[variant],
		"group outline-none focus-visible:ring-[3px] focus-visible:ring-ring",
		className,
	);
	const content = (
		<>
			{children}
			{arrow ? (
				<Icon
					aria-hidden="true"
					className={cn(
						"transition-transform duration-200 motion-reduce:transition-none",
						arrow === "right"
							? "group-hover:translate-x-1"
							: "group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
					)}
					data-icon="inline-end"
				/>
			) : null}
		</>
	);

	// mailto: and external URLs are plain anchors; internal routes use next/link.
	if (/^(mailto:|https?:)/.test(href)) {
		return (
			<a className={classes} href={href}>
				{content}
			</a>
		);
	}

	return (
		<Link className={classes} href={href}>
			{content}
		</Link>
	);
}
