import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import type { Season } from "@/content/achievements";

/** Results grouped by season. Placement is the largest element in each row because it is what people scan for. */
export function AchievementLogbook({ seasons }: { seasons: Season[] }) {
	return (
		<div className="space-y-16">
			{seasons.map((season) => (
				<Reveal key={season.year}>
					<section
						aria-labelledby={`season-${season.year}-label`}
						className="grid gap-6 md:grid-cols-[9rem_1fr]"
						id={`season-${season.year}`}
					>
						<h3
							className="font-display text-5xl text-primary leading-none md:sticky md:top-28 md:self-start"
							id={`season-${season.year}-label`}
						>
							{season.year}
							<span className="mt-1 block font-sans font-semibold text-base text-muted-foreground">
								Season
							</span>
						</h3>

						<ol className="border-foreground border-t-2">
							{season.results.map((result) => (
								<li
									className="grid grid-cols-[4.5rem_1fr] gap-5 border-b py-6 sm:grid-cols-[6rem_1fr]"
									key={`${result.event}-${result.placement}`}
								>
									<span className="font-display text-4xl leading-none sm:text-5xl">
										{result.rank}
									</span>
									<div className="min-w-0">
										<h4 className="font-semibold text-lg leading-snug">
											{result.event}
										</h4>
										<p className="mt-1 leading-7">{result.placement}</p>
										{result.detail ? (
											<p className="text-muted-foreground leading-7">
												{result.detail}
											</p>
										) : null}
										<div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-muted-foreground text-sm">
											{result.date ? <span>{result.date}</span> : null}
											{result.location ? <span>{result.location}</span> : null}
											{result.prize ? (
												<Badge className="h-auto rounded-none bg-gold px-2.5 py-1 text-ink text-sm">
													Prize {result.prize}
												</Badge>
											) : null}
										</div>
									</div>
								</li>
							))}
						</ol>
					</section>
				</Reveal>
			))}
		</div>
	);
}
