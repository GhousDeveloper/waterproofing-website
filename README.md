<div align="center">



<img src="https://readme-typing-svg.demolab.com?font=Plus+Jakarta+Sans&weight=700&size=22&pause=1200&color=B52F24&center=true&vCenter=true&width=720&lines=Reliable+Roofing+%26+Waterproofing+Solutions;React+19+%C2%B7+TypeScript+%C2%B7+Vite+%C2%B7+Tailwind+CSS+v4;Responsive+multi-page+business+website" alt="RoofPro typing animation: Reliable Roofing and Waterproofing Solutions; React 19, TypeScript, Vite, Tailwind CSS v4; Responsive multi-page business website"/>

<br/>

<p>
  <a href="https://roofpro-waterproofing.netlify.app/"><img src="https://img.shields.io/badge/LIVE_DEMO-roofpro--waterproofing.netlify.app-B52F24?style=for-the-badge&labelColor=202020" alt="Live Demo"/></a>
  <a href="https://github.com/GhousDeveloper/waterproofing-website"><img src="https://img.shields.io/badge/SOURCE_CODE-GitHub-202020?style=for-the-badge&logo=github&logoColor=white" alt="Source Code"/></a>
  <a href="#website-showcase"><img src="https://img.shields.io/badge/VIEW_PROJECT-Screenshots-8F211A?style=for-the-badge&labelColor=202020" alt="View Project Screenshots"/></a>
</p>

<p>
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React 19"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite 8"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS v4"/>
  <img src="https://img.shields.io/badge/Lucide-React-F56565?style=flat-square" alt="Lucide React"/>
  <img src="https://img.shields.io/badge/Hosted_on-Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white" alt="Hosted on Netlify"/>
</p>

**A modern, responsive website for a roofing and waterproofing company serving Sindh, Pakistan.**

</div>

---

## Live Preview

<div align="center">

