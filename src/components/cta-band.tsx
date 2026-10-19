import { LinkButton } from "@/components/link-button";
import { Reveal } from "@/components/reveal";
import { mailto } from "@/lib/site-config";

/** Closing call to action. Every page ends here so visitors never hit a dead end. */
export function CtaBand() {
	return (
		<section className="on-brand relative overflow-hidden">
			<div
				aria-hidden="true"
				className="pointer-events-none absolute -top-24 -right-16 size-64 rounded-full border border-white/20"
			/>
			<Reveal className="container-page relative flex flex-col justify-between gap-8 py-14 lg:flex-row lg:items-center lg:py-16">
				<div>
					<h2 className="type-h2 max-w-2xl">
						Let’s shape the next chapter of aerospace.
					</h2>
					<p className="type-lead mt-4 text-muted-foreground">
						Interested in joining, collaborating on a technical project, or
						learning more about AeroBMSCE?
					</p>
				</div>
				<div className="flex shrink-0 flex-wrap gap-3">
					<LinkButton arrow="diagonal" href="/contact/">
						Contact us
					</LinkButton>
					<LinkButton
						arrow="diagonal"
						href={mailto("Enquiry for AeroBMSCE")}
						variant="outline"
					>
						Email the team
					</LinkButton>
				</div>
			</Reveal>
		</section>
	);
}
