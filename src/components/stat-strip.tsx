import { CountUp } from "@/components/count-up";

type Stat = {
	animate?: boolean;
	label: string;
	suffix?: string;
	value: number;
};

export function StatStrip({ stats }: { stats: Stat[] }) {
	return (
		<section aria-label="Key figures" className="border-b bg-card">
			<dl className="container-page grid grid-cols-2 gap-x-6 gap-y-10 py-12 lg:grid-cols-4">
				{stats.map((stat) => (
					<div
						className="flex flex-col-reverse justify-end border-primary border-l-4 pl-5"
						key={stat.label}
					>
						<dt className="mt-2 text-muted-foreground text-sm leading-5">
							{stat.label}
						</dt>
						<dd className="font-display text-5xl leading-none sm:text-6xl">
							<CountUp
								animateValue={stat.animate}
								suffix={stat.suffix}
								value={stat.value}
							/>
						</dd>
					</div>
				))}
			</dl>
		</section>
	);
}
