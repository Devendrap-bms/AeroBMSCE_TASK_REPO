export type Result = {
	date?: string;
	detail?: string;
	event: string;
	location?: string;
	placement: string;
	prize?: string;
	rank: string; // shown large, e.g. "1st"
};

export type Season = { results: Result[]; year: number };

/** Newest first. Wording and figures follow the original site. */
export const seasons: Season[] = [
	{
		results: [
			{
				detail: "Overall #16 globally in the Micro Class category",
				event: "SAE International Aero Design West",
				location: "Fort Worth, Texas, USA",
				placement: "2nd place internationally under MATLAB Simulation Awards",
				rank: "2nd",
			},
			{
				event: "SAE Aerothon (ADDC 2026)",
				placement: "1st place under Unique Technology Development",
				rank: "1st",
			},
		],
		year: 2026,
	},
	{
		results: [
			{
				date: "Nov 2025",
				event: "SAE Aerothon",
				placement: "2nd place overall",
				prize: "₹1,25,000",
				rank: "2nd",
			},
			{
				date: "May 2025",
				event: "SAE Drone Design Challenge",
				placement: "1st place, Best Technical Presentation",
				prize: "₹10,000",
				rank: "1st",
			},
			{
				date: "Apr 2025",
				event: "SAE Autonomous Drone Design Challenge",
				placement: "1st place, Best Innovation",
				prize: "₹5,000",
				rank: "1st",
			},
		],
		year: 2025,
	},
	{
		results: [
			{
				date: "18–20 Oct 2024",
				event: "NITK Drone Racing Competition",
				placement: "2nd place",
				rank: "2nd",
			},
			{
				date: "Nov 2024",
				event: "Global Academy of Technology (Drone Racing)",
				placement: "1st place",
				rank: "1st",
			},
			{
				date: "Aug 2024",
				event: "SAE International Aero Design West",
				placement: "12th place globally",
				rank: "12th",
			},
		],
		year: 2024,
	},
	{
		results: [
			{
				event: "SAE Aerothon",
				placement: "3rd place",
				prize: "₹50,000",
				rank: "3rd",
			},
			{
				event: "South India Exhibition",
				location: "Kalpataru Institute of Technology, Tiptur, Karnataka",
				placement: "2nd place",
				prize: "₹15,000",
				rank: "2nd",
			},
			{
				event: "AI-VTOL, Techfest IIT Bombay",
				placement: "4th place nationally",
				rank: "4th",
			},
			{
				event: "SAE International Aero Design West",
				placement:
					"9th in Design Report, 11th in Technical Presentation, globally",
				rank: "9th",
			},
		],
		year: 2022,
	},
	{
		results: [
			{
				detail: "Team Blue Impulse won nationally",
				event: "SAE India",
				placement: "1st place overall",
				prize: "₹1,00,000",
				rank: "1st",
			},
			{
				event: "SAE Aero Design West",
				placement: "8th place in design standings, globally",
				rank: "8th",
			},
		],
		year: 2020,
	},
	{
		results: [
			{
				detail: "2nd place in Design Report",
				event: "SAE India",
				location: "Anna University, Chennai",
				placement: "3rd place overall",
				rank: "3rd",
			},
		],
		year: 2018,
	},
];

export const featuredResults = [
	{
		event: "SAE International Aero Design West",
		placement: "2nd place internationally under MATLAB Simulation Awards",
		rank: "2nd",
		year: 2026,
	},
	{
		event: "SAE Aerothon (ADDC 2026)",
		placement: "1st place under Unique Technology Development",
		rank: "1st",
		year: 2026,
	},
	{
		event: "SAE Aerothon",
		placement: "2nd place overall with a ₹1,25,000 prize",
		rank: "2nd",
		year: 2025,
	},
	{
		event: "SAE India",
		placement:
			"1st place overall with a ₹1,00,000 prize. Team Blue Impulse won nationally.",
		rank: "1st",
		year: 2020,
	},
];