**[https://roofpro-waterproofing.netlify.app/](https://roofpro-waterproofing.netlify.app/)**

<sub>If the banner or typing animation above does not load, nothing else on this page depends on it.</sub>

</div>

---

## Overview

**RoofPro** is a multi-page business website for a roofing contractor positioned in Karachi, Sindh, presenting roof installation, leak repair, waterproofing, heat proofing, commercial roofing and inspection services across Sindh.

It is aimed at homeowners and commercial property owners who need to understand the services on offer, browse past work, read maintenance advice and request an estimate or contact the team quickly (by form, phone or WhatsApp).

The project is a **frontend-only** React application: all content lives in a typed data file, and there is no backend in this repository (see [Limitations](#current-limitations)).

---

## Website Showcase

<div align="center">

<a href="https://roofpro-waterproofing.netlify.app/">
  <img src="https://raw.githubusercontent.com/GhousDeveloper/waterproofing-website/6aa1a76ed15c87658f3340029be2ce1f74668109/public/assets/roof/Capture.PNG" width="100%" alt="RoofPro home page hero with top contact bar, navigation, headline 'Reliable Roofing & Waterproofing Solutions for Pakistani Homes & Businesses' and a photo of a roofing team"/>
</a>

<sub><b>Home page hero</b> — top contact bar, navigation, estimate call-to-action and floating WhatsApp / call buttons. Click to open the live site.</sub>

<br/><br/>

<table>
<tr>
<td width="50%" align="center" valign="top">
<img src="https://raw.githubusercontent.com/GhousDeveloper/waterproofing-website/6aa1a76ed15c87658f3340029be2ce1f74668109/public/assets/roof/Capture2.PNG" width="100%" alt="RoofPro services cards: Roof Installation & Replacement, Roof Leak Repair, Roof Waterproofing and Roof Heat Proofing"/>
<br/><sub><b>Services section</b> — four service cards with “Learn More” links</sub>
</td>
<td width="50%" align="center" valign="top">
<img src="https://raw.githubusercontent.com/GhousDeveloper/waterproofing-website/6aa1a76ed15c87658f3340029be2ce1f74668109/public/assets/roof/Capture23.PNG" width="100%" alt="RoofPro 'Protecting Properties Across Sindh with Proven Solutions' band with four highlights over a darkened house photo"/>
<br/><sub><b>Standards band</b> — “Protecting Properties Across Sindh” highlights</sub>
</td>
</tr>
</table>

<img src="https://raw.githubusercontent.com/GhousDeveloper/waterproofing-website/6aa1a76ed15c87658f3340029be2ce1f74668109/public/assets/roof/Capture4.PNG" width="100%" alt="RoofPro blog section with three article cards: Monsoon Preparation, Waterproofing Guide and Heat Proofing"/>

<sub><b>Blog / tips section</b> — article cards with category, date and reading time</sub>

</div>

---

## Key Features

Everything below was confirmed in the source code.

| Area | What is implemented |
|---|---|
| **Multi-page navigation** | Home, About, Services, Service detail, Projects, Reviews, Blog, Blog post and Contact pages, with a sticky navbar, a Services dropdown and a mobile menu |
| **Services** | Six services defined in `src/data/roofingData.ts`: installation, leak repair, waterproofing, heat proofing, commercial/industrial roofing and inspection, each with its own detail route (`/services/:slug`) |
| **Projects** | Six project entries with category filter tabs (all / residential / commercial / repair / waterproofing) and a lightbox-style detail modal |
| **Reviews** | Review list with a “write a review” modal; new reviews are added to local component state only and are marked as demo entries |
| **Blog** | Three articles with title/excerpt search, category filter, individual post pages and a newsletter signup box (client-side only) |
| **Estimate flow** | A global “Get a Free Estimate” modal and inline form with a client-side PKR price-range calculator based on service type and area in sq ft |
| **Contact** | Contact page with an FAQ accordion, a `mailto:` link, plus floating WhatsApp and `tel:` buttons available on every page |
| **UI details** | Scroll-to-top button, SVG wave dividers, custom scrollbar, a custom `RoofProLogo` component |

---

## Technology Stack

Verified against `package.json`, `vite.config.ts` and `src/`.

| Technology | Used for |
|---|---|
| **React 19** | Component-based UI |
| **TypeScript** | Typed components and data (`npm run lint` runs `tsc --noEmit`) |
| **Vite 8** | Dev server and production build |
| **Tailwind CSS v4** | Styling via the `@tailwindcss/vite` plugin |
| **Lucide React** | Icons |
| **Plus Jakarta Sans & DM Sans** | Headings and body text, loaded from Google Fonts in `index.html` |
| **History API** | Hand-written client-side routing in `src/App.tsx` (no router library) |

<details>
<summary><b>Dependencies listed but not used by the current source</b></summary>

<br/>

`package.json` also lists `motion`, `@google/genai`, `express` and `dotenv`, and the repository contains a `.env.example` with a `GEMINI_API_KEY` entry. A search of `src/` found no imports of these packages, so the current website does not use them. They appear to come from the project template.

No secrets are committed; `.gitignore` excludes `.env*` files except `.env.example`.

</details>

---

## Architecture

```text
waterproofing-website/
├── index.html                 # Entry HTML, SEO meta tags, Google Fonts
├── vite.config.ts             # React + Tailwind (Vite plugin)
├── package.json
├── public/assets/roof/        # README screenshots (Capture*.PNG)
└── src/
    ├── main.tsx               # React root
    ├── App.tsx                # Path-based routing, estimate modal, floating actions
    ├── index.css              # Tailwind import, brand CSS variables, fonts, scrollbar
    ├── data/
    │   └── roofingData.ts     # Company info, services, projects, reviews, blog posts, FAQs
    ├── pages/                 # Home, About, Services, ServiceDetail, Projects,
    │                          # Reviews, Blog, BlogPost, Contact
    ├── components/
    │   ├── layout/            # Navbar, Footer
    │   ├── home/              # Hero, trust badges, stats, services banner, about,
    │   │                      # why-choose-us, testimonials, blog tips, CTA, contact
    │   └── common/            # EstimateForm, EstimateModal, RoofProLogo, WaveDivider
    └── assets/images/         # Photography used across the site
```

- **Routing:** `App.tsx` reads `window.location.pathname`, updates it with `history.pushState`, and listens for `popstate`.
- **Content:** pages read from `src/data/roofingData.ts`, so services, projects, reviews and posts can be edited in one place.
- **Shared UI:** the estimate form/modal and page sections are reusable components.

---

## Getting Started

**Prerequisites:** [Node.js](https://nodejs.org/) and npm.

```bash
# 1. Clone
git clone https://github.com/GhousDeveloper/waterproofing-website.git

# 2. Enter the project
cd waterproofing-website

# 3. Install dependencies
npm install --legacy-peer-deps

# 4. Start the dev server (http://localhost:3000)
npm run dev
```

> **Why `--legacy-peer-deps`?** With the current `package.json`, a plain `npm install` stops with an `ERESOLVE` error: the project pins `esbuild ^0.25` while Vite 8 lists an optional peer of `esbuild ^0.27 || ^0.28`. The flag lets npm install anyway; with it, `npm run build` and `npm run lint` both completed successfully when checked.

Other scripts defined in `package.json`:

```bash
npm run build     # Production build (vite build) -> dist/
npm run preview   # Preview the production build
npm run lint      # Type-check with tsc --noEmit
```

---

## Design System

Verified in `src/index.css` and the components.

| Token | Value | Use |
|---|---|---|
| `--color-roofpro-red` | `#B52F24` | Primary actions and accents |
| `--color-roofpro-deepred` | `#8F211A` | Hover states, gradients |
| `--color-roofpro-darkred` | `#681A16` | Dark gradient stops |
| `--color-roofpro-charcoal` | `#202020` | Text and dark surfaces |
| `--color-roofpro-warm` | `#FAF7F5` | Warm section backgrounds |
| `--color-roofpro-border` | `#E8E2DF` | Card borders |

**Typography:** Plus Jakarta Sans for headings, DM Sans for body text.

---

## Responsive Design

Layouts use Tailwind's responsive breakpoints (`sm:`, `md:`, `lg:`) throughout. For example, the desktop navigation collapses into a mobile menu below the `lg` breakpoint, and the floating phone button hides its number on small screens. Cross-browser and accessibility testing have **not** been performed or documented for this project.

---

## Current Limitations

These are honest notes about what the current version does and does not do:

- **No backend.** The estimate form simulates submission with a short timer and shows a confirmation; inquiries are not sent or stored anywhere.
- **Review and newsletter forms** only update local state and reset on reload.
- **Estimate ranges** are a frontend calculation for guidance only.
- **Sample content.** Projects, reviews, blog posts and contact details are defined in `roofingData.ts` and should be replaced with real business data before real-world use.
- No automated tests and no CI workflow are present in the repository.
- The repository has no Netlify redirect configuration (`_redirects` / `netlify.toml`), so refreshing a deep link such as `/services/repair` on a static host may need an SPA fallback rule.

---

## Future Improvements

*Proposed ideas, not implemented features.*

- Connect the estimate and contact forms to a real backend or form service.
- Persist reviews and newsletter signups.
- Add an SPA redirect rule for deep links on Netlify.
- Add automated tests and a CI workflow.
- Remove unused template dependencies.

---

## Developer

<div align="center">

### Ghulam Ghous Kalwar

**Frontend Developer | Full-Stack Developer | AI Engineer**

<a href="https://github.com/GhousDeveloper"><img src="https://img.shields.io/badge/GitHub-GhousDeveloper-181717?style=for-the-badge&logo=github" alt="GitHub profile of GhousDeveloper"/></a>

</div>

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&height=140&color=0:8F211A,50:B52F24,100:202020&section=footer" width="100%" alt="Decorative RoofPro footer wave"/>

**RoofPro** · [Live Website](https://roofpro-waterproofing.netlify.app/) · [GitHub Repository](https://github.com/GhousDeveloper/waterproofing-website)

<sub>Designed and developed by Ghulam Ghous Kalwar</sub>

</div>
