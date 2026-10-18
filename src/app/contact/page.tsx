"use client";

import Link from "next/link";
import { type FormEvent, useState } from "react";

const inputClass =
	"w-full border border-[#dedbd5] bg-white px-4 py-3 text-sm text-[#191a1f] outline-none transition focus:border-[#a5223b]";

export default function ContactPage() {
	const [submitted, setSubmitted] = useState(false);

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const form = event.currentTarget;
		if (!form.reportValidity()) return;

		const data = new FormData(form);

		const name = String(data.get("name") ?? "");
		const email = String(data.get("email") ?? "");
		const organisation = String(data.get("organisation") ?? "");
		const enquiry = String(data.get("enquiry") ?? "");
		const subject = String(data.get("subject") ?? "");
		const message = String(data.get("message") ?? "");

		const body = [
			`Name: ${name}`,
			`Email: ${email}`,
			`Organisation: ${organisation || "Not provided"}`,
			`Enquiry type: ${enquiry}`,
			"",
			message,
		].join("\n");

		const mailto = `mailto:aerobmsce@bmsce.ac.in?subject=${encodeURIComponent(
			subject,
		)}&body=${encodeURIComponent(body)}`;

		window.location.href = mailto;
		setSubmitted(true);
	}

	return (
		<main className="min-h-screen bg-[#faf9f6] text-[#191a1f]">
			<section className="border-[#e5e1da] border-b bg-[#191a1f] px-6 py-20 text-white sm:px-10 lg:px-20 lg:py-28">
				<div className="mx-auto max-w-6xl">
					<p className="mb-5 font-bold text-[#e0c37f] text-xs uppercase tracking-[0.28em]">
						Contact & Collaboration
					</p>

					<h1 className="max-w-3xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
						Let&apos;s build something that flies.
					</h1>

					<p className="mt-6 max-w-2xl text-base text-white/70 leading-8 sm:text-lg">
						Have an idea, a research opportunity, or a proposal for
						collaboration? Tell us about it. We would be glad to hear from you.
					</p>
				</div>
			</section>

			<section className="px-6 py-16 sm:px-10 lg:px-20 lg:py-24">
				<div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
					<aside>
						<p className="mb-4 font-bold text-[#a5223b] text-xs uppercase tracking-[0.25em]">
							Start a conversation
						</p>

						<h2 className="font-serif text-3xl leading-snug sm:text-4xl">
							Interested in collaborating?
						</h2>

						<p className="mt-5 text-[#696762] leading-8">
							Reach out to discuss your organisation&apos;s goals and how they
							might align with AeroBMSCE&apos;s engineering activities.
						</p>

						<div className="mt-10 border-[#dedbd5] border-t pt-6">
							<p className="font-bold text-[#77736d] text-xs uppercase tracking-widest">
								Email
							</p>
							<a
								className="mt-2 inline-block break-all font-medium text-[#a5223b] hover:underline"
								href="mailto:aerobmsce@bmsce.ac.in"
							>
								aerobmsce@bmsce.ac.in
							</a>
						</div>

						<div className="mt-7 border-[#dedbd5] border-t pt-6">
							<p className="font-bold text-[#77736d] text-xs uppercase tracking-widest">
								Interested in
							</p>
							<ul className="mt-3 space-y-2 text-[#696762] text-sm leading-6">
								<li>Industry and sponsorship partnerships</li>
								<li>Technical and research collaboration</li>
								<li>Student and academic enquiries</li>
							</ul>
						</div>
					</aside>

					<div className="border border-[#e5e1da] bg-white p-6 sm:p-9 lg:p-10">
						<form className="space-y-6" onSubmit={handleSubmit}>
							<div className="grid gap-6 sm:grid-cols-2">
								<div>
									<label
										className="mb-2 block font-semibold text-sm"
										htmlFor="name"
									>
										Full name *
									</label>
									<input
										autoComplete="name"
										className={inputClass}
										id="name"
										name="name"
										placeholder="Your name"
										required
									/>
								</div>

								<div>
									<label
										className="mb-2 block font-semibold text-sm"
										htmlFor="email"
									>
										Email address *
									</label>
									<input
										autoComplete="email"
										className={inputClass}
										id="email"
										name="email"
										placeholder="you@example.com"
										required
										type="email"
									/>
								</div>
							</div>

							<div>
								<label
									className="mb-2 block font-semibold text-sm"
									htmlFor="organisation"
								>
									Organisation / College
								</label>
								<input
									autoComplete="organization"
									className={inputClass}
									id="organisation"
									name="organisation"
									placeholder="Company, institution, or organisation"
								/>
							</div>

							<div>
								<label
									className="mb-2 block font-semibold text-sm"
									htmlFor="enquiry"
								>
									Type of enquiry *
								</label>
								<select
									className={inputClass}
									defaultValue=""
									id="enquiry"
									name="enquiry"
									required
								>
									<option disabled value="">
										Select an enquiry type
									</option>
									<option>Sponsorship & Partnerships</option>
									<option>Technical Collaboration</option>
									<option>Research & Development</option>
									<option>Student Enquiry</option>
									<option>Other</option>
								</select>
							</div>

							<div>
								<label
									className="mb-2 block font-semibold text-sm"
									htmlFor="subject"
								>
									Subject *
								</label>
								<input
									className={inputClass}
									id="subject"
									name="subject"
									placeholder="What would you like to discuss?"
									required
								/>
							</div>

							<div>
								<label
									className="mb-2 block font-semibold text-sm"
									htmlFor="message"
								>
									Message *
								</label>
								<textarea
									className={`${inputClass} resize-y`}
									id="message"
									name="message"
									placeholder="Tell us a little about your idea or proposal..."
									required
									rows={5}
								/>
							</div>

							<button
								className="inline-flex min-h-12 w-full items-center justify-center bg-[#a5223b] px-6 py-3 font-semibold text-sm text-white transition hover:bg-[#861b30] focus-visible:outline-2 focus-visible:outline-[#a5223b] focus-visible:outline-offset-4 sm:w-auto"
								type="submit"
							>
								Prepare email enquiry →
							</button>

							{submitted && (
								<p className="text-[#696762] text-sm leading-6" role="status">
									Your email application should open with the enquiry details.
									Please send the email to complete your enquiry.
								</p>
							)}

							<p className="text-[#77736d] text-xs leading-5">
								This form uses your device&apos;s email application. Your
								message is not submitted to or stored by this website.
							</p>
						</form>
					</div>
				</div>
			</section>

			<section className="border-[#e5e1da] border-t px-6 py-8 sm:px-10 lg:px-20">
				<div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
					<p className="text-[#696762] text-sm">
						Want to explore the club first?
					</p>
					<Link
						className="font-semibold text-[#a5223b] text-sm hover:underline"
						href="/"
					>
						Return to homepage →
					</Link>
				</div>
			</section>
		</main>
	);
}
