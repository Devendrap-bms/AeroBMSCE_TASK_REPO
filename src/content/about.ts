import {
	Briefcase,
	Cpu,
	Gauge,
	Globe,
	GraduationCap,
	Megaphone,
	Plane,
	Radar,
	Target,
	Wrench,
} from "lucide-react";

export const about =
	"AeroBMSCE is the official aerospace, aeromodelling, and unmanned systems innovation club of BMS College of Engineering, operating from Propel Lab–3. Established in 2012, the club brings together engineers from 10+ departments to design, build, and test advanced aircraft, drones, and autonomous systems.";

export const vision =
	"We envision AeroBMSCE as a leading aerospace and unmanned systems research group, renowned for design excellence, innovation, and competitive success. We aim to cultivate future leaders in the aerospace and drone industry, establishing a legacy of engineering excellence that inspires students worldwide.";

export const facts = [
	{ label: "Established", value: "2012" },
	{ label: "Home", value: "Propel Lab–3, BMS College of Engineering" },
	{ label: "Members from", value: "10+ departments" },
];

/* Stat values come from the original site. It also says "16+ years" while stating 2012; confirm with the club. */
export const homeStats = [
	{ animate: false, label: "Year established", value: 2012 },
	{ label: "Projects completed", suffix: "+", value: 75 },
	{ label: "Podium finishes", suffix: "+", value: 20 },
	{ label: "Departments represented", suffix: "+", value: 10 },
];

export const achievementStats = [
	{ label: "Projects completed", suffix: "+", value: 75 },
	{
		label: "Research papers, reports and certifications",
		suffix: "+",
		value: 50,
	},
	{ label: "Podium finishes", suffix: "+", value: 20 },
	{ label: "Departments collaborating", suffix: "+", value: 10 },
];

export const whatWeDo = [
	{ icon: Plane, title: "Competitive aircraft & UAV design" },
	{ icon: Radar, title: "Drone racing & autonomy" },
	{ icon: Wrench, title: "Industry-grade fabrication & testing" },
	{
		icon: GraduationCap,
		title: "Talent development through real-world engineering",
	},
];

export const whyItMatters = [
	{ icon: Target, title: "Engineers trained on real constraints" },
	{ icon: Briefcase, title: "Talent exposure before graduation" },
	{ icon: Megaphone, title: "Brand visibility in elite technical ecosystems" },
];

export const principles = [
	{
		description: "Turn engineering theory into practical experience.",
		title: "Learn by doing",
	},
	{
		description: "Bring different disciplines together to solve problems.",
		title: "Think collaboratively",
	},
	{
		description: "Build, test, analyse, and improve every iteration.",
		title: "Engineer with purpose",
	},
];

export const teams = [
	{
		description: "International competitions",
		icon: Globe,
		title: "Team Yaksha",
	},
	{
		description: "Aeromodelling. Won the SAE India national title in 2020.",
		icon: Plane,
		title: "Team Blue Impulse",
	},
	{
		description: "Drone development",
		icon: Cpu,
		title: "Team Flying Phantoms",
	},
	{ description: "Drone racing", icon: Gauge, title: "Team Vectors" },
];

export const research = [
	{
		description: "End-to-end hardware and firmware design.",
		title: "Indigenous flight controller development",
	},
	{
		description: "High-efficiency propulsion electronics.",
		title: "Electronic speed controller (ESC) development",
	},
	{
		description: "Vision- and sensor-based autonomous navigation.",
		title: "GPS-denied navigation systems",
	},
	{
		description:
			"Re-configurable multi-mission fixed-wing UAV with convertible propulsion and an integrated modular payload bay.",
		title: "Surveillance aircraft development",
	},
	{
		badge: "Details restricted",
		description: "Developed in collaboration with DRDO.",
		title: "Defense project",
	},
	{
		description: "Adaptive aerodynamics for performance optimization.",
		title: "Morphing wingtip mechanisms",
	},
	{
		description: "Active stability control for UAV platforms.",
		title: "Directional stability using deployable micro-fins",
	},
];

export const projectStatus = [
	"100% of the research, development and technical fabrication for our current flight systems is subsidized by the R&D department at BMS College of Engineering.",
	"We have a flight-proven product ready for the world stage.",
];

export const buildAreas = [
	{
		description:
			"Competitive aircraft and UAV design, taken through industry-grade fabrication and testing.",
		fit: "contain",
		href: "/what-we-build/#teams",
		image: "/images/cad-plane.png",
		imageAlt: "CAD model of an AeroBMSCE aircraft",
		title: "Competition aircraft",
	},
	{
		description:
			"Drone development and racing, plus autonomy and GPS-denied navigation work.",
		fit: "cover",
		href: "/what-we-build/#teams",
		image: "/images/photo2.jpg",
		imageAlt: "AeroBMSCE drone and team members",
		title: "Drones and autonomy",
	},
	{
		description:
			"Flight controllers, speed controllers, morphing wingtips, micro-fins and a project in collaboration with DRDO.",
		fit: "cover",
		href: "/what-we-build/#research",
		image: "/images/photo3.jpg",
		imageAlt: "AeroBMSCE members working on a research project",
		title: "Research and development",
	},
];

/** Alt text is intentionally generic; refine it once you have checked each photograph. */
export const gallery = [
	{ alt: "AeroBMSCE aircraft and team members", src: "/images/photo5.jpg" },
	{ alt: "AeroBMSCE team at a competition", src: "/images/photo6.jpg" },
	{
		alt: "AeroBMSCE aircraft being prepared for flight",
		src: "/images/photo7.jpg",
	},
];
