import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = { title: "Contact" };

const interests = [
	"Industry and sponsorship partnerships",
	"Technical and research collaboration",
	"Joining the team and student enquiries",
];

export default function ContactPage() {
	return (
		<>
			<PageHero
				crumb="Contact"
				description="Have an idea, a research opportunity or a proposal? Tell us about it. We would be glad to hear from you."
				eyebrow="Contact & collaboration"
				title="Let’s build something that flies."
			/>

			<section className="container-page section-y grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
				<Reveal>
					<h2 className="type-h3 text-3xl">Prefer to write directly?</h2>
					<Separator className="mt-8" />
					<div className="py-5">
						<p className="font-semibold text-muted-foreground text-sm">Email</p>
						<a
							className="mt-1 inline-block break-all font-semibold text-primary underline-offset-4 hover:underline"
							href={`mailto:${siteConfig.email}`}
						>
							{siteConfig.email}
						</a>
					</div>
					<Separator />
					<div className="py-5">
						<p className="font-semibold text-muted-foreground text-sm">
							{siteConfig.partnershipHead.role}
						</p>
						<p className="mt-1">{siteConfig.partnershipHead.name}</p>
					</div>
					<Separator />
					<div className="py-5">
						<p className="font-semibold text-muted-foreground text-sm">
							Location
						</p>
						<p className="mt-1">{siteConfig.location}</p>
					</div>
					<Separator />
					<h3 className="mt-8 font-semibold text-sm">We can help with</h3>
					<ul className="mt-3 space-y-2 text-muted-foreground leading-7">
						{interests.map((interest) => (
							<li key={interest}>{interest}</li>
						))}
					</ul>
				</Reveal>

				<Reveal>
					<Card className="rounded-none border py-0 ring-0">
						<CardContent className="p-6 sm:p-10">
							<ContactForm />
						</CardContent>
					</Card>
				</Reveal>
			</section>
		</>
	);
}
