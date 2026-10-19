import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { HomeHero } from "@/components/home-hero";
import { LinkButton } from "@/components/link-button";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { StatStrip } from "@/components/stat-strip";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { about, buildAreas, homeStats, principles } from "@/content/about";
import { featuredResults } from "@/content/achievements";
import { homeLogos } from "@/content/partners";
import { assetPath } from "@/lib/asset-path";

export default function HomePage() {
	return (
		<>
			<HomeHero />
			<StatStrip stats={homeStats} />

			{/* WHO WE ARE */}
			<section className="container-page section-y grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
				<Reveal>
					<SectionHeading
						description="A student community where engineering curiosity becomes practical experience."
						eyebrow="Who we are"
						title="A shared ambition to push boundaries."
					/>
				</Reveal>
				<Reveal>
					<p className="type-lead text-foreground/85">{about}</p>
					<div className="mt-8">
						<LinkButton href="/who-we-are/" variant="link">
							Discover who we are
						</LinkButton>
					</div>
					<Stagger className="mt-14 grid gap-8 sm:grid-cols-3">
						{principles.map((principle) => (
							<StaggerItem className="border-t-2 pt-5" key={principle.title}>
								<h3 className="font-semibold text-base">{principle.title}</h3>
								<p className="mt-2 text-muted-foreground text-sm leading-6">
									{principle.description}
								</p>
							</StaggerItem>
						))}
					</Stagger>
				</Reveal>
			</section>

			{/* WHAT WE BUILD */}
			<section className="section-y bg-muted">
				<div className="container-page">
					<Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
						<SectionHeading
							eyebrow="What we build"
							title="Engineering ideas into possibilities."
						/>
						<p className="type-lead max-w-md text-muted-foreground">
							The areas where design thinking, technical analysis and
							experimentation come together.
						</p>
					</Reveal>

					<Stagger className="mt-12 grid gap-6 md:grid-cols-3">
						{buildAreas.map((area) => (
							<StaggerItem className="h-full" key={area.title}>
								<Card className="group relative h-full gap-0 overflow-hidden rounded-none border py-0 ring-0 transition-colors duration-300 focus-within:border-primary hover:border-primary motion-reduce:transition-none">
									<AspectRatio className="overflow-hidden bg-ink" ratio={3 / 2}>
										<Image
											alt={area.imageAlt}
											className={
												area.fit === "contain"
													? "object-contain p-6"
													: "object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
											}
											fill
											sizes="(min-width: 768px) 33vw, 100vw"
											src={assetPath(area.image)}
										/>
									</AspectRatio>
									<CardHeader className="flex-1 gap-3 px-7 pt-7">
										<CardTitle>
											<h3 className="type-h3">
												<Link
													className="after:absolute after:inset-0"
													href={area.href}
												>
													{area.title}
												</Link>
											</h3>
										</CardTitle>
										<CardDescription className="text-base leading-7">
											{area.description}
										</CardDescription>
									</CardHeader>
									<CardFooter className="border-0 bg-transparent px-7 pt-6 pb-7">
										<span
											aria-hidden="true"
											className="inline-flex items-center gap-2 font-semibold text-primary text-sm"
										>
											Explore this area
											<ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none" />
										</span>
									</CardFooter>
								</Card>
							</StaggerItem>
						))}
					</Stagger>
				</div>
			</section>

			{/* ACHIEVEMENTS */}
			<section className="on-dark section-y">
				<div className="container-page grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
					<Reveal>
						<SectionHeading
							description="Teams from AeroBMSCE compete in aircraft design, drone development and drone racing, at national and international events."
							eyebrow="Our achievements"
							title="Progress built through persistence."
						/>
						<div className="mt-8">
							<LinkButton href="/achievements/" variant="link">
								See every result
							</LinkButton>
						</div>
					</Reveal>

					<Stagger className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
						{featuredResults.map((result) => (
							<StaggerItem
								className="border-t pt-5"
								key={`${result.year}-${result.event}`}
							>
								<p className="font-display text-6xl text-primary leading-none">
									{result.rank}
								</p>
								<h3 className="mt-4 font-semibold text-lg">{result.event}</h3>
								<p className="mt-1 text-muted-foreground leading-6">
									{result.placement}
								</p>
								<p className="mt-3 text-muted-foreground text-sm">
									{result.year} season
								</p>
							</StaggerItem>
						))}
					</Stagger>
				</div>
			</section>

			{/* ECOSYSTEM */}
			<section className="container-page section-y">
				<Reveal>
					<SectionHeading
						align="center"
						description="Research organisations, engineering software and component suppliers we work with."
						eyebrow="Collaboration ecosystem"
						title="Learning alongside industry."
					/>
				</Reveal>
				<Stagger className="mt-12 grid grid-cols-2 border-t border-l sm:grid-cols-3 lg:grid-cols-6">
					{homeLogos.map((logo) => (
						<StaggerItem
							className="flex min-h-28 items-center justify-center border-r border-b bg-card p-6"
							key={logo.name}
						>
							<Image
								alt={logo.name}
								className="max-h-14 w-auto max-w-full object-contain"
								height={56}
								src={assetPath(logo.src)}
								width={140}
							/>
						</StaggerItem>
					))}
				</Stagger>
				<div className="mt-10 flex justify-center">
					<LinkButton href="/partners/" variant="link">
						Explore partnerships
					</LinkButton>
				</div>
			</section>

			<CtaBand />
		</>
	);
}
