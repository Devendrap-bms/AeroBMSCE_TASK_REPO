import Image from "next/image";
import Link from "next/link";
import { LinkButton } from "@/components/link-button";
import { Separator } from "@/components/ui/separator";
import { assetPath } from "@/lib/asset-path";
import { contactLink, navigation, siteConfig } from "@/lib/site-config";

export function SiteFooter() {
	return (
		<footer className="on-dark">
			<div className="container-page grid gap-12 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
				<div>
					<Link aria-label="AeroBMSCE home" className="inline-block" href="/">
						<Image
							alt="AeroBMSCE logo"
							className="h-11 w-auto object-contain"
							height={44}
							src={assetPath("/images/header-logo.png")}
							width={160}
						/>
					</Link>
					<p className="mt-4 max-w-sm text-muted-foreground text-sm leading-6">
						The aerospace, aeromodelling and unmanned systems innovation club of
						BMS College of Engineering.
					</p>
				</div>

				<nav aria-label="Footer">
					<h2 className="font-semibold text-sm">Explore</h2>
					<ul className="mt-4 space-y-3">
						{[...navigation, contactLink].map((item) => (
							<li key={item.href}>
								<Link
									className="text-muted-foreground text-sm underline-offset-4 transition-colors hover:text-primary hover:underline"
									href={item.href}
								>
									{item.label}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				<div>
					<h2 className="font-semibold text-sm">Reach us</h2>
					<address className="mt-4 space-y-3 text-muted-foreground text-sm not-italic leading-6">
						<p>
							<a
								className="underline-offset-4 hover:text-primary hover:underline"
								href={`mailto:${siteConfig.email}`}
							>
								{siteConfig.email}
							</a>
						</p>
						<p>{siteConfig.location}</p>
					</address>
					<div className="mt-6">
						<LinkButton arrow="diagonal" href="/contact/" variant="outline">
							Collaborate with us
						</LinkButton>
					</div>
				</div>
			</div>

			<Separator />
			<p className="container-page py-6 text-muted-foreground text-sm leading-6">
				© {new Date().getFullYear()} AeroBMSCE. Recruitment-task redesign. This
				is not the official AeroBMSCE website.
			</p>
		</footer>
	);
}
