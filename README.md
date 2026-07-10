# rielart.com — business website

Static production-ready website files. Deploy the contents of this folder at the domain root.

## Structure
- `index.html` — complete business homepage
- `services/` — service overview
- `pricing/` — US-dollar fixed-scope projects, monthly subscriptions, Stripe placeholders, comparison, and scope notes
- `portfolio/` — representative project directions
- `process/` — detailed delivery process
- `about/` — company and team
- `contact/` — Formspree inquiry form and lazy-loaded embedded Calendly scheduler
- `blog/` — insights index and articles
- `privacy-policy/`, `terms/` — legal pages

## Homepage features
- Light mode by default with a persistent dark-mode toggle
- Brand, web, AI systems, pricing, process, insights, FAQ, and contact sections
- Message / Book a Call tabs with Calendly embedded directly in the page
- Accessible single-open FAQ behavior
- Responsive layouts and reduced-motion support

## Important checks before publishing
- Confirm one-time prices (USD $497 and USD $247) and monthly subscription prices (USD $149, $249, $399, and $699) remain current.
- Confirm the subscription scope, billing terms, cancellation terms, and the note that advertising spend is separate.
- Confirm the Calendly URL and Formspree endpoint.
- Replace representative project directions with approved case studies as they become available.

## Redirects
The `_redirects` file covers older legal `.html` paths on compatible hosts. Static redirect pages are included for GitHub Pages compatibility.


## Stripe placeholders

The Pricing page includes embedded Stripe Payment Links buy-button placeholders for two fixed-scope services and four recurring monthly subscriptions. Replace the following values in `pricing/index.html`:

- `buy_btn_REPLACE_DIGITAL_FOUNDATION`
- `buy_btn_REPLACE_AUTOMATION_SETUP`
- `buy_btn_REPLACE_DIGITAL_PRESENCE_CARE`
- `buy_btn_REPLACE_AI_AUTOMATION_CARE`
- `buy_btn_REPLACE_ONLINE_ADS_MANAGEMENT`
- `buy_btn_REPLACE_GROWTH_SYSTEMS_PARTNER`
- `pk_test_REPLACE_WITH_YOUR_PUBLISHABLE_KEY`

Use recurring Stripe Payment Links for the four subscription placeholders. The custom Connected System intentionally has no direct-order button. Keep `/packages/` as the included redirect to `/pricing/`.


## July 2026 content and UX update

- The homepage hero uses a non-overlapping responsive grid.
- Homepage pricing cards intentionally omit prices and link to `/pricing/`.
- The Pricing page includes project and monthly-subscription comparison tables.
- The Services page includes an Ongoing Management section linked to monthly plans.
- Contact panels show email and LinkedIn; scheduling remains available in the embedded Book a Call tab.
- Five original, people-first insight articles were added with Article structured data, canonical URLs, bylines, internal links, and primary-source references.
- Stripe product IDs and the publishable key remain placeholders in `pricing/index.html`.

## v6 layout refinements

- Homepage hero uses three deliberate lines with balanced word counts and responsive no-wrap sizing.
- Homepage pricing cards include a consistent gap before the CTA.
- Homepage and Contact page now use the same contact section and light/dark theme styling.
- Contact shortcuts are limited to `Email hello@rielart.com` and `Connect on LinkedIn`.
