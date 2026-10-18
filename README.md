# ✈️ AeroBMSCE — Website Redesign

<p align="center">
  <strong>A fresh, responsive website for AeroBMSCE</strong>
  <br />
  Redesigned with a focus on usability, visual consistency, and accessibility.
</p>

<p align="center">
  <a href="https://devendrap-bms.github.io/AeroBMSCE_TASK_REPO/">
    <img src="https://img.shields.io/badge/Live%20Website-Visit%20Site-2e7d32?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Visit Live Website" />
  </a>
  <a href="https://github.com/Devendrap-bms/AeroBMSCE_TASK_REPO">
    <img src="https://img.shields.io/badge/GitHub-Source%20Code-24292e?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Repository" />
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind%20CSS-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Deployment-GitHub%20Pages-222222?style=flat-square&logo=githubpages&logoColor=white" alt="GitHub Pages" />
</p>

---

## 📌 About the Project

This project is a redesign of the AeroBMSCE website, developed as part of the Web Development Recruitment Task.

While going through the original website, I noticed areas where the navigation, layout, and presentation of information could be improved. I wanted to create a version that feels more organised, works smoothly across different screen sizes, and helps visitors find what they need without unnecessary effort.

The focus was not just on changing the appearance. It was also on making the website easier to navigate and more consistent from one page to another.

## 🔍 1. What I Found in the Original Website

The original website had useful information about AeroBMSCE, but some parts of the experience could be better. These were the main issues I noticed during my review:

- **Navigation problems:** Some links did not lead to working pages, and important information was not always easy to reach.
- **Mobile responsiveness:** Certain sections extended beyond the screen width, making the website harder to use on smaller devices.
- **Poor section positioning:** Some anchor links moved visitors to awkward positions or areas without the expected content.
- **Unclear visual hierarchy:** The homepage contained a lot of information, but the main message and calls to action did not stand out enough.
- **Readability issues:** Some text was small or difficult to distinguish from its background.
- **Crowded content:** Achievements and partnership details could be organised more clearly so visitors could scan them quickly.
- **Inconsistent information:** Some figures, dates, and descriptions appeared ambiguous and needed closer attention.
- **Accessibility improvements:** Keyboard focus, image descriptions, and visible interaction states needed consideration.

These observations helped me decide what to prioritise: clearer navigation, better spacing, readable content, and a layout that adapts to different devices.

## 🎨 2. Design Approach & UI/UX Decisions

My goal was to give AeroBMSCE a more polished and consistent identity without losing its technical and aviation-related character.

### 🎨 Colours and visual identity

I chose a dark charcoal base with burgundy accents, warm ivory backgrounds, and gold highlights. The combination creates a technical, aviation-inspired feel while helping important sections and actions stand out.

### 🧭 Navigation and page structure

Instead of making visitors search through one long page for everything, I organised the website around the main sections:

| Page | Purpose |
|---|---|
| Home | Introduces AeroBMSCE and highlights key information |
| Who We Are | Explains the club and its identity |
| What We Build | Presents the club's technical work and projects |
| Our Achievements | Highlights accomplishments and milestones |
| Partner With Us | Provides information for potential collaborators |
| Contact | Gives visitors a way to get in touch |

A shared header and footer keep navigation and page structure consistent throughout the website.

### 🧩 Layout and content

I used clearer headings, structured content sections, and cards to break up dense information. I also paid attention to spacing and typography so the pages feel easier to read rather than crowded.

Calls to action help visitors move towards relevant sections or contact information without having to figure out where to go next.

### 📱 Responsive design

The website was built to adapt to desktop, tablet, and mobile screens. I adjusted the layout and navigation for smaller screens and checked for horizontal overflow so visitors would not need to scroll sideways to access content.

### ♿ Accessibility and usability

I considered text contrast, readable font sizes, semantic page structure, image alternative text, and keyboard navigation. I also checked that navigation links and important buttons lead to the intended destinations.

### 🛠️ Technology stack

| Technology | How it is used |
|---|---|
| Next.js App Router | Page structure and routing |
| TypeScript | Type-safe development |
| Tailwind CSS | Layout, styling, and responsive design |
| Biome | Code formatting and lint checks |
| GitHub Actions | Automated build and deployment |
| GitHub Pages | Hosting the static website |

The website uses Next.js static export, so it does not need a running backend server.

The Contact form performs client-side validation and opens an email through a `mailto:` link. It does not store or submit contact details to a backend.

## 🧑‍💻 3. A Problem I Faced and How I Solved It

### The challenge: Deploying under a GitHub Pages repository path

One challenge was configuring the website to work correctly on GitHub Pages.

When developing locally, a website usually runs from the root of the local server. However, this project is hosted at:

`https://devendrap-bms.github.io/AeroBMSCE_TASK_REPO/`

That extra `/AeroBMSCE_TASK_REPO/` path matters. If routes and asset URLs are not configured correctly, pages or images may work locally but fail after deployment.

### How I approached the problem

While preparing the static deployment, I had to account for the repository path and the way Next.js generates exported files.

I addressed this by:

1. Setting `output: "export"` in the Next.js configuration.
2. Configuring the production `basePath` to match the GitHub repository path.
3. Enabling `trailingSlash: true` for the exported page structure.
4. Setting `images.unoptimized: true`, since GitHub Pages does not provide Next.js's image optimisation server.
5. Adding an asset-path helper for local assets that need the repository prefix.
6. Building the project and checking that the required pages were generated.
7. Configuring GitHub Actions to build the project and deploy the generated `out` directory.

The production build completed successfully and generated static pages for the homepage and the required detail pages.

This taught me an important lesson: a successful local run does not automatically mean a website is ready for deployment. The actual hosting environment and URL structure need to be considered and tested as well.

## 🚀 Run the Project Locally

Make sure you have Bun and a compatible Node.js installation.

**1. Clone the repository**

```bash
git clone https://github.com/Devendrap-bms/AeroBMSCE_TASK_REPO.git
```

**2. Open the project directory**

```bash
cd AeroBMSCE_TASK_REPO
```

**3. Install dependencies**

```bash
bun install
```

**4. Start the development server**

```bash
bun run dev
```

**5. Run the checks and production build**

```bash
bun run check
bun run typecheck
bun run build
```

## 🌐 Deployment

The website is hosted on GitHub Pages through GitHub Actions.

The deployment workflow installs the dependencies, checks the code, runs TypeScript validation, generates the static website, and deploys the exported files.

🔗 **Live Website:** https://devendrap-bms.github.io/AeroBMSCE_TASK_REPO/

---

<p align="center">
  <strong>Built with care for the AeroBMSCE Web Development Recruitment Task.</strong>
  <br />
  <sub>Frontend redesign · Responsive UI · Static deployment</sub>
</p>
