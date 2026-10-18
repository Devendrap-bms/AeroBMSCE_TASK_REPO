import { DetailPage } from "@/components/detail-page";

export default function WhoWeArePage() {
	return (
		<DetailPage
			description="AeroBMSCE is the aerospace, aeromodelling and unmanned systems innovation club of BMS College of Engineering, bringing students together to design, build and test real engineering systems."
			eyebrow="About AeroBMSCE"
			sections={[
				{
					title: "Our Story",
					description:
						"Established in 2012, AeroBMSCE provides a collaborative environment where students turn aerospace concepts into practical engineering projects.",
					items: [
						"Based at Propel Lab–3, BMS College of Engineering.",
						"Student participation across 10+ academic departments.",
						"A focus on practical engineering and competition experience.",
					],
				},
				{
					title: "Our Vision",
					description:
						"To develop a leading student-driven aerospace and unmanned systems research group through engineering excellence, experimentation and innovation.",
					items: [
						"Encourage independent technical thinking.",
						"Build and test systems against real constraints.",
						"Prepare students for future aerospace challenges.",
					],
				},
				{
					title: "Team Yaksha",
					description:
						"An AeroBMSCE team focused on international engineering competitions and aircraft design challenges.",
				},
				{
					title: "Team Blue Impulse",
					description:
						"A team associated with aeromodelling and the design and development of aircraft systems.",
				},
				{
					title: "Team Flying Phantoms",
					description:
						"A team focused on drone development and unmanned aerial systems.",
				},
				{
					title: "Team Vectors",
					description:
						"A team dedicated to drone racing and the engineering challenges of high-performance flight.",
				},
			]}
			title="Engineering the future of flight."
		/>
	);
}
