import type { Metadata } from "next";
import { LinkButton } from "@/components/link-button";
import { navigation } from "@/lib/site-config";

export const metadata: Metadata = { title: "Page not found" };

/** Exported as 404.html, which GitHub Pages serves for any unknown route. */
export default function NotFound() {
	return (
		<section className="on-dark">
			<div className="container-page section-y">
				<p className="type-eyebrow text-primary">Error 404</p>
				<h1 className="type-h1 mt-5 max-w-2xl">That page is off course.</h1>
				<p className="type-lead mt-6 text-muted-foreground">
					The page you wanted doesn’t exist or has moved. Head back home, or
					pick a destination below.
				</p>
				<div className="mt-9 flex flex-wrap gap-3">
					<LinkButton href="/">Back to home</LinkButton>
					{navigation
						.filter((item) => item.href !== "/")
						.map((item) => (
							<LinkButton
								arrow={false}
								href={item.href}
								key={item.href}
								variant="outline"
							>
								{item.label}
							</LinkButton>
						))}
				</div>
			</div>
		</section>
	);
}
