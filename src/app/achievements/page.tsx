import type { Metadata } from "next";
import { AchievementLogbook } from "@/components/achievement-logbook";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { StatStrip } from "@/components/stat-strip";
import { buttonVariants } from "@/components/ui/button";
import { achievementStats } from "@/content/about";
import { seasons } from "@/content/achievements";
import { cn } from "@/lib/utils";

export const metadata: Metadata = { title: "Achievements" };

export default function AchievementsPage() {
	return (
		<>
			<PageHero
				crumb="Achievements"
				description="Aircraft design, technical presentations, aeromodelling and drone racing: the competition history of AeroBMSCE, season by season."
				eyebrow="Our journey"
				image={{
					alt: "AeroBMSCE team with an aircraft",
					src: "/images/photo1.jpg",
				}}
				title="Built through competition and iteration."
			/>
			<StatStrip stats={achievementStats} />

			<section className="container-page section-y">
				<Reveal>
					<SectionHeading
						description="Newest first. Dates, locations and prizes are shown where we have them."
						eyebrow="Milestones"
						title="Results by season."
					/>
					<nav aria-label="Jump to season" className="mt-8">
						<ul className="flex flex-wrap gap-2">
							{seasons.map((season) => (
								<li key={season.year}>
									<a
										className={cn(
											buttonVariants({ size: "sm", variant: "outline" }),
											"h-10 rounded-none px-4 font-semibold",
										)}
										href={`#season-${season.year}`}
									>
										{season.year}
									</a>
								</li>
							))}
						</ul>
					</nav>
				</Reveal>

				<div className="mt-14">
					<AchievementLogbook seasons={seasons} />
				</div>
				<p className="mt-14 font-display text-3xl">And many more…</p>
			</section>

			<CtaBand />
		</>
	);
}
