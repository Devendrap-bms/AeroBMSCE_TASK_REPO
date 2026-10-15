"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { assetPath } from "@/lib/asset-path";

const projects = [
	{
		number: "01",
		title: "Aircraft Design",
		description:
			"Explore aerodynamic concepts, airframe design, CAD modelling, and engineering analysis.",
		image: "/images/cad-plane.png",
		tag: "DESIGN & ENGINEERING",
	},
	{
		number: "02",
		title: "Unmanned Aerial Systems",
		description:
			"Develop aerospace solutions through UAV concepts, prototyping, and testing.",
		image: "/images/photo2.jpg",
		tag: "UAV & AUTONOMOUS SYSTEMS",
	},
	{
		number: "03",
		title: "Research & Simulation",
		description:
			"Apply engineering principles through simulation, technical research, and experimentation.",
		image: "/images/photo3.jpg",
		tag: "RESEARCH & DEVELOPMENT",
	},
];

const partners = [
	{ name: "DRDO", image: "/images/drdo.png" },
	{ name: "CSIR NAL", image: "/images/csir-nal.png" },
	{ name: "ANSYS", image: "/images/ansys.png" },
	{ name: "Siemens", image: "/images/siemens.png" },
	{ name: "SolidWorks", image: "/images/solidworks.png" },
	{ name: "Altair", image: "/images/altair.png" },
];

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
	return (
		<svg
			aria-hidden="true"
			className="size-4 shrink-0"
			fill="none"
			viewBox="0 0 24 24"
		>
			{diagonal ? (
				<path
					d="M7 17 17 7M7 7h10v10"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.8"
				/>
			) : (
				<path
					d="M5 12h14m-6-6 6 6-6 6"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.8"
				/>
			)}
		</svg>
	);
}

function SectionLabel({ children }: { children: React.ReactNode }) {
	return (
		<div className="mb-5 flex items-center gap-3 font-bold text-[#a5223b] text-[11px] uppercase tracking-[0.22em] sm:text-xs">
			<span className="h-px w-8 bg-[#a5223b]" />
			{children}
		</div>
	);
}

