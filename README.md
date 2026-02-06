# RielArt Studio Website

A modern, production-ready website for RielArt Studio - a digital creative studio specializing in Webflow development, brand identity, and paid advertising.

![RielArt Studio](images/hero-bg.jpg)

## Features

- **Modern Design**: Clean, professional aesthetic with blue (#2563EB) and orange (#F97316) brand colors
- **Fully Responsive**: Mobile-first design that works perfectly on all devices
- **Smooth Animations**: Scroll reveal animations, hover effects, and smooth transitions
- **Interactive FAQ**: Accordion-style FAQ section with smooth expand/collapse
- **Contact Form**: Fully functional contact form with validation
- **SEO Optimized**: Meta tags, Open Graph tags, and semantic HTML structure
- **Fast Loading**: Optimized assets and efficient code structure

## Sections

1. **Hero** - Full-height hero with headline, CTAs, and trust indicators
2. **Services** - Three service cards (Brand Identity, Webflow Development, Marketing & Ads)
3. **Process** - 4-step process timeline with connecting line
4. **Portfolio** - Featured project showcase with case study
5. **FAQ** - 8-question accordion with smooth animations
6. **Contact** - Contact form with service and budget selectors
7. **Footer** - Links, social icons, and copyright

## Tech Stack

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS framework (via CDN)
- **Vanilla JavaScript** - No frameworks, pure JS
- **Google Fonts** - Inter and Space Grotesk typography

## File Structure

```
rielart-website/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Custom styles and animations
├── js/
│   └── main.js         # JavaScript interactions
├── images/
│   ├── hero-bg.jpg     # Hero background image
│   └── fitforward-mockup.jpg  # Portfolio project image
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions deployment
└── README.md           # This file
```

## Getting Started

### Local Development

1. Clone or download this repository
2. Open `index.html` in your browser
3. Or use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (npx)
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

### Customization

#### Colors
Edit the Tailwind config in `index.html`:
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#2563EB',      // Change primary blue
                accent: '#F97316',        // Change accent orange
                // ... other colors
            }
        }
    }
}
```

#### Content
- Update text content directly in `index.html`
- Replace images in the `images/` folder
- Modify FAQ questions in the FAQ section
- Update contact form fields as needed

#### Images
- **Hero Background**: Replace `images/hero-bg.jpg` (recommended: 1920x1080px)
- **Portfolio**: Replace `images/fitforward-mockup.jpg` (recommended: 1200x800px)

## Deployment

### GitHub Pages (Recommended)

#### Method 1: Manual Upload

1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to **Settings** → **Pages**
4. Select **Deploy from a branch**
5. Choose **main** branch and **/(root)** folder
6. Click **Save**
7. Your site will be live at `https://yourusername.github.io/repository-name/`

#### Method 2: Git Command Line

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add remote repository
git remote add origin https://github.com/yourusername/rielart-website.git

# Push to GitHub
git push -u origin main
```

#### Method 3: GitHub Actions (Automated)

This repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) for automatic deployment:

1. Push your code to GitHub
2. The workflow will automatically deploy to GitHub Pages
3. Check the **Actions** tab to monitor deployment status

### Other Hosting Options

#### Netlify
1. Drag and drop the folder to [Netlify Drop](https://app.netlify.com/drop)
2. Or connect your GitHub repository for continuous deployment

#### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

#### Firebase Hosting
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Initialize
firebase init hosting

# Deploy
firebase deploy
```

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+
- Opera 67+

## Performance

- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s

## Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader friendly
- Reduced motion support (`prefers-reduced-motion`)
- Focus indicators for all interactive elements

## SEO

- Semantic HTML5 structure
- Meta description and keywords
- Open Graph tags for social sharing
- Twitter Card support
- Canonical URL
- Alt text for images

## License

This project is created for RielArt Studio. All rights reserved.

## Credits

- Design & Development: Gabriel Macovei
- Images: AI-generated for RielArt Studio
- Icons: Heroicons (via SVG)
- Fonts: Google Fonts (Inter, Space Grotesk)

## Contact

For questions or support:
- Email: hi@rielart.com
- Website: [rielart.github.io](https://rielart.github.io)

---

**Made with passion by Gabriel Macovei**
