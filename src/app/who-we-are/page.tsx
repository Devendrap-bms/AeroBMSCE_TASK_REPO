import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { FeatureList } from "@/components/feature-list";
import { LinkButton } from "@/components/link-button";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { about, facts, vision, whatWeDo, whyItMatters } from "@/content/about";

export const metadata: Metadata = { title: "Who we are" };

export default function WhoWeArePage() {
	return (
		<>
			<PageHero
				crumb="Who we are"
				description="The aerospace, aeromodelling and unmanned systems innovation club of BMS College of Engineering, where students design, build and test real engineering systems."
				eyebrow="About AeroBMSCE"
				image={{ alt: "AeroBMSCE members together", src: "/images/photo8.jpg" }}
				title="Engineering the future of flight."
			/>

			<section className="container-page section-y grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
				<Reveal>
					<SectionHeading
						eyebrow="Our story"
						title="Built by students since 2012."
					/>
				</Reveal>
				<Reveal>
					<p className="type-lead text-foreground/85">{about}</p>
					<dl className="mt-10 border-t">
						{facts.map((fact) => (
							<div
								className="grid gap-1 border-b py-4 sm:grid-cols-[10rem_1fr]"
								key={fact.label}
							>
								<dt className="font-semibold text-muted-foreground text-sm">
									{fact.label}
								</dt>
								<dd>{fact.value}</dd>
							</div>
						))}
					</dl>
					<div className="mt-8">
						<LinkButton href="/what-we-build/#teams" variant="link">
							Meet our four teams
						</LinkButton>
					</div>
				</Reveal>
			</section>

			<section className="section-y bg-muted">
				<div className="container-page grid gap-14 lg:grid-cols-2 lg:gap-20">
					<Reveal>
						<SectionHeading className="mb-8" size="md" title="What we do" />
						<FeatureList items={whatWeDo} />
					</Reveal>
					<Reveal>
						<SectionHeading className="mb-8" size="md" title="Why it matters" />
						<FeatureList items={whyItMatters} />
					</Reveal>
				</div>
			</section>

			<section className="on-dark section-y">
				<Reveal className="container-page">
					<SectionHeading
						eyebrow="Our vision"
						title="A legacy of engineering excellence."
					/>
					<p className="mt-8 max-w-4xl font-display text-2xl leading-snug sm:text-3xl">
						{vision}
					</p>
				</Reveal>
			</section>

			<CtaBand />
		</>
	);
}
