import Link from "next/link";

type DetailSection = {
	title: string;
	description: string;
	items?: string[];
};

type DetailPageProps = {
	eyebrow: string;
	title: string;
	description: string;
	sections: DetailSection[];
};

export function DetailPage({
	eyebrow,
	title,
	description,
	sections,
}: DetailPageProps) {
	return (
		<main className="min-h-screen bg-[#faf9f6] text-[#202126]">
			<section className="relative overflow-hidden border-black/10 border-b bg-[#17191f] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-14 lg:py-32">
				<div
					aria-hidden="true"
					className="absolute -top-20 -right-16 h-72 w-72 rounded-full border border-white/10 sm:h-96 sm:w-96"
				/>

				<div className="relative mx-auto max-w-6xl">
					<Link
						className="mb-10 inline-flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-white"
						href="/#home"
					>
						<span aria-hidden="true">←</span>
						Back to home
					</Link>

					<p className="mb-5 font-bold text-[#e8bd62] text-xs uppercase tracking-[0.24em]">
						{eyebrow}
					</p>

					<h1 className="max-w-4xl font-semibold text-4xl leading-tight tracking-tight sm:text-5xl lg:text-7xl">
						{title}
					</h1>

					<p className="mt-7 max-w-2xl text-base text-white/70 leading-8 sm:text-lg">
						{description}
					</p>

					<div className="mt-9 h-1 w-20 bg-[#a5223b]" />
				</div>
			</section>

			<section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:px-14">
				<div className="grid gap-6 md:grid-cols-2">
					{sections.map((section, index) => (
						<article
							className="border border-black/10 bg-white p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-8"
							key={section.title}
						>
							<p className="mb-5 font-bold text-[#a5223b] text-xs tracking-[0.2em]">
								{String(index + 1).padStart(2, "0")}
							</p>

							<h2 className="font-semibold text-xl tracking-tight sm:text-2xl">
								{section.title}
							</h2>

							<p className="mt-4 text-[#66636a] text-sm leading-7 sm:text-base">
								{section.description}
							</p>

							{section.items && (
								<ul className="mt-5 space-y-3">
									{section.items.map((item) => (
										<li
											className="flex gap-3 text-[#45434a] text-sm leading-6"
											key={item}
										>
											<span
												aria-hidden="true"
												className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a5223b]"
											/>
											<span>{item}</span>
										</li>
									))}
								</ul>
							)}
						</article>
					))}
				</div>

				<div className="mt-14 flex flex-col gap-5 border-black/10 border-t pt-8 sm:flex-row sm:items-center sm:justify-between">
					<p className="max-w-xl text-[#66636a] text-sm leading-7">
						Explore more of AeroBMSCE’s work, milestones and collaboration
						opportunities.
					</p>

					<Link
						className="inline-flex w-fit items-center gap-3 bg-[#a5223b] px-6 py-4 font-semibold text-sm text-white transition-colors hover:bg-[#81182d]"
						href="/#contact"
					>
						Get in touch
						<span aria-hidden="true">↗</span>
					</Link>
				</div>
			</section>
		</main>
	);
}
