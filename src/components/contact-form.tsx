"use client";

import { type FormEvent, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
	Field,
	FieldDescription,
	FieldGroup,
	FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
	NativeSelect,
	NativeSelectOption,
} from "@/components/ui/native-select";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/site-config";

// Control sizing for the AeroBMSCE design. Border colour (3.7:1) and focus ring come from the tokens.
const control = "h-12 rounded-none bg-card px-4 text-base";

export function ContactForm() {
	const [submitted, setSubmitted] = useState(false);

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const form = event.currentTarget;
		if (!form.reportValidity()) return;

		const data = new FormData(form);
		const field = (name: string) => String(data.get(name) ?? "");

		const subject = field("subject") || `${field("enquiry")} enquiry`;
		const body = [
			`Name: ${field("name")}`,
			`Email: ${field("email")}`,
			`Organisation: ${field("organisation") || "Not provided"}`,
			`Enquiry type: ${field("enquiry")}`,
			"",
			field("message"),
		].join("\n");

		window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
			subject,
		)}&body=${encodeURIComponent(body)}`;
		setSubmitted(true);
	}

	return (
		<form onSubmit={handleSubmit}>
			<FieldGroup>
				<div className="grid gap-6 sm:grid-cols-2">
					<Field>
						<FieldLabel htmlFor="name">Full name *</FieldLabel>
						<Input
							autoComplete="name"
							className={control}
							id="name"
							name="name"
							placeholder="Your name"
							required
						/>
					</Field>
					<Field>
						<FieldLabel htmlFor="email">Email address *</FieldLabel>
						<Input
							autoComplete="email"
							className={control}
							id="email"
							name="email"
							placeholder="you@example.com"
							required
							type="email"
						/>
					</Field>
				</div>

				<Field>
					<FieldLabel htmlFor="organisation">
						Organisation or college
					</FieldLabel>
					<Input
						autoComplete="organization"
						className={control}
						id="organisation"
						name="organisation"
						placeholder="Company, institution, or organisation"
					/>
				</Field>

				<Field>
					<FieldLabel htmlFor="enquiry">Type of enquiry *</FieldLabel>
					<NativeSelect
						className={control}
						defaultValue=""
						id="enquiry"
						name="enquiry"
						required
					>
						<NativeSelectOption disabled value="">
							Select an enquiry type
						</NativeSelectOption>
						<NativeSelectOption value="Sponsorship & Partnerships">
							Sponsorship & Partnerships
						</NativeSelectOption>
						<NativeSelectOption value="Technical Collaboration">
							Technical Collaboration
						</NativeSelectOption>
						<NativeSelectOption value="Research & Development">
							Research & Development
						</NativeSelectOption>
						<NativeSelectOption value="Joining the team">
							Joining the team
						</NativeSelectOption>
						<NativeSelectOption value="Other">Other</NativeSelectOption>
					</NativeSelect>
				</Field>

				<Field>
					<FieldLabel htmlFor="subject">Subject</FieldLabel>
					<Input
						className={control}
						id="subject"
						name="subject"
						placeholder="What would you like to discuss?"
					/>
					<FieldDescription>
						Optional. We use the enquiry type if you leave it blank.
					</FieldDescription>
				</Field>

				<Field>
					<FieldLabel htmlFor="message">Message *</FieldLabel>
					<Textarea
						className="min-h-36 rounded-none bg-card px-4 py-3 text-base"
						id="message"
						name="message"
						placeholder="Tell us a little about your idea or proposal..."
						required
					/>
				</Field>

				<Button
					className="h-12 w-full rounded-none px-6 font-semibold text-sm sm:w-auto"
					type="submit"
				>
					Prepare email enquiry
				</Button>

				{submitted ? (
					<Alert>
						<AlertTitle>Check your email app</AlertTitle>
						<AlertDescription>
							It should open with your details filled in. Send that email to
							complete your enquiry.
						</AlertDescription>
					</Alert>
				) : (
					<FieldDescription>
						This form opens your device’s email app. Nothing is submitted to or
						stored by this website.
					</FieldDescription>
				)}
			</FieldGroup>
		</form>
	);
}
