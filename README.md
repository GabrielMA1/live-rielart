# rielart.com — business website

Static production-ready website files. Deploy the contents of this folder at the domain root.

## Structure
- `index.html` — complete business homepage
- `services/` — service overview
- `pricing/` — US-dollar pricing, fixed-scope ordering, comparison, and scope notes
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
- Confirm USD $497 and USD $247 starting prices remain current.
- Confirm the Calendly URL and Formspree endpoint.
- Replace representative project directions with approved case studies as they become available.

## Redirects
The `_redirects` file covers older legal `.html` paths on compatible hosts. Static redirect pages are included for GitHub Pages compatibility.


## Stripe placeholders

The Pricing page includes an embedded Stripe Payment Links buy-button placeholder for the two fixed-scope services. Replace the following values in `pricing/index.html`:

- `buy_btn_REPLACE_DIGITAL_FOUNDATION`
- `buy_btn_REPLACE_AUTOMATION_SETUP`
- `pk_test_REPLACE_WITH_YOUR_PUBLISHABLE_KEY`

The custom Connected System intentionally has no direct-order button. Keep `/packages/` as the included redirect to `/pricing/`.
