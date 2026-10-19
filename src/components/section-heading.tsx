import { cn } from "@/lib/utils";

type Props = {
	align?: "left" | "center";
	className?: string;
	description?: string;
	eyebrow?: string;
	size?: "lg" | "md";
	title: string;
};

/** Colours are tokens, so this reads correctly on light, .on-dark and .on-brand sections. */
export function SectionHeading({
	align = "left",
	className,
	description,
	eyebrow,
	size = "lg",
	title,
}: Props) {
	return (
		<div
			className={cn(
				"max-w-2xl",
				align === "center" && "mx-auto text-center",
				className,
			)}
		>
			{eyebrow ? (
				<p className="type-eyebrow mb-4 text-primary">{eyebrow}</p>
			) : null}
			<h2 className={size === "lg" ? "type-h2" : "type-h3 text-3xl"}>
				{title}
			</h2>
			{description ? (
				<p
					className={cn(
						"type-lead mt-5 text-muted-foreground",
						align === "center" && "mx-auto",
					)}
				>
					{description}
				</p>
			) : null}
		</div>
	);
}
