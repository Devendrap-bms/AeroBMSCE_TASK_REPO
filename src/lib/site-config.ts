export const siteConfig = {
	email: "aerobmsce@bmsce.ac.in",
	location: "Propel Lab–3, BMS College of Engineering",
	name: "AeroBMSCE",
	partnershipHead: { name: "Rajesh", role: "Partnership Head" },
};

export const navigation = [
	{ href: "/", label: "Home" },
	{ href: "/who-we-are/", label: "Who we are" },
	{ href: "/what-we-build/", label: "What we build" },
	{ href: "/achievements/", label: "Achievements" },
	{ href: "/partners/", label: "Partners" },
];

export const contactLink = { href: "/contact/", label: "Contact" };

const clean = (path: string) => path.replace(/\/+$/, "") || "/";

/** usePathname() already excludes the basePath, so a plain comparison is enough. */
export function isActivePath(pathname: string, href: string) {
	return clean(pathname) === clean(href);
}

export function mailto(subject: string) {
	return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}`;
}
