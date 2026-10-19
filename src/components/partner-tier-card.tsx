import { Check } from "lucide-react";
import Image from "next/image";
import { LinkButton } from "@/components/link-button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import type { Tier } from "@/content/partners";
import { assetPath } from "@/lib/asset-path";
import { mailto } from "@/lib/site-config";
import { cn } from "@/lib/utils";

/** Tiers are the one place real cards belong: same attributes, side by side, to compare. */
export function PartnerTierCard({
	featured = false,
	tier,
}: {
	featured?: boolean;
	tier: Tier;
}) {
	return (
		<Card
			className={cn(
				"h-full gap-0 rounded-none border py-0 ring-0",
				featured && "border-t-4 border-t-primary",
			)}
		>
			<CardHeader className="gap-2 px-7 pt-7">
				<Image
					alt=""
					className="size-14 object-contain"
					height={56}
					src={assetPath(tier.icon)}
					width={56}
				/>
				<CardTitle className="mt-3">
					<h3 className="type-h3">{tier.name}</h3>
				</CardTitle>
				<CardDescription className="font-semibold text-primary text-sm">
					{tier.tagline}
				</CardDescription>
			</CardHeader>
			<CardContent className="flex-1 px-7 pt-6">
				<ul className="space-y-3 text-sm leading-6">
					{tier.benefits.map((benefit) => (
						<li className="flex gap-3" key={benefit}>
							<Check
								aria-hidden="true"
								className="mt-1 size-4 shrink-0 text-primary"
							/>
							<span>{benefit}</span>
						</li>
					))}
				</ul>
			</CardContent>
			<CardFooter className="border-0 bg-transparent px-7 pt-8 pb-7">
				<LinkButton
					arrow={false}
					className="w-full"
					href={mailto(`Partnership enquiry: ${tier.name}`)}
					variant={featured ? "default" : "outline"}
				>
					Discuss partnership
				</LinkButton>
			</CardFooter>
		</Card>
	);
}
