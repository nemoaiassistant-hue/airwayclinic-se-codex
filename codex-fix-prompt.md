# Fix Homepage CSS — index.html and sv/index.html

## Problem
The nav CSS was recently refactored across 30 pages. All sub-pages (services, resources, team) look correct with the new standardised nav. But the two homepages (`index.html` and `sv/index.html`) are broken — the page renders with images but no visible text or styling.

The root cause: the `<style>` block in both files has duplicate and conflicting CSS rules. A "STANDARD NAV" block was prepended, but the original page-specific CSS (hero, sections, fonts, colours, etc.) was not properly cleaned up.

## What to do

### For BOTH `index.html` (EN) and `sv/index.html` (SV):

1. **Read the current file** carefully and understand the CSS structure

2. **Consolidate the `<style>` block** into ONE clean, deduplicated block:
   - Keep ALL the page-specific CSS (hero, sections, about-grid, services-grid, team-grid, contact form, stats, testimonials, footer, animations, etc.)
   - Keep the standardised nav CSS (`.site-header`, `.nav`, `.brand`, `.lang-flags`, `.lang-flag`, `.menu-toggle`, `.nav-panel`, `.nav-links`, `.nav-actions`)
   - Keep the desktop media query with flag image CSS
   - Remove ALL duplicate selectors (there are currently two `:root`, two `body`, two `html`, two `*`, etc.)
   - Ensure CSS custom properties (`--primary`, `--dark-teal`, `--gold`, `--light-bg`, `--white`, `--dark-text`, `--light-text`, `--muted`, `--border`, `--shadow`, `--radius`, `--max`, `--nav-height`) are all defined in a single `:root` block
   - Ensure `@media (min-width: 1024px)` has the desktop nav layout and flag images

3. **Do NOT change the HTML `<body>` content** — only fix the `<style>` block

4. **Do NOT change any other files** — only `index.html` and `sv/index.html`

5. **Keep the nav HTML structure as-is** — the header is correct, just the CSS is broken

### Reference: Sub-page nav CSS (this works correctly)
Look at `services/growth-guidance/index.html` for reference — it has the clean standardised nav CSS that works. The homepage should use the same nav CSS but ALSO retain all the page-specific styles (hero, playfair display fonts, fade-in animations, etc.) that sub-pages don't have.

### Key design elements on the homepage that sub-pages DON'T have:
- Hero section with background image overlay
- Playfair Display serif font for headings
- `.section-title`, `.section-label`, `.section-lede` styles
- `.about-grid`, `.services-grid`, `.team-grid` layouts
- `.family` section
- Stats counter section (`.stats`)
- Testimonials carousel
- Custom contact form (`.form-wrap`, `.form-group`, etc.)
- Fade-in scroll animations
- `.btn-hero` variant
- Footer with columns
- Complex responsive breakpoints for all sections

## Verification
After fixing, the page should display:
- Fixed white nav bar with flag images on left, logo, nav links
- Full hero section with background image, h1 overlay text "Airways that transform lives"
- All sections (About, Services, Team, Stats, Testimonials, Contact) with proper colours, spacing, typography
- Footer
- Mobile responsive

## IMPORTANT
- Do NOT remove any page-specific CSS — only deduplicate and clean
- Do NOT change HTML structure
- Do NOT modify any files besides index.html and sv/index.html
- The sub-pages are fine — they should NOT be changed
