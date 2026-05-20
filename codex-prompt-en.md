# Build: Airway Clinic Stockholm — English Homepage

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

## Structure — 10 sections, ALL TEXT IN ENGLISH

### 1. Navigation
- Fixed top nav, transparent over hero, solid white on scroll
- Logo: `assets/logo-original.png` (teal text logo)
- Nav links: About, Services, Team, Contact
- Language switcher: SV (links to /) | EN (active)
- CTA: "Book Consultation" button (teal, rounded)
- Mobile hamburger menu

### 2. Hero Section
- Full viewport, gradient bg (#f7f5f0 to white to #e0f4f3)
- H1: "Airways that transform lives" (serif, dark teal)
- Sub: "Stockholm's leading clinic for airway-focused dentistry, myofunctional therapy and jaw function. We treat the cause — not just the symptoms."
- Two CTAs: "Book Consultation →" (primary), "Learn More" (secondary)
- Decorative SVG wave at bottom

### 3. About / Philosophy
- Two-column grid: visual placeholder (teal gradient) + text
- Label: "OUR PHILOSOPHY" (gold, uppercase)
- Heading: "A holistic approach to dentistry"
- Body about holistic dentistry, 30+ years, treating the cause not symptoms

### 4. Services — 7 cards in responsive grid (3+3+1)
Each card: teal left border, icon, title, description
1. Growth Guidance — children's jaw growth for optimal facial development
2. Myofunctional Therapy — tongue position, swallowing and breathing patterns
3. Airway & Sleep Analysis — breathing disorders affecting sleep and quality of life
4. ALF Therapy — craniofacial balance, neurological function
5. Jaw Functional Orthopaedics (JFO) — without surgery
6. TMS / TMJ Treatment — jaw joint pain relief
7. General Dentistry — functional health and aesthetics

### 5. Team — two members side by side
- Dr. Siavosh Hakimmaani, D.D.S., Founder — img: assets/dr-sia.jpg
- Jessica Gorlee, Licensed OMFT Therapist — img: assets/jessica-gorlee.jpg
- Photos: round, with teal border. Short bios in English.

### 6. Stats bar — dark teal bg
- "30+" Years of Experience | "1000+" Happy Patients | "3" Countries
- Gold numbers, white labels

### 7. Testimonials — 3 cards
- Subtle quote marks, English patient quotes about holistic care, children's improvements, jaw pain relief

### 8. Contact section — two columns
- Left: address (Sveavägen 91, 113 50 Stockholm, Sweden), phone, email, Google Maps embed
- Right: GHL form iframe — `https://api.leadconnectorhq.com/widget/form/mh37ZywHu6oAV9HiPXeG`

### 9. Language bar
- Cream bg, centered: Svenska (link to /) · English (active)

### 10. Footer
- Dark teal bg, logo (brightened), nav links, contact info, copyright 2026

## SEO
- html lang="en", charset, viewport
- Title: "Airway Clinic Stockholm — Airway Dentistry & Myofunctional Therapy | Dr. Sia"
- Meta description in English
- hreflang: sv → https://airwayclinic.se/, en → https://airwayclinic.se/en/, x-default → https://airwayclinic.se/
- Canonical: https://airwayclinic.se/en/
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

## IMPORTANT
- Match the visual quality, style, and structure of the Swedish version exactly — same design language, same layout patterns
- Write ONE file: `index.html` — complete and deployable.