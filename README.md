<div align="center">

# ✈️ AeroBMSCE: Website Redesign

**A fast, responsive and accessible website for the AeroBMSCE aerospace and UAV club**

*Above gravity. Beyond limits.*

<a href="https://devendrap-bms.github.io/AeroBMSCE_TASK_REPO/"><img src="https://img.shields.io/badge/Live%20Website-Visit%20Site-A5223B?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Visit Live Website" /></a>
<a href="https://github.com/Devendrap-bms/AeroBMSCE_TASK_REPO"><img src="https://img.shields.io/badge/GitHub-Source%20Code-15171C?style=for-the-badge&logo=github&logoColor=E0C37F" alt="GitHub Repository" /></a>

<img src="https://img.shields.io/badge/Next.js-15-15171C?style=flat-square&logo=next.js" alt="Next.js" />
<img src="https://img.shields.io/badge/React-19-15171C?style=flat-square&logo=react&logoColor=61DAFB" alt="React" />
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/Tailwind%20CSS-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
<img src="https://img.shields.io/badge/shadcn%2Fui-Base%20UI-15171C?style=flat-square&logo=shadcnui&logoColor=white" alt="shadcn/ui" />
<img src="https://img.shields.io/badge/Motion-animations-E0C37F?style=flat-square&logoColor=15171C" alt="Motion" />
<img src="https://img.shields.io/badge/Bun-runtime-F9F1E1?style=flat-square&logo=bun&logoColor=15171C" alt="Bun" />
<img src="https://img.shields.io/badge/Biome-lint%20%26%20format-60A5FA?style=flat-square&logo=biome&logoColor=white" alt="Biome" />
<img src="https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-222222?style=flat-square&logo=githubpages&logoColor=white" alt="GitHub Pages" />

</div>

---

## 📑 Contents

