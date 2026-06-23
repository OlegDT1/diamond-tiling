# Diamond Tiling — Website

A production-ready marketing website for **Diamond Tiling**, a premium tile installation and
bathroom renovation company serving Toronto & the GTA.

Built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **Framer Motion**. Modern luxury
design in a black / white / charcoal palette with a gold accent — mobile-first, fast, and SEO-ready.

## ✨ Features

- **6 pages** — Home, About, Services, Portfolio, Reviews, Contact
- **Lead generation** — validated quote-request form + click-to-call buttons throughout
- **SEO** — per-page metadata, Open Graph/Twitter cards, `sitemap.xml`, `robots.txt`, and
  JSON-LD schema (LocalBusiness / GeneralContractor, AggregateRating, Reviews, FAQ)
- **Animations** — scroll reveals, staggered grids, animated mobile nav and portfolio filtering
- **Reusable components** — everything is data-driven from `lib/data.js` and `lib/site.js`
- **Placeholder imagery** — branded SVG art for every service & project
- **Accessible** — semantic markup, skip link, focus states, reduced-motion support

## 🚀 Getting started

> Requires Node.js 18.17+ and npm.

```bash
npm install
npm run dev      # http://localhost:3000
```

Build for production:

```bash
npm run build
npm run start
```

## 📁 Project structure

```
app/
  layout.js          # Root layout, fonts, global SEO metadata, nav + footer
  page.js            # Home
  about/             # About
  services/          # Services
  portfolio/         # Portfolio (filterable gallery)
  reviews/           # Reviews + rating summary
  contact/           # Quote form, map, FAQ
  sitemap.js         # Auto-generated sitemap
  robots.js          # robots.txt
  globals.css        # Tailwind layers + design tokens
components/          # Reusable UI (Navbar, Hero, cards, form, etc.)
lib/
  site.js            # Business info, contact details, SEO config
  data.js            # Services, projects, testimonials, FAQs
public/images/       # SVG placeholder imagery
scripts/             # Placeholder image generator
```

## 🔧 Customising

| Want to change…            | Edit                                              |
| -------------------------- | ------------------------------------------------- |
| Phone, email, address, URL | `lib/site.js`                                      |
| Services / projects / reviews | `lib/data.js`                                  |
| Colours & fonts            | `tailwind.config.js`                               |
| Real photos                | drop files in `public/images/` and update paths   |

### Before going live

1. Update **all** business details in `lib/site.js` (phone, email, address, domain, social links).
2. Replace the SVG placeholders in `public/images/` with real photography (jpg/webp). Once you do,
   you can remove `dangerouslyAllowSVG` from `next.config.mjs`.
3. Wire the contact form in `components/ContactForm.jsx` to a real endpoint (API route, Formspree,
   Resend, or your CRM). It currently simulates submission.
4. Swap the OpenStreetMap embeds for a Google Maps embed with your real location if preferred.
5. Set the production domain in `lib/site.js` so canonical URLs, sitemap and schema are correct.

## 🧱 Tech

- Next.js 14 · React 18 · Tailwind CSS 3 · Framer Motion 11
