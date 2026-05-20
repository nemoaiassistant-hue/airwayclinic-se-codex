# Build: 10 Airway Clinic Service Pages (EN + SV)

Build ALL 10 service sub-pages listed below. Each page is a complete, standalone HTML file with inline CSS and JS, matching the main site's design system.

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

## Nav Bar
- Solid white background from start (no transparent state)
- Logo: `../../assets/logo-original.png` (EN) or `../../../assets/logo-original.png` (SV)
- Flag toggles between logo and hamburger:
  - EN pages: `🇸🇪` links to `./sv/` | `🇬🇧` active links to `./`
  - SV pages: `🇸🇪` active links to `./` | `🇬🇧` links to `../`
- Nav links: About (→../../about or ../../../about), Services (→../../ or ../../../), Team, Contact
- Mobile hamburger menu with same links

## Page Template (each page must have ALL of these sections):
1. **Hero** — Service name, one-line tagline, teal gradient background (NO photo needed, use gradient)
2. **What Is It** — Plain language explanation, 2-3 paragraphs
3. **Who Is It For** — Target audience (age groups, symptoms, conditions)
4. **How It Works** — Step-by-step process, numbered cards with icons
5. **Benefits** — 4-6 benefit cards with icons
6. **FAQ** — 5-6 common questions with expandable accordion
7. **CTA** — "Ready to get started?" section linking to contact form on main page
8. **Footer** — Same as main site (nav links, contact info, copyright)

## Contact Form
DO NOT include a contact form on service pages. Instead, CTA links back to the main page contact section using:
- EN: `../../#contact`
- SV: `../../../#contact`

## SEO Requirements (EVERY page must have):
- `<title>` with service name + "Airway Clinic Stockholm"
- `<meta name="description">` with unique description
- `<link rel="canonical">`
- `<link rel="alternate" hreflang="en">` and `<link rel="alternate" hreflang="sv">`
- `<link rel="alternate" hreflang="x-default">`
- JSON-LD structured data (MedicalProcedure or MedicalWebPage)
- Open Graph meta tags

## File Paths (create EXACTLY these files):

### 1. Growth Guidance / Tillväxtledning
- EN: `services/growth-guidance/index.html`
- SV: `services/growth-guidance/sv/index.html`

English slug: growth-guidance
Swedish title: Tillväxtledning
English title: Growth Guidance
Description: Early intervention orthodontics guiding jaw and facial development in children. Uses removable appliances to guide growth patterns naturally. Prevents need for extractions and surgery later. For children ages 3-12.

### 2. Myofunctional Therapy / Myofunktionell Terapi
- EN: `services/myofunctional-therapy/index.html`
- SV: `services/myofunctional-therapy/sv/index.html`

English slug: myofunctional-therapy
Swedish title: Myofunktionell Terapi
English title: Myofunctional Therapy
Description: Exercises to correct tongue posture, swallowing patterns, and oral muscle function. Treats mouth breathing, tongue thrust, and speech issues. Jessica Gorlee's specialty. For children and adults.

### 3. Airway & Sleep Analysis / Luftvägs- & sömnanalys
- EN: `services/airway-sleep-analysis/index.html`
- SV: `services/airway-sleep-analysis/sv/index.html`

English slug: airway-sleep-analysis
Swedish title: Luftvägs- & sömnanalys
English title: Airway & Sleep Analysis
Description: Comprehensive evaluation of breathing, sleep quality, and airway patency. Identifies obstructive sleep apnoea, mouth breathing, and related issues. Uses home sleep studies and clinical assessment.

### 4. ALF Therapy / ALF-terapi
- EN: `services/alf-therapy/index.html`
- SV: `services/alf-therapy/sv/index.html`

English slug: alf-therapy
Swedish title: ALF-terapi
English title: ALF Therapy
Description: Advanced Lightwire Functional appliance therapy. A gentle, holistic orthodontic approach using wire appliances to improve cranial alignment, airway, and bite simultaneously. Minimal discomfort, maximum results.

### 5. Jaw Functional Orthopaedics (JFO) / Käkfunktionell ortopedi
- EN: `services/jfo/index.html`
- SV: `services/jfo/sv/index.html`

English slug: jfo
Swedish title: Käkfunktionell ortopedi (JFO)
English title: Jaw Functional Orthopaedics (JFO)
Description: Non-surgical treatment to correct jaw positioning and alignment. Addresses TMJ disorders, bite issues, and facial asymmetry. Works with the body's natural growth mechanisms.

## Content Language:
- EN pages: all content in English
- SV pages: all content in Swedish (proper Swedish, not machine-translated feeling)
- Nav labels in respective language

## Clinic Details (for footer/structured data):
- Name: Airway Clinic Stockholm
- Address: Sveavägen 91, 113 50 Stockholm
- Phone: +46 8 123 456 78
- Email: info@airwayclinic.se
- Dr. Siavosh Hakimmaani, D.D.S., 30+ years experience
- Jessica Gorlee, Leg. Logoped & OMFT-terapeut, since 2004

## Important Notes:
- Asset paths: EN pages use `../../assets/`, SV pages use `../../../assets/`
- Flag link paths: EN pages → `./sv/` and `./`, SV pages → `./` and `../`
- All CSS inline in `<style>` tag
- All JS inline in `<script>` tag
- No external dependencies except Google Fonts
- FAQ accordion must be functional (click to expand/collapse)
- Mobile responsive (test breakpoints at 768px and 1024px)
- Build ALL 10 files before stopping