[About](#-about-the-project) · [1. Flaws and fixes](#-1-flaws-of-the-original-website-and-how-each-was-fixed) · [2. Design approach](#-2-design-approach--uiux-decisions) · [Tech stack](#%EF%B8%8F-tech-stack) · [Structure](#-project-structure) · [3. A problem I solved](#-3-a-problem-i-faced-and-how-i-solved-it) · [Run locally](#-run-the-project-locally) · [Deployment](#-deployment) · [To verify with the club](#-details-to-confirm-with-the-club)

---

## 📌 About the Project

This is a full redesign of the AeroBMSCE website, built for the Web Development Recruitment Task. The original site had good content but behaved like a set of loosely connected pages. A visitor who got interested in the club could hit a dead end at the exact moment they tried to act.

The redesign keeps **all of the club's real content** (history, competitions, prizes, research, partner tiers, logos) and presents it in one consistent system: shared navigation, one visual language, readable type, and clear next steps for both students and partners.

---

## 🔍 1. Flaws of the Original Website, and How Each Was Fixed

I reviewed the original site page by page. These were the problems, ordered by how much they hurt a visitor, with what I did about each.

| Priority | Flaw in the original site | What it caused | Fix in the redesign |
|:---:|---|---|---|
| 🔴 **P0** | **Contact link led to a 404 page** | Visitors who tried to reach the club hit a dead end, which blocked the main goal of the site | A working **Contact page** with the email, partnership head, location and a form. A **branded 404 page** now catches any other bad route. |
| 🟠 **P1** | **Horizontal overflow** on Home and Partners; the *Who we are* anchor pushed the page far to the right | Content was clipped and visitors had to scroll sideways | One centred **max-width container** and fluid grids. No fixed widths and no global `overflow-x: hidden` hack. |
| 🟠 **P1** | **Low-contrast body text** (grey on near-black) | Competition and partner details were hard to read | A contrast-checked colour system. Body text is near-white on dark and ink on cream, with accent colours kept for emphasis. |
| 🟠 **P1** | **Navigation changed on every page**, and *What we build* and *Achievements* had no destination | Visitors could not form a mental map of the site | **One shared header and footer** on every route, with a destination for each of the six sections and a highlighted current page. |
| 🟡 **P2** | **Weak hero**: a dense panel covered the photo and offered no next step | The first impression was unclear | A clear headline, one supporting paragraph, two actions (*Explore our aircraft*, *Partner with us*) and key figures right under the hero. |
| 🟡 **P2** | **Long, plain-text lists** for achievements and partners | Visitors had to read everything to find anything | Results grouped **by season** with big placement numbers, prize badges and a year-jump bar. Partner tiers are **side-by-side cards** for easy comparison. |
| 🟡 **P2** | **Inconsistent facts** (*established 2012* next to *16+ years*, awkward "75 + projects", unclear planned vs completed events) | Claims looked unreliable | Facts are stored once as typed data, formatted consistently, and upcoming events are labelled **Planned**. Open questions are listed [below](#-details-to-confirm-with-the-club). |
| 🟢 **P3** | **Images and icons with no useful alt text, no keyboard focus, no hover or active states** | Poor experience for assistive technology and keyboard users | Alt text, labelled form fields, a skip link, a visible focus ring on every interactive element, and consistent hover and active states. |
| 🟢 **P3** | **Broken or missing routes and half-built sections** | The site felt unfinished | Six complete routes, a working favicon under the repo path, and every button and link resolves. |

---

## 🎨 2. Design Approach & UI/UX Decisions

The goal was a more polished identity that still feels technical and aviation-led. I kept the club's **burgundy and gold** and built a full system around them.

### 🎨 Colour palette

<p>
  <img src="https://img.shields.io/badge/Ink-%2315171C-15171C?style=for-the-badge&labelColor=15171C" alt="Ink #15171C" />
  <img src="https://img.shields.io/badge/Burgundy-%23A5223B-A5223B?style=for-the-badge&labelColor=A5223B" alt="Burgundy #A5223B" />
  <img src="https://img.shields.io/badge/Gold-%23E0C37F-E0C37F?style=for-the-badge&labelColor=E0C37F&logoColor=15171C" alt="Gold #E0C37F" />
  <img src="https://img.shields.io/badge/Paper-%23FAF9F6-FAF9F6?style=for-the-badge&labelColor=FAF9F6&color=FAF9F6" alt="Paper #FAF9F6" />
</p>

| Colour | Hex | Role |
|---|---|---|
| **Ink** | `#15171C` | Hero, achievements and footer sections |
| **Burgundy** | `#A5223B` | Primary actions, links, current page, closing call-to-action |
| **Gold** | `#E0C37F` | Accent on dark sections, prize badges, hero highlights |
| **Paper** | `#FAF9F6` | Main page background |
| **Stone** | `#F0EEE9` | Alternating sections |
| **Muted text** | `#5C5961` | Secondary text (about 6.4:1 on Paper) |

**Contrast checks (WCAG AA):** white on burgundy is about **7.3:1**, burgundy on paper about **6.8:1**, and gold on ink about **10:1**. Form field borders are about **3.7:1**.

### 🔤 Typography

- **Newsreader** (serif) for headings gives an editorial, confident feel and a clear hierarchy.
- **Geist** (sans) for body text, forms and navigation keeps small text crisp.
- One **type scale** (`type-display`, `type-h1`, `type-h2`, `type-h3`, `type-lead`, `type-eyebrow`) is used everywhere, with a minimum of 13px and paragraphs capped near 65 characters for comfortable reading.

### 🧭 Navigation and page structure

| Page | Purpose |
|---|---|
| **Home** | Positioning, key figures, what we build, recent results, ecosystem |
| **Who We Are** | The club, its vision and why it matters |
| **What We Build** | Four teams, research and development, project status, gallery |
| **Achievements** | Every result by season, with dates, locations and prizes |
| **Partner With Us** | Upcoming competitions, collaboration tiers, outcomes, logos, contact |
| **Contact** | Email, partnership head, location and an enquiry form |

A shared header and footer, a breadcrumb on every inner page, and a closing call-to-action on every page mean a visitor always has a next step.

### 🧩 One design system, built on shadcn/ui

- shadcn tokens (`primary`, `muted`, `border` and so on) are **mapped to the AeroBMSCE palette**, so every shadcn component already matches the brand.
- Dark sections (`on-dark`) and the burgundy band (`on-brand`) **re-map the tokens**, so the same `Button`, `Badge` or `Breadcrumb` looks right on light, dark and burgundy backgrounds with no per-section overrides.
- One container width, one section spacing and one set of components keep typography, spacing, buttons and navigation consistent across every page.

| shadcn/ui component | Where it is used |
|---|---|
| `Button` (`buttonVariants`) | Every button and call-to-action |
| `NavigationMenu` | Desktop navigation |
| `Sheet` | Mobile menu (focus trap, Escape and scroll lock built in) |
| `Breadcrumb` | Current-page trail on inner pages |
| `Card` | Build cards, partner tiers, contact form |
| `Badge` | Prizes and status labels |
| `Field`, `Input`, `Textarea`, `NativeSelect`, `Alert` | Contact form |
| `AspectRatio`, `Separator` | Images and dividers |

### 🎬 Motion

Motion is purposeful and consistent, using one shared easing curve:

- One **page-load sequence** in the hero (eyebrow, headline, copy, actions, tagline).
- One **scroll reveal per block**, not per element.
- A soft **page fade** on every route change.
- A **sliding underline** that follows the current page in the navigation.
- **Count-up figures** when statistics scroll into view.
- Hover and focus feedback only on things that are actually clickable.

Everything respects `prefers-reduced-motion`, and no information depends on animation.

### ♿ Accessibility and usability

- Skip link, semantic landmarks and a clear heading order.
- A visible **focus ring** on every link, button and field, which switches to gold on dark sections.
- `aria-current` on the active page, labelled form fields, and alt text on meaningful images.
- Form controls use 16px text so mobile browsers do not zoom in.
- Layouts use fluid grids and a max-width container, built to work from mobile to desktop.

### 📬 Content kept as data

Achievements, partner tiers, research and team details live in typed files under `src/content/`. Corrections to copy do not require touching layout code.

---

## 🛠️ Tech Stack

| Layer | Technology | Why |
|---|---|---|
| **Starter** | Create T3 App | Project scaffold (backend pieces removed, since this is frontend only) |
| **Framework** | Next.js 15, App Router, static export | File-based routes, exports to plain HTML for GitHub Pages |
| **UI library** | React 19 | Components |
| **Language** | TypeScript (strict) | Type-safe code and data |
| **Styling** | Tailwind CSS v4 | Design tokens, responsive layout, custom type scale |
| **Components** | shadcn/ui (Base UI) | Accessible, themeable primitives |
| **Icons** | Lucide | Consistent line icons |
| **Variants** | class-variance-authority, clsx, tailwind-merge | Typed component variants |
| **Animation** | Motion | Entrances, scroll reveals, shared-layout navigation underline |
| **Runtime and packages** | Bun | Fast installs and scripts |
| **Code quality** | Biome | Formatting, linting and import and class sorting |
| **CI/CD and hosting** | GitHub Actions, GitHub Pages | Automatic build and deploy |

No backend is used. The contact form validates in the browser and opens the visitor's email app through `mailto:`, so nothing is sent to or stored by the site.

---

## 🗂️ Project Structure

```text
src/
├── app/
│   ├── layout.tsx            # fonts, shared header and footer, skip link
│   ├── template.tsx          # page fade on route change
│   ├── not-found.tsx         # branded 404
│   ├── page.tsx              # Home
│   ├── who-we-are/
│   ├── what-we-build/
│   ├── achievements/
│   ├── partners/
│   └── contact/
├── components/
│   ├── ui/                   # shadcn/ui components
│   ├── link-button.tsx       # shadcn buttonVariants for links
│   ├── site-header.tsx · site-footer.tsx
│   ├── home-hero.tsx · page-hero.tsx
│   ├── achievement-logbook.tsx · partner-tier-card.tsx
│   └── reveal.tsx · count-up.tsx · ...
├── content/                  # typed data: about, achievements, partners
├── lib/                      # asset-path, site-config, motion
└── styles/globals.css        # tokens, type scale, colour scopes
```

---

## 🧑‍💻 3. A Problem I Faced and How I Solved It

### The challenge: deploying under a GitHub Pages repository path

Everything worked locally, but the site is hosted at:

`https://devendrap-bms.github.io/AeroBMSCE_TASK_REPO/`

The extra `/AeroBMSCE_TASK_REPO/` segment matters. Locally the site runs from the root, so paths like `/images/logo.png` work. On GitHub Pages the same path points at the wrong place and returns a 404. Next.js's `basePath` prefixes routes and links, but **not** plain image paths when the image optimiser is off, which is the case for a static export. The favicon broke in the same way.

### How I solved it

1. Set `output: "export"` so the build produces plain static files.
2. Defined the repository path **once** in `next.config.js` as the production `basePath`, and exposed it as `NEXT_PUBLIC_BASE_PATH`.
3. Wrote a small `assetPath()` helper that adds that prefix to every image path, and used it for the favicon in the page metadata too.
4. Set `trailingSlash: true`, so every route exports as `route/index.html` and refreshing any page works on GitHub Pages.
5. Set `images.unoptimized: true`, because GitHub Pages cannot run Next.js's image server.
6. Added a branded `not-found.tsx`, which exports as `404.html` and is served for any unknown URL.
7. Built the project, checked that every route was generated, and deployed through GitHub Actions.

**Lesson:** a site that works locally is not necessarily ready for its hosting environment. The real URL structure has to be part of the testing.

---

## 🚀 Run the Project Locally

Make sure you have [Bun](https://bun.sh) installed.

```bash
# 1. Clone
git clone https://github.com/Devendrap-bms/AeroBMSCE_TASK_REPO.git

# 2. Open the project
cd AeroBMSCE_TASK_REPO

# 3. Install dependencies
bun install

# 4. Start the dev server
bun run dev

# 5. Check and build
bun run check
bun run typecheck
bun run build
```

---

## 🌐 Deployment

The site is exported as static files and deployed to **GitHub Pages** with **GitHub Actions**. Every push to `main` builds the project and publishes the generated `out` folder.

🔗 **Live website:** https://devendrap-bms.github.io/AeroBMSCE_TASK_REPO/

---

## ✅ Details to Confirm with the Club

I kept the original facts, and these items need a check with the club before they are treated as final:

- The original says the club was **established in 2012** and also **"16+ years"**. The site shows 2012.
- Upcoming competitions have **no dates** on the original site, so they are labelled *Planned*. Some 2026 events may already be past.
- The **alt text** on photographs is general. It can be made more specific once each image is reviewed.

---

<div align="center">

**Built for the AeroBMSCE Web Development Recruitment Task.**

<sub>Responsive UI · Accessible by design · Static deployment</sub>

<br />

<img src="https://img.shields.io/badge/-%20-15171C?style=flat-square" alt="" /><img src="https://img.shields.io/badge/-%20-A5223B?style=flat-square" alt="" /><img src="https://img.shields.io/badge/-%20-E0C37F?style=flat-square" alt="" />

</div>