# Build: Airway Clinic Stockholm — Swedish Homepage

Build a complete, production-ready, single-page website for Airway Clinic Stockholm. Write the output to `index.html` in the current directory.

## Brand Colors (extracted from logo)
- Primary teal: #3bb6b3
- Dark teal: #1a6b69
- Accent gold: #e8c170
- Light background: #f7f5f0
- White: #ffffff
- Dark text: #2c3e50
- Light text on dark: #f0f4f4

## Typography
- Headings: 'Playfair Display', serif (Google Fonts)
- Body: 'Inter', sans-serif (Google Fonts)

## Structure — 10 sections, ALL TEXT IN SWEDISH

### 1. Navigation
- Fixed top nav, transparent over hero, solid white on scroll
- Logo: `assets/logo-original.png` (teal text logo)
- Nav links: Om oss, Behandlingar, Team, Kontakt
- Language switcher: SV (active) | EN (links to /en/)
- CTA: "Boka konsultation" button (teal, rounded)
- Mobile hamburger menu

### 2. Hero Section
- Full viewport, gradient bg (#f7f5f0 to white to #e0f4f3)
- H1: "Luftvägar som förändrar liv" (serif, dark teal)
- Sub: "Stockholms ledande klinik för luftvägsfokuserad tandvård, myofunktionell terapi och bettfysiologi"
- Two CTAs: "Boka konsultation →" (primary), "Läs mer" (secondary)
- Decorative SVG wave at bottom

### 3. About / Philosophy
- Two-column grid: visual placeholder (teal gradient) + text
- Label: "VÅR FILOSOFI" (gold, uppercase)
- Heading: "Helhetssyn på tandvård"
- Body about holistic dentistry, 30+ years, treating the cause not symptoms

### 4. Services — 7 cards in responsive grid (3+3+1)
Each card: teal left border, icon, title, description
1. Tillväxtledning — barns käktillväxt
2. Myofunktionell terapi — tungans position, sväljning
3. Luftvägs- & sömnanalys — andningsstörningar
4. ALF-terapi — kraniofacial balans
5. Käkfunktionell ortopedi (JFO) — utan kirurgi
6. TMS / Käkledsbehandling — smärtlindring
7. Allmän tandvård — funktionell hälsa

### 5. Team — two members side by side
- Dr. Siavosh Hakimmaani, D.D.S., Founder — img: assets/dr-sia.jpg
- Jessica Gorlee, Leg. Logoped & OMFT-terapeut — img: assets/jessica-gorlee.jpg
- Photos: round, with teal border. Short bios in Swedish.

### 6. Stats bar — dark teal bg
- "30+" Års erfarenhet | "1000+" Nöjda patienter | "3" Länder
- Gold numbers, white labels

### 7. Testimonials — 3 cards
- Subtle quote marks, Swedish patient quotes about holistic care, children's improvements, jaw pain relief

### 8. Contact section — two columns
- Left: address (Sveavägen 91, 113 50 Stockholm), phone, email, Google Maps embed
- Right: GHL form iframe — `https://api.leadconnectorhq.com/widget/form/mh37ZywHu6oAV9HiPXeG`

### 9. Language bar
- Cream bg, centered: Svenska (active) · English (link)

### 10. Footer
- Dark teal bg, logo (brightened), nav links, contact info, copyright 2026

## SEO
- html lang="sv", charset, viewport
- Title: "Airway Clinic Stockholm — Luftvägstandvård & Myofunktionell Terapi | Dr. Sia"
- Meta description in Swedish
- hreflang: sv → /, en → /en/, x-default → /
- Open Graph tags
- JSON-LD: LocalBusiness + Dentist schema

## Design Rules
- Pure HTML/CSS/JS, single file, inline styles
- Only external dependency: Google Fonts
- Smooth scroll, IntersectionObserver fade-in animations
- Card hover: translateY(-4px) + shadow
- Mobile-first responsive (640px, 768px, 1024px breakpoints)
- Max width 1200px, centered
- Sections: 80px padding (60px mobile)
- Lazy load images

## Output
Write ONE file: `index.html` — complete and deployable.