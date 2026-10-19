import type { Metadata } from "next";
import Image from "next/image";
import { FeatureList } from "@/components/feature-list";
import { LinkButton } from "@/components/link-button";
import { PageHero } from "@/components/page-hero";
import { PartnerTierCard } from "@/components/partner-tier-card";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { projectStatus } from "@/content/about";
import {
	ecosystem,
	partnerEnablers,
	partnerOutcomes,
	tiers,
	upcomingCompetitions,
} from "@/content/partners";
import { assetPath } from "@/lib/asset-path";
import { mailto, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = { title: "Partner with us" };

export default function PartnersPage() {
	return (
		<>
			<PageHero
				crumb="Partners"
				description="Back a flight-proven student team that competes nationally and internationally. Partners support travel, logistics and the engineering behind every aircraft."
				eyebrow="Industry and collaboration"
				image={{
					alt: "AeroBMSCE aircraft at a competition",
					src: "/images/photo6.jpg",
				}}
				title="Help shape the next generation of aerospace engineering."
			>
				<LinkButton arrow="diagonal" href={mailto("Partnership enquiry")}>
					Discuss partnership
				</LinkButton>
				<LinkButton arrow={false} href="#tiers" variant="outline">
					See collaboration tiers
				</LinkButton>
			</PageHero>

			<section className="container-page section-y grid gap-14 lg:grid-cols-2 lg:gap-20">
				<Reveal>
					<SectionHeading
						className="mb-8"
						description="We aim to compete in these events. Dates are to be confirmed."
						size="md"
						title="Upcoming competitions, 2026 and 2027"
					/>
					<FeatureList items={upcomingCompetitions} />
				</Reveal>
				<Reveal>
					<SectionHeading
						className="mb-8"
						size="md"
						title="How our partners enable this"
					/>
					<FeatureList items={partnerEnablers} />
					<div className="mt-8">
						<LinkButton href="/what-we-build/#research" variant="link">
							See our research and development work
						</LinkButton>
					</div>
				</Reveal>
			</section>

			<section className="on-dark section-y">
				<div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
					<Reveal>
						<SectionHeading
							eyebrow="Project status"
							title="Strategic project status."
						/>
					</Reveal>
					<Stagger className="space-y-8">
						{projectStatus.map((statement) => (
							<StaggerItem
								className="border-primary border-l-4 pl-6 font-display text-2xl leading-snug"
								key={statement}
							>
								{statement}
							</StaggerItem>
						))}
					</Stagger>
				</div>
			</section>

			<section className="container-page section-y" id="tiers">
				<Reveal>
					<SectionHeading
						description="Four ways to work with us. Each tier lists the visibility and engagement partners receive."
						eyebrow="Collaboration tiers"
						title="Choose how you want to partner."
					/>
				</Reveal>
				<Stagger className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
					{tiers.map((tier, index) => (
						<StaggerItem className="h-full" key={tier.name}>
							<PartnerTierCard featured={index === 0} tier={tier} />
						</StaggerItem>
					))}
				</Stagger>
			</section>

			<section className="section-y bg-muted">
				<div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
					<Reveal>
						<SectionHeading
							eyebrow="Why partner with us"
							title="What partners gain."
						/>
					</Reveal>
					<Reveal>
						<FeatureList items={partnerOutcomes} />
					</Reveal>
				</div>
			</section>

			<section className="container-page section-y">
				<Reveal>
					<SectionHeading
						eyebrow="Our collaboration ecosystem"
						title="Tools and institutions we work with."
					/>
				</Reveal>
				<div className="mt-12 space-y-10">
					{ecosystem.map((group) => (
						<Reveal key={group.group}>
							<h3 className="font-semibold text-base text-muted-foreground">
								{group.group}
							</h3>
							<ul className="mt-4 flex flex-wrap gap-3">
								{group.logos.map((logo) => (
									<li
										className="flex h-20 w-40 items-center justify-center border bg-card p-4"
										key={logo.name}
									>
										<Image
											alt={logo.name}
											className="max-h-full w-auto max-w-full object-contain"
											height={56}
											src={assetPath(logo.src)}
											width={140}
										/>
									</li>
								))}
							</ul>
						</Reveal>
					))}
				</div>
			</section>

			<section className="on-brand">
				<Reveal className="container-page flex flex-col justify-between gap-8 py-14 lg:flex-row lg:items-center">
					<div>
						<h2 className="type-h2">
							Talk to {siteConfig.partnershipHead.name}.
						</h2>
						<p className="type-lead mt-4 text-muted-foreground">
							{siteConfig.partnershipHead.name} is our{" "}
							{siteConfig.partnershipHead.role}. Write to {siteConfig.email} to
							start the conversation.
						</p>
					</div>
					<LinkButton arrow="diagonal" href={mailto("Partnership enquiry")}>
						Email the partnership head
					</LinkButton>
				</Reveal>
			</section>
		</>
	);
}
