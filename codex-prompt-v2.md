# Rebuild: Airway Clinic Stockholm — Swedish Homepage (v2)

Rebuild `index.html` in the current directory. This is an updated version with new photos and layout changes.

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

## Available Images
- `assets/logo-original.png` — teal text logo
- `assets/dr-sia.jpg` — Dr. Sia headshot
- `assets/jessica-gorlee.jpg` — Jessica Gorlee headshot
- `assets/hero-baby.jpg` — baby photo (warm, children's health focus)
- `assets/father-baby.jpg` — father holding baby (warm, family moment)

## Structure — 10 sections, ALL TEXT IN SWEDISH

### 1. Navigation
- Fixed top nav, transparent over hero, solid white on scroll
- Logo: `assets/logo-original.png`
- Nav links: Om oss, Behandlingar, Team, Kontakt
- Language switcher in nav: SV (active, bold) | EN (link to /en/)
- CTA: "Boka konsultation" (teal, rounded)
- Mobile hamburger menu

### 2. Hero Section ★ UPDATED
- Full viewport height
- **BACKGROUND IMAGE**: `assets/hero-baby.jpg` — use as a background with a dark overlay/gradient so the white text is readable. The image should cover the right side or full background.
- Over the image, a gradient overlay (dark teal to transparent) for readability
- H1: "Luftvägar som förändrar liv" (white text, serif)
- Subheading: "Stockholms ledande klinik för luftvägsfokuserad tandvård, myofunktionell terapi och bettfysiologi"
- CTA: "Boka konsultation →" (teal/gold button, stands out against dark bg)
- Keep the SVG wave at the bottom

### 3. About / Philosophy
- Two-column: teal gradient visual placeholder + text
- Label: "VÅR FILOSOFI" (gold)
- Heading: "Helhetssyn på tandvård"
- Body about holistic approach, 30+ years, treating the cause

### 4. Services — 7 cards (3+3+1 grid)
Teal left border, icon, title, description:
1. Tillväxtledning
2. Myofunktionell terapi
3. Luftvägs- & sömnanalys
4. ALF-terapi
5. Käkfunktionell ortopedi (JFO)
6. TMS / Käkledsbehandling
7. Allmän tandvård

### 5. Team — two members side by side
- Dr. Siavosh Hakimmaani (D.D.S., Founder) — assets/dr-sia.jpg
- Jessica Gorlee (Leg. Logoped & OMFT-terapeut) — assets/jessica-gorlee.jpg
- Round photos, teal border, short Swedish bios

### 6. Stats bar — dark teal bg
- "30+" Års erfarenhet | "1000+" Nöjda patienter | "3" Länder
- Gold numbers, white labels

### 7. Testimonials — 3 cards
Swedish patient quotes with subtle quote marks

### 8. Family / Closing Section ★ NEW
- **BACKGROUND IMAGE**: `assets/father-baby.jpg` — parallax or fixed background with overlay
- Warm overlay (dark teal semi-transparent) so text is readable
- Heading: "För hela familjen" (white, serif)
- Short text: "Från nyfödda till vuxna — vi finns här för er familjs luftvägshälsa."
- CTA: "Boka konsultation →"

### 9. Contact — two columns
- Left: address (Sveavägen 91, 113 50 Stockholm), phone, email, Google Maps
- Right: GHL form iframe — `https://api.leadconnectorhq.com/widget/form/mh37ZywHu6oAV9HiPXeG`

### 10. Footer
- Dark teal bg, logo, nav links, contact info, © 2026

## ★ KEY CHANGES FROM v1
1. Hero has a BACKGROUND IMAGE (hero-baby.jpg) with overlay — no more plain gradient
2. NEW "Family" section before Contact — uses father-baby.jpg as background with overlay
3. NO bottom language bar — language switch is ONLY in the nav

## SEO
- html lang="sv", charset, viewport
- Title: "Airway Clinic Stockholm — Luftvägstandvård & Myofunktionell Terapi | Dr. Sia"
- Meta description in Swedish
- hreflang: sv → https://airwayclinic.se/, en → https://airwayclinic.se/en/, x-default → https://airwayclinic.se/
- Canonical: https://airwayclinic.se/
- Open Graph tags
- JSON-LD: LocalBusiness + Dentist schema

## Design Rules
- Pure HTML/CSS/JS, single file, inline styles
- Only external dependency: Google Fonts
- Smooth scroll, IntersectionObserver fade-in animations
- Card hover: translateY(-4px) + shadow
- Mobile-first responsive (640px, 768px, 1024px)
- Max width 1200px, centered
- Lazy load images
- Performance: no heavy frameworks

## Output
Write ONE file: `index.html` — complete and deployable. Overwrite the existing file.