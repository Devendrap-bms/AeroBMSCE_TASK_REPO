import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/cta-band";
import { FeatureList } from "@/components/feature-list";
import { PageHero } from "@/components/page-hero";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { gallery, projectStatus, research, teams } from "@/content/about";
import { assetPath } from "@/lib/asset-path";

export const metadata: Metadata = { title: "What we build" };

export default function WhatWeBuildPage() {
	return (
		<>
			<PageHero
				crumb="What we build"
				description="Aircraft design, unmanned aerial systems, simulation, fabrication and experimentation, brought together to solve practical aerospace engineering challenges."
				eyebrow="Engineering and research"
				image={{
					alt: "AeroBMSCE drone and team members",
					src: "/images/photo2.jpg",
				}}
				title="From concepts to flight-ready systems."
			/>

			<section className="container-page section-y" id="teams">
				<Reveal>
					<SectionHeading
						description="Each team has its own discipline, from international aircraft competitions to drone racing."
						eyebrow="Our teams"
						title="Four teams, four ways of flying."
					/>
				</Reveal>
				<Reveal className="mt-12">
					<FeatureList columns={2} items={teams} />
				</Reveal>
			</section>

			<section className="section-y bg-muted" id="research">
				<div className="container-page">
					<Reveal>
						<SectionHeading
							description="Ongoing and upcoming initiatives, from flight electronics to adaptive aerodynamics."
							eyebrow="Research and development"
							title="What we are working on next."
						/>
					</Reveal>
					<Reveal className="mt-12">
						<FeatureList columns={2} items={research} />
					</Reveal>
				</div>
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

			<section className="container-page section-y">
				<Reveal>
					<SectionHeading
						eyebrow="Gallery"
						title="Photographs from the club."
					/>
				</Reveal>
				<Stagger className="mt-12 grid gap-4 md:grid-cols-3">
					{gallery.map((photo) => (
						<StaggerItem key={photo.src}>
							<AspectRatio className="overflow-hidden bg-ink" ratio={4 / 3}>
								<Image
									alt={photo.alt}
									className="object-cover"
									fill
									sizes="(min-width: 768px) 33vw, 100vw"
									src={assetPath(photo.src)}
								/>
							</AspectRatio>
						</StaggerItem>
					))}
				</Stagger>
			</section>

			<CtaBand />
		</>
	);
}