export default function HomePage() {
	const reduceMotion = useReducedMotion();

	const entrance = {
		hidden: { opacity: 0, y: reduceMotion ? 0 : 22 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<main className="overflow-x-clip bg-[#faf9f6] text-[#19191b]">
			{/* HERO */}
			<section
				className="relative isolate min-h-[600px] overflow-hidden bg-[#15171c] text-white lg:min-h-[680px]"
				id="home"
			>
				<Image
					alt=""
					aria-hidden="true"
					className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-30"
					src={assetPath("/images/bg.jpg")}
				/>

				<div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#15171c] via-[#15171c]/90 to-[#15171c]/25" />
				<div className="absolute inset-y-0 right-0 -z-10 hidden w-[44%] border-white/10 border-l lg:block" />
				<div className="absolute top-[18%] right-[8%] -z-10 hidden size-[390px] rounded-full border border-white/15 lg:block" />
				<div className="absolute top-[23%] right-[12%] -z-10 hidden size-[310px] rounded-full border border-[#d5b36a]/40 lg:block" />

				<div className="mx-auto grid min-h-[600px] max-w-[1440px] items-center gap-12 px-5 py-16 sm:px-8 lg:min-h-[680px] lg:grid-cols-[1.05fr_0.95fr] lg:px-14 lg:py-20">
					<motion.div
						animate="visible"
						className="max-w-3xl"
						initial="hidden"
						variants={{
							hidden: {},
							visible: {
								transition: {
									staggerChildren: reduceMotion ? 0 : 0.12,
								},
							},
						}}
					>
						<motion.div
							className="mb-7 flex items-center gap-3 font-semibold text-[#e0c37f] text-[11px] uppercase tracking-[0.22em] sm:text-xs"
							transition={{ duration: reduceMotion ? 0 : 0.6 }}
							variants={entrance}
						>
							<span className="h-px w-10 bg-[#e0c37f]" />
							Engineering beyond boundaries
						</motion.div>

						<motion.h1
							className="max-w-3xl font-semibold text-[clamp(2.8rem,7vw,5.5rem)] leading-[1.02] tracking-[-0.055em]"
							transition={{ duration: reduceMotion ? 0 : 0.75 }}
							variants={entrance}
						>
							Turning
							<br />
							<span className="text-[#e0c37f]">aerospace ideas</span>
							<br />
							into reality.
						</motion.h1>

						<motion.p
							className="mt-7 max-w-xl text-base text-white/75 leading-8 sm:text-lg"
							transition={{ duration: reduceMotion ? 0 : 0.65 }}
							variants={entrance}
						>
							A student-driven aerospace engineering community at BMS College of
							Engineering, exploring aircraft design, research, simulation, and
							the future of flight.
						</motion.p>

						<motion.div
							className="mt-9 flex flex-wrap gap-3 sm:gap-4"
							transition={{ duration: reduceMotion ? 0 : 0.6 }}
							variants={entrance}
						>
							<a
								className="group inline-flex items-center gap-3 bg-[#a5223b] px-5 py-4 font-semibold text-sm text-white transition-colors duration-300 hover:bg-[#bd304a] sm:px-6"
								href="#what-we-build"
							>
								Explore our work
								<span className="transition-transform duration-300 group-hover:translate-x-1">
									<ArrowIcon />
								</span>
							</a>
							<a
								className="inline-flex items-center gap-3 border border-white/30 px-5 py-4 font-semibold text-sm text-white transition-colors duration-300 hover:border-[#e0c37f] hover:text-[#e0c37f] sm:px-6"
								href="#who-we-are"
							>
								Discover AeroBMSCE
							</a>
						</motion.div>

						<motion.div
							className="mt-12 flex items-center gap-4 border-white/15 border-t pt-6"
							transition={{ duration: reduceMotion ? 0 : 0.6 }}
							variants={entrance}
						>
							<span className="font-bold text-[#e0c37f] text-xs tracking-[0.16em]">
								BMSCE
							</span>
							<span className="h-4 w-px bg-white/25" />
							<p className="text-white/65 text-xs leading-5">
								Curiosity. Engineering. Flight.
							</p>
						</motion.div>
					</motion.div>

					<motion.div
						animate={{ opacity: 1, x: 0 }}
						className="relative hidden h-[450px] items-center justify-center lg:flex"
						initial={reduceMotion ? false : { opacity: 0, x: 28 }}
						transition={{
							duration: reduceMotion ? 0 : 0.9,
							delay: reduceMotion ? 0 : 0.25,
							ease: [0.22, 1, 0.36, 1],
						}}
					>
						<div className="absolute top-8 right-0 w-[78%] border border-white/15 bg-white/[0.04] p-4 backdrop-blur-sm">
							<div className="mb-3 flex items-center justify-between text-[10px] text-white/60 uppercase tracking-[0.18em]">
								<span>Engineering in motion</span>
								<span>AB / 01</span>
							</div>
							<Image
								alt="Aircraft design model"
								className="h-[300px] w-full object-contain"
								src={assetPath("/images/cad-plane.png")}
							/>
							<div className="mt-3 flex justify-between border-white/15 border-t pt-3 text-white/65 text-xs">
								<span>Aircraft design</span>
								<span className="text-[#e0c37f]">01 — 03</span>
							</div>
						</div>
						<div className="absolute bottom-0 left-0 z-10 max-w-[190px] border border-[#d5b36a]/50 bg-[#202127] p-5">
							<p className="text-[#e0c37f] text-[10px] uppercase tracking-[0.18em]">
								Our mindset
							</p>
							<p className="mt-3 font-medium text-lg leading-snug">
								Build. Test. Learn. Repeat.
							</p>
						</div>
					</motion.div>
				</div>

				<div className="absolute bottom-0 left-0 h-1 w-1/3 bg-[#a5223b]" />
				<div className="absolute bottom-0 left-1/3 h-1 w-1/3 bg-[#d5b36a]" />
			</section>

			{/* WHO WE ARE */}
			<section
				className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-14 lg:py-28"
				id="who-we-are"
			>
				<Reveal>
					<div>
						<SectionLabel>Who we are</SectionLabel>
						<h2 className="max-w-lg font-semibold text-4xl leading-[1.1] tracking-[-0.045em] sm:text-5xl">
							A shared ambition to push boundaries.
						</h2>
					</div>
				</Reveal>

				<Reveal delay={0.1}>
					<div className="max-w-2xl">
						<p className="text-[#555257] text-lg leading-8">
							AeroBMSCE is the aerospace, aeromodelling, and unmanned systems
							innovation club of BMS College of Engineering. Established in
							2012, the team brings together students interested in designing,
							building, and testing aerospace systems.
						</p>
						<p className="mt-5 text-[#6b686d] leading-8">
							From early concepts to engineering analysis, members explore
							technical ideas, share knowledge, and develop solutions through
							collaboration and practical engineering.
						</p>

						<a
							className="group mt-8 inline-flex items-center gap-3 border-[#a5223b] border-b pb-2 font-semibold text-[#a5223b] text-sm"
							href="#what-we-build"
						>
							Discover what we do
							<span className="transition-transform duration-300 group-hover:translate-x-1">
								<ArrowIcon />
							</span>
						</a>

						<div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
							{[
								["01", "Learn by doing"],
								["02", "Think collaboratively"],
								["03", "Engineer with purpose"],
							].map(([number, label], index) => (
								<Reveal delay={index * 0.08} key={number}>
									<div className="h-full border-black/15 border-t pt-4">
										<span className="font-bold text-[#a5223b] text-xs tracking-widest">
											{number}
										</span>
										<p className="mt-3 font-semibold text-sm">{label}</p>
									</div>
								</Reveal>
							))}
						</div>
					</div>
				</Reveal>
			</section>

			{/* WHAT WE BUILD */}
			<section
				className="bg-[#f0eee9] px-5 py-20 sm:px-8 lg:px-14 lg:py-24"
				id="what-we-build"
			>
				<div className="mx-auto max-w-[1312px]">
					<Reveal>
						<div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
							<div>
								<SectionLabel>What we build</SectionLabel>
								<h2 className="max-w-2xl font-semibold text-4xl leading-[1.1] tracking-[-0.045em] sm:text-5xl">
									Engineering ideas into possibilities.
								</h2>
							</div>
							<p className="max-w-md text-[#625f63] leading-7">
								Explore the areas where design thinking, technical analysis, and
								experimentation come together.
							</p>
						</div>
					</Reveal>

					<div className="mt-10 grid gap-5 md:grid-cols-3">
						{projects.map((project, index) => (
							<Reveal delay={index * 0.1} key={project.number}>
								<article className="group h-full overflow-hidden border border-black/10 bg-[#faf9f6] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
									<div className="relative h-52 overflow-hidden bg-[#24262b] sm:h-56">
										<Image
											alt={project.title}
											className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
											loading="lazy"
											src={assetPath(project.image)}
										/>
										<span className="absolute top-4 left-4 bg-[#a5223b] px-3 py-2 font-bold text-[10px] text-white tracking-[0.15em]">
											{project.tag}
										</span>
										<span className="absolute right-4 bottom-3 font-light text-3xl text-white/90">
											{project.number}
										</span>
									</div>

									<div className="p-6 sm:p-7">
										<h3 className="font-semibold text-xl tracking-tight">
											{project.title}
										</h3>
										<p className="mt-3 min-h-[84px] text-[#69666b] text-sm leading-7">
											{project.description}
										</p>
										<a
											className="group/link mt-5 inline-flex items-center gap-3 font-semibold text-[#a5223b] text-sm"
											href="#contact"
										>
											Explore possibilities
											<span className="transition-transform duration-300 group-hover/link:translate-x-1">
												<ArrowIcon />
											</span>
										</a>
									</div>
								</article>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* ACHIEVEMENTS */}
			<section
				className="bg-[#191a1f] px-5 py-20 text-white sm:px-8 lg:px-14 lg:py-24"
				id="achievements"
			>
				<div className="mx-auto grid max-w-[1312px] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
					<Reveal>
						<div>
							<SectionLabel>Our achievements</SectionLabel>
							<h2 className="font-semibold text-4xl leading-[1.1] tracking-[-0.045em] sm:text-5xl">
								Progress built through persistence.
							</h2>
							<p className="mt-6 max-w-lg text-white/70 leading-8">
								AeroBMSCE teams have competed in aircraft design, drone
								development, and drone racing events. Their journey includes
								national and international competitions.
							</p>
							<a
								className="group mt-8 inline-flex items-center gap-3 border-[#e0c37f] border-b pb-2 font-semibold text-[#e0c37f] text-sm"
								href="#contact"
							>
								Build what comes next
								<span className="transition-transform duration-300 group-hover:translate-x-1">
									<ArrowIcon />
								</span>
							</a>
						</div>
					</Reveal>

					<div className="grid gap-7 sm:grid-cols-2">
						{[
							{
								title: "Established 2012",
								description:
									"A student aerospace team at BMS College of Engineering.",
							},
							{
								title: "Global competition",
								description:
									"Participation in SAE International Aero Design competitions.",
							},
							{
								title: "Aircraft & UAVs",
								description:
									"Work across aeromodelling, aircraft design, and unmanned aerial systems.",
							},
							{
								title: "Student-led",
								description:
									"Learning through design, fabrication, analysis, and testing.",
							},
						].map((item, index) => (
							<Reveal delay={index * 0.08} key={item.title}>
								<div className="h-full border-white/20 border-t pt-5">
									<p className="font-semibold text-[#e0c37f] text-xl sm:text-2xl">
										{item.title}
									</p>
									<p className="mt-3 text-sm text-white/70 leading-6">
										{item.description}
									</p>
								</div>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* INDUSTRY CONNECTIONS */}
			<section className="px-5 py-20 sm:px-8 lg:px-14 lg:py-24" id="partners">
				<div className="mx-auto max-w-[1312px]">
					<Reveal>
						<div className="text-center">
							<div className="flex justify-center">
								<SectionLabel>Industry connections</SectionLabel>
							</div>
							<h2 className="font-semibold text-4xl leading-[1.1] tracking-[-0.045em] sm:text-5xl">
								Learning alongside industry.
							</h2>
							<p className="mx-auto mt-5 max-w-2xl text-[#68656a] leading-7">
								The aerospace ecosystem spans research organisations,
								engineering software, and advanced design tools.
							</p>
						</div>
					</Reveal>

					<div className="mt-10 grid grid-cols-2 border-black/10 border-t border-l sm:grid-cols-3 lg:grid-cols-6">
						{partners.map((partner, index) => (
							<Reveal delay={index * 0.05} key={partner.name}>
								<div className="flex min-h-28 items-center justify-center border-black/10 border-r border-b p-5 grayscale transition-all duration-300 hover:bg-[#f5f2ec] hover:grayscale-0">
									<Image
										alt={partner.name}
										className="max-h-16 max-w-full object-contain"
										loading="lazy"
										src={assetPath(partner.image)}
									/>
								</div>
							</Reveal>
						))}
					</div>
					<p className="mt-4 text-center text-[#77737a] text-xs leading-5">
						Logos are displayed using the supplied website assets. Their
						presence does not independently establish a formal partnership.
					</p>
				</div>
			</section>

			{/* CONTACT CTA */}
			<section className="px-5 pb-20 sm:px-8 lg:px-14" id="contact">
				<Reveal>
					<div className="mx-auto flex max-w-[1312px] flex-col justify-between gap-8 bg-[#a5223b] px-7 py-10 text-white sm:px-12 lg:flex-row lg:items-center lg:py-14">
						<div>
							<p className="font-bold text-[11px] text-white/80 uppercase tracking-[0.22em] sm:text-xs">
								Have an idea?
							</p>
							<h2 className="mt-4 max-w-2xl font-semibold text-3xl leading-[1.12] tracking-[-0.04em] sm:text-4xl">
								Let&apos;s shape the next chapter of aerospace.
							</h2>
							<p className="mt-4 max-w-xl text-white/85 leading-7">
								Interested in collaboration, technical projects, or learning
								more about AeroBMSCE?
							</p>
						</div>
						<a
							className="group inline-flex w-fit shrink-0 items-center gap-3 border border-white/70 px-6 py-4 font-semibold text-sm transition-colors duration-300 hover:bg-white hover:text-[#a5223b]"
							href="mailto:aerobmsce@bmsce.ac.in"
						>
							Contact AeroBMSCE
							<span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
								<ArrowIcon diagonal />
							</span>
						</a>
					</div>
				</Reveal>
			</section>
		</main>
	);
}
