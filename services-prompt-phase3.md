# Build: 4 Airway Clinic Service Pages — Phase 3 (TMJ + General Dental)

Build ALL 4 service sub-pages listed below. Each page is a complete, standalone HTML file with inline CSS and JS, matching the EXACT same design system and template as the existing service pages in this repo.

IMPORTANT: Look at the existing service pages for reference (e.g. services/growth-guidance/index.html). Match their CSS, nav, footer, and structure EXACTLY.

## Brand Design System
- Primary: #3bb6b3 (teal)
- Dark teal: #1a6b69
- Gold accent: #e8c170
- Light bg: #f7f5f0 (warm cream)
- Dark text: #2c3e50
- White: #ffffff
- Muted: #66777e
- Fonts: Playfair Display (headings) + Inter (body) via Google Fonts
- Nav: white solid background, 90px height, logo on left, flag toggles (🇸🇪🇬🇧) between logo and hamburger
- Responsive: mobile hamburger menu
- Animations: fade-in on scroll (IntersectionObserver)
- Footer matching main site

## Nav Bar (copy from existing service pages)
- Solid white background from start
- Logo: `../../assets/logo-original.png` (EN) or `../../../assets/logo-original.png` (SV)
- Flag toggles between logo and hamburger:
  - EN pages: `🇸🇪` links to `./sv/` | `🇬🇧` active links to `./`
  - SV pages: `🇸🇪` active links to `./` | `🇬🇧` links to `../`
- Nav links: About, Services, Team, Contact
- Mobile hamburger menu with same links

## Page Template (each page must have ALL of these sections):
1. **Hero** — Service name, one-line tagline, teal gradient background (NO photo)
2. **What Is It** — Plain language explanation, 2-3 paragraphs
3. **Who Is It For** — Target audience
4. **How It Works** — Step-by-step, numbered cards
5. **Benefits** — 4-6 benefit cards with icons
6. **FAQ** — 5-6 questions with expandable accordion
7. **CTA** — "Ready to get started?" linking to main page contact
8. **Footer** — Same as existing service pages

## CTA links back to contact form:
- EN: `../../#contact`
- SV: `../../../#contact`

## SEO Requirements:
- `<title>` with service name + "Airway Clinic Stockholm"
- `<meta name="description">` unique description
- `<link rel="canonical">`
- `<link rel="alternate" hreflang="en">` and `<link rel="alternate" hreflang="sv">`
- `<link rel="alternate" hreflang="x-default">`
- JSON-LD structured data (MedicalProcedure)
- Open Graph meta tags

## File Paths (create EXACTLY these files):

### 1. TMJ / TMS Treatment / Käkledsbehandling
- EN: `services/tmj-treatment/index.html`
- SV: `services/tmj-treatment/sv/index.html`

English title: TMJ Treatment
Swedish title: Käkledsbehandling
Description: Diagnosis and treatment of temporomandibular joint disorders. Addresses jaw pain, clicking, locked jaw, muscle tension, headaches, and bite misalignment. Non-surgical approaches including splint therapy, exercises, and stress management.

### 2. General Dentistry / Allmän tandvård
- EN: `services/general-dentistry/index.html`
- SV: `services/general-dentistry/sv/index.html`

English title: General Dentistry
Swedish title: Allmän tandvård
Description: Comprehensive preventive and restorative dental care with an airway-aware approach. Cleanings, fillings, crowns, exams — all with attention to how dental health connects to breathing, sleep, and overall wellness. Not your average checkup.

## Content Language:
- EN pages: all content in English
- SV pages: all content in Swedish (proper Swedish)

## Clinic Details (for footer/structured data):
- Name: Airway Clinic Stockholm
- Address: Sveavägen 91, 113 50 Stockholm
- Phone: +46 8 123 456 78
- Email: info@airwayclinic.se
- Dr. Siavosh Hakimmaani, D.D.S., 30+ years experience
- Jessica Gorlee, Leg. Logoped & OMFT-terapeut, since 2004

## Asset paths:
- EN pages use `../../assets/`, SV pages use `../../../assets/`

## Build ALL 4 files before stopping.
