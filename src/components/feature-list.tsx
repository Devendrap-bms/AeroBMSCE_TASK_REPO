import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export type FeatureItem = {
	badge?: string;
	description?: string;
	icon?: LucideIcon;
	title: string;
};

type Props = { columns?: 1 | 2; items: FeatureItem[] };

/** Ruled rows for lists of items. Cards are kept for things that are actually comparable. */
export function FeatureList({ columns = 1, items }: Props) {
	return (
		<ul
			className={cn(
				"border-b",
				columns === 2 && "md:grid md:grid-cols-2 md:gap-x-12",
			)}
		>
			{items.map(({ badge, description, icon: Icon, title }) => (
				<li className="flex gap-4 border-t py-5" key={title}>
					{Icon ? (
						<Icon
							aria-hidden="true"
							className="mt-0.5 size-5 shrink-0 text-primary"
						/>
					) : null}
					<div className="min-w-0">
						<div className="flex flex-wrap items-center gap-x-3 gap-y-1">
							<h3 className="font-semibold text-lg leading-snug">{title}</h3>
							{badge ? (
								<Badge
									className="rounded-none border-primary text-primary"
									variant="outline"
								>
									{badge}
								</Badge>
							) : null}
						</div>
						{description ? (
							<p className="mt-1 text-muted-foreground leading-7">
								{description}
							</p>
						) : null}
					</div>
				</li>
			))}
		</ul>
	);
}
