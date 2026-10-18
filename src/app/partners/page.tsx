import { DetailPage } from "@/components/detail-page";

export default function PartnersPage() {
	return (
		<DetailPage
			description="Partnerships can support student engineering, competition participation, research guidance and the development of practical aerospace systems."
			eyebrow="Industry and Collaboration"
			sections={[
				{
					title: "Platinum Partnerships",
					description:
						"A proposed top-tier collaboration for organisations seeking sustained engagement with the club.",
					items: [
						"Discuss long-term technical collaboration.",
						"Explore major project or competition sponsorship.",
						"Plan engagement around mutually agreed objectives.",
					],
				},
				{
					title: "Gold Partnerships",
					description:
						"Support focused engineering initiatives, competition preparation or research activities.",
					items: [
						"Project-level sponsorship discussions.",
						"Technical mentoring opportunities.",
						"Agreed visibility and engagement benefits.",
					],
				},
				{
					title: "Silver Partnerships",
					description:
						"Support specific activities, student development and competition requirements.",
					items: [
						"Contribute to defined project needs.",
						"Explore student engagement opportunities.",
						"Support selected club initiatives.",
					],
				},
				{
					title: "Technical and Ecosystem Partners",
					description:
						"Technical support can help students learn industry tools and develop stronger engineering practices.",
					items: [
						"Engineering software and simulation resources.",
						"Technical workshops and expert guidance.",
						"Equipment, components or fabrication support.",
					],
				},
				{
					title: "Research and Development",
					description:
						"Potential collaboration areas include UAV development, flight electronics, navigation and aircraft design.",
					items: [
						"Joint technical discussions.",
						"Research mentoring and design reviews.",
						"Prototype development and evaluation.",
					],
				},
				{
					title: "Competition Support",
					description:
						"External support can help student teams manage the costs and logistics of engineering competitions.",
					items: [
						"Travel and accommodation support.",
						"Materials and fabrication funding.",
						"Competition preparation and technical mentorship.",
					],
				},
			]}
			title="Help shape the next generation of aerospace engineering."
		/>
	);
}
