import { DetailPage } from "@/components/detail-page";

export default function WhatWeBuildPage() {
	return (
		<DetailPage
			description="Our work brings together aircraft design, unmanned aerial systems, simulation, fabrication and experimentation to solve practical aerospace engineering challenges."
			eyebrow="Engineering and Research"
			sections={[
				{
					title: "Aircraft Design",
					description:
						"Aircraft development combines aerodynamic analysis, structural design and iterative testing.",
					items: [
						"Fixed-wing aircraft concepts.",
						"Aerodynamic and structural considerations.",
						"Design optimisation for competition requirements.",
					],
				},
				{
					title: "Unmanned Aerial Systems",
					description:
						"UAV development brings together airframe engineering, electronics, control systems and mission requirements.",
					items: [
						"Fixed-wing and multirotor platforms.",
						"Modular payload concepts.",
						"Flight-control and system integration.",
					],
				},
				{
					title: "Drone Racing and Autonomy",
					description:
						"Drone racing and autonomous systems explore responsive control, navigation and reliable operation.",
					items: [
						"Drone development and integration.",
						"Flight-control experimentation.",
						"Autonomy and navigation research.",
					],
				},
				{
					title: "Research and Simulation",
					description:
						"Simulation helps engineers evaluate design choices before committing to physical fabrication and testing.",
					items: [
						"Computational analysis and simulation.",
						"Design iteration and performance evaluation.",
						"Technical documentation and research.",
					],
				},
				{
					title: "Flight Systems Development",
					description:
						"The club's stated R&D interests include flight electronics, navigation and improvements to aircraft stability.",
					items: [
						"Indigenous flight-controller development.",
						"Electronic speed controller development.",
						"GPS-denied navigation systems.",
					],
				},
				{
					title: "Experimental Aircraft Concepts",
					description:
						"Advanced concepts explore new ways to configure, control and improve unmanned aircraft.",
					items: [
						"Reconfigurable multi-mission fixed-wing UAVs.",
						"Morphing wingtip mechanisms.",
						"Deployable micro-fins for directional stability.",
					],
				},
			]}
			title="From concepts to flight-ready systems."
		/>
	);
}
