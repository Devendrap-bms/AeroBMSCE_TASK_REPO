export type Tier = {
	benefits: string[];
	icon: string;
	name: string;
	tagline: string;
};

export const tiers: Tier[] = [
	{
		benefits: [
			"Primary logo on aircraft & UAV models",
			"Logo placement and verbal acknowledgement in official videos and key events",
			"Priority placement on flags, banners & standees",
			"Featured in reports, submissions & press releases",
			"Direct engagement with core team & leads",
			"Association with flagship projects & major events",
		],
		icon: "/images/icon-platinum.png",
		name: "Platinum partner",
		tagline: "Title partner, strategic alignment",
	},
	{
		benefits: [
			"Secondary logo on selected aircraft models",
			"Logo on team uniforms & presentations",
			"Shared branding on competition banners & standees",
			"Recognition across events & social media",
			"Branding during workshops & technical events",
			"Presence at national & international competitions",
		],
		icon: "/images/icon-gold.png",
		name: "Gold partner",
		tagline: "High visibility, competition presence",
	},
	{
		benefits: [
			"Logo on team uniforms",
			"Logo on presentations & project materials",
			"Inclusion on team banners & shared standees",
			"Recognition in event communications",
			"Social media mentions during competitions",
			"Visibility at select AeroBMSCE events",
		],
		icon: "/images/icon-silver.png",
		name: "Silver partner",
		tagline: "Event & media visibility",
	},
	{
		benefits: [
			"Tools showcased in design & competition reports",
			"Credit in technical presentations & submissions",
			"Co-branded hands-on workshops",
			"Logo on reports, posters & certificates",
			"Technical banners & workshop standees",
			"Early access to high-performing students",
		],
		icon: "/images/icon-technical.png",
		name: "Technical & ecosystem partner",
		tagline: "Design, simulation and analysis",
	},
];

/** The original site gives no dates for these, so they are labelled "Planned". */
export const upcomingCompetitions = [
	{
		badge: "Planned",
		description: "Organized by the Aeronautical Society of India",
		title: "NACDEC 2026",
	},
	{
		badge: "Planned",
		description: "International Rover Challenge, ISRO track",
		title: "ISRO IROC",
	},
	{ badge: "Planned", title: "NITK Drone Racing Competition 2026" },
	{ badge: "Planned", title: "SAE International Aero Design West 2027" },
	{ badge: "Planned", title: "SAE Aerothon 2027" },
];

export const partnerEnablers = [
	{
		description: "Support for travel, accommodation and logistics.",
		title: "Financial sponsorship",
	},
	{ title: "Academic & research guidance" },
	{ title: "Opportunity & exposure" },
];

export const partnerOutcomes = [
	{ title: "Early access to industry-ready aerospace & UAV talent" },
	{ title: "Association with nationally & internationally ranked teams" },
	{
		title:
			"Technical credibility through real-world flight systems & deployments",
	},
	{
		description: "20,000+ digital and 50,000+ on-ground impressions.",
		title: "High-impact brand visibility at scale",
	},
	{
		description: "SAE competitions and IIT techfests.",
		title: "Premium brand positioning within elite engineering ecosystems",
	},
];

export const ecosystem = [
	{
		group: "Design, simulation & engineering software",
		logos: [
			{ name: "SolidWorks", src: "/images/solidworks.png" },
			{ name: "Ansys", src: "/images/ansys.png" },
			{ name: "Altair", src: "/images/altair.png" },
			{ name: "Siemens", src: "/images/siemens.png" },
			{ name: "flow5", src: "/images/flow5.png" },
			{ name: "SimScale", src: "/images/simscale.png" },
		],
	},
	{
		group: "UAV hardware & component ecosystem",
		logos: [
			{ name: "DRK Store", src: "/images/drkstore.png" },
			{ name: "UAV Marketplace", src: "/images/uav-marketplace.png" },
		],
	},
	{
		group: "Academic & research interaction",
		logos: [
			{ name: "DRDO", src: "/images/drdo.png" },
			{ name: "CSIR-NAL", src: "/images/csir-nal.png" },
		],
	},
];

export const homeLogos = [
	{ name: "DRDO", src: "/images/drdo.png" },
	{ name: "CSIR-NAL", src: "/images/csir-nal.png" },
	{ name: "Ansys", src: "/images/ansys.png" },
	{ name: "Siemens", src: "/images/siemens.png" },
	{ name: "SolidWorks", src: "/images/solidworks.png" },
	{ name: "Altair", src: "/images/altair.png" },
];
