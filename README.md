# rielart.com — business website

Static production-ready website files. Deploy the contents of this folder at the domain root.

## Structure
- `index.html` — complete business homepage
- `services/` — service overview
- `pricing/` — US-dollar fixed-scope projects, monthly subscriptions, live Stripe Payment Links, comparison, and scope notes
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


## Stripe Payment Links

The Pricing page uses live Stripe-hosted Payment Links for the two fixed-scope services and four monthly subscriptions. Each Order or Subscribe button opens Stripe Checkout in a new browser tab.

Configured links:

- Digital Foundation: `https://buy.stripe.com/8x25kvbsKcKF6M2gYqfw400`
- Focused Automation Setup: `https://buy.stripe.com/dRm00b9kC5id6M29vYfw401`
- Digital Presence Care: `https://buy.stripe.com/bJe14f54m11Xc6mdMefw402`
- AI Automation Care: `https://buy.stripe.com/7sYbIT0O64e95HYfUmfw403`
- Online Ads Management: `https://buy.stripe.com/14A5kv9kCh0Vb2igYqfw404`
- Growth Systems Partner: `https://buy.stripe.com/5kQ6oz2WefWRgmCfUmfw405`

The custom Connected System intentionally remains inquiry-only. Keep `/packages/` as the included redirect to `/pricing/`.

## July 2026 content and UX update

- The homepage hero uses a non-overlapping responsive grid.
- Homepage pricing cards intentionally omit prices and link to `/pricing/`.
- The Pricing page includes project and monthly-subscription comparison tables.
- The Services page includes an Ongoing Management section linked to monthly plans.
- Contact panels show email and LinkedIn; scheduling remains available in the embedded Book a Call tab.
- Five original, people-first insight articles were added with Article structured data, canonical URLs, bylines, internal links, and primary-source references.
- Stripe Payment Links are live in `pricing/index.html`; test each link in Stripe live mode before deployment.

## v6 layout refinements

- Homepage hero uses three deliberate lines with balanced word counts and responsive no-wrap sizing.
- Homepage pricing cards include a consistent gap before the CTA.
- Homepage and Contact page now use the same contact section and light/dark theme styling.
- Contact shortcuts are limited to `Email hello@rielart.com` and `Connect on LinkedIn`.


## v7 interface refinements
- Header CTA uses **Reach Out** and opens the message section.
- Homepage hero uses **View Pricing** and a connected Brand/Web/AI visual.
- Contact shortcuts are stacked vertically for better readability.
- Theme icon alignment was normalized across browsers.

## July 2026 pre-launch audit update
- Removed unfinished About-page placeholder copy.
- Reframed the Work page around representative solution examples without presenting fictional proof.
- Added a pre-checkout clarity block covering currency, onboarding, scope exclusions, and recurring billing.
- Improved the Insights and Process title tags.
- Added visible required-field guidance and response-time expectations to both contact forms.
- Strengthened Toronto/Canada business identity signals and Organization structured data.

Real client testimonials and case-study results should only be added after written client approval; none were fabricated in this update.

## Launch polish update (v11)

- Internal RielArt links now open in the same tab; external sources, LinkedIn, and Stripe links open safely in a new tab.
- Added a results-oriented delivery section and a clear explanation of the RielArt Client Portal.
- Added Client Portal references across Services, Pricing, Process, Contact, footer navigation, and legal pages.
- Clarified that billing remains handled through Stripe while portal billing tools are in development.
- Updated the About page to present RielArt as a founder-led studio, with Daniel Patel listed as the Web and AI Partner supporting selected projects.
- Strengthened portfolio transparency language and expanded privacy/terms coverage for portal access and data.


## 2027 liquid-glass redesign

- Rebuilt the visual system around a restrained liquid-glass aesthetic with light and dark modes.
- Added a floating glass navigation bar, editorial typography, layered depth, subtle grid lighting, and more deliberate spacing.
- Refined the homepage hero, delivery proof, pricing, results, portal promotion, insights, FAQ, contact, and footer sections without changing the approved business copy.
- Updated every interior page through the shared design system, including Services, Pricing, Work, Process, About, Insights, Contact, legal pages, and article layouts.
- Added active navigation states, scroll-aware header treatment, subtle pointer-responsive glass lighting, reduced-motion support, and responsive mobile layouts.
- Internal links remain in the current tab; external destinations, Stripe Checkout, LinkedIn, and the Client Portal use their existing safe behaviour.
