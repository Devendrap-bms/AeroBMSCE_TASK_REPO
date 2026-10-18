import { DetailPage } from "@/components/detail-page";

export default function AchievementsPage() {
	return (
		<DetailPage
			description="AeroBMSCE's competition history reflects student effort across aircraft design, technical presentations, aeromodelling and drone racing."
			eyebrow="Our Journey"
			sections={[
				{
					title: "2026 — International and National Events",
					description:
						"Reported achievements from the 2026 competition season.",
					items: [
						"SAE International Aero Design West: second place under MATLAB Simulation Awards.",
						"SAE International Aero Design West: reported overall 16th globally in the Micro Class category.",
						"SAE Aerothon 2026: first place in the Unique Technology Development category at ADDC 2026.",
					],
				},
				{
					title: "2025 — Technical Recognition",
					description: "Competition results reported for the 2025 season.",
					items: [
						"SAE Aerothon: second place overall, with a reported ₹1,25,000 prize.",
						"SAE Drone Design Challenge: first place for Best Technical Presentation.",
						"SAE Autonomous Drone Design Challenge: first place for Best Innovation.",
					],
				},
				{
					title: "2024 — Aircraft and Drone Competitions",
					description:
						"Participation and reported podium finishes across drone racing and international aircraft design.",
					items: [
						"NITK Drone Racing Competition: second place.",
						"Global Academy of Technology Drone Racing: first place.",
						"SAE International Aero Design West: reported 12th place globally.",
					],
				},
				{
					title: "2022 — Multiple Competition Formats",
					description:
						"Teams competed in aircraft design, autonomous drone challenges and technical exhibitions.",
					items: [
						"SAE Aerothon: third place.",
						"South India Exhibition: second place.",
						"AI-VTOL at Techfest, IIT Bombay: reported fourth place nationally.",
						"SAE International Aero Design West: reported ninth in design report and eleventh in technical presentation.",
					],
				},
				{
					title: "2020 — SAE Competition Results",
					description:
						"Team Blue Impulse was reported to have achieved first place overall at SAE-India.",
					items: [
						"SAE-India: reported first place overall.",
						"SAE Aero Design West: reported eighth place in design standings globally.",
					],
				},
				{
					title: "2018 — Design and Engineering",
					description:
						"A reported milestone in SAE India competition participation.",
					items: [
						"SAE India, Anna University Chennai: third place overall.",
						"Second place in Design Report.",
					],
				},
			]}
			title="Built through competition and iteration."
		/>
	);
}
