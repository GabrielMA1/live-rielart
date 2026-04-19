# RielArt Website - Static HTML Version

A complete, production-ready static website for RielArt - your digital partner for web design, branding, paid advertising, and AI integration services.

## File Structure

```
rielart/
├── index.html              # Main homepage (all sections)
├── privacy-policy.html     # Privacy Policy page
├── terms.html              # Terms of Service page
├── styles.css              # All styles, animations, and effects
├── script.js               # All JavaScript (animations, interactions)
├── images/
│   ├── hero-services.png   # 3D hero visual
│   ├── mockup-lumina.jpg   # Portfolio: Lumina Studio
│   ├── mockup-techflow.jpg # Portfolio: TechFlow
│   └── mockup-artisan.jpg  # Portfolio: Artisan Coffee
└── README.md               # This file
```

## How to Deploy to GitHub Pages

### Step 1: Create a GitHub Repository
1. Go to [github.com](https://github.com) and log in
2. Click the **+** icon and select **New repository**
3. Name it `rielart` (or `rielart.github.io` for a user site)
4. Make it **Public**
5. Click **Create repository**

### Step 2: Upload Files
**Option A - Drag & Drop (Easiest):**
1. On your new repository page, click **"uploading an existing file"**
2. Drag all files from this folder into the upload area
3. Make sure the `images/` folder and its contents are included
4. Click **Commit changes**

**Option B - Git Command Line:**
```bash
# Navigate to the project folder
cd rielart

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial website upload"

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/rielart.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select **Deploy from a branch**
5. Select **main** branch and **/(root)** folder
6. Click **Save**
7. Wait 1-2 minutes, then visit `https://YOUR_USERNAME.github.io/rielart`

## How to Edit Content

### Easy Text Edits
Look for `<!-- EDIT:` comments in the HTML files. These mark spots where you can safely change text:

- **Headline**: Search for `hero-headline` class in `index.html`
- **Service descriptions**: Search for `service-group-card` sections
- **Contact info**: Search for `hello@rielart.com` and phone number
- **Testimonials**: Search for `testimonial-card` sections
- **Footer text**: Bottom of `index.html`

### Changing Colors
Edit `styles.css`:
```css
/* Main brand colors - change these hex values */
--brand-cyan: #00D9FF;    /* Cyan accent */
--brand-blue: #0066FF;    /* Blue accent */
```

### Updating Images
1. Replace files in the `images/` folder
2. Keep the same filenames, OR
3. Update the `src` attribute in the HTML to match your new filenames

### Formspree Contact Form
The contact form is already connected to Formspree. To change the endpoint:
1. Go to [formspree.io](https://formspree.io)
2. Create a new form
3. Copy your new form endpoint (e.g., `https://formspree.io/f/YOUR_NEW_CODE`)
4. In `index.html`, find the form tag and update the `action` attribute

## Key Features

- **Pure HTML/CSS/JS** - No build step, no frameworks
- **GSAP animations** - Smooth scroll-triggered animations
- **Particle background** - Animated floating particles
- **Glassmorphism cards** - Modern frosted glass effect
- **Responsive design** - Works on mobile, tablet, and desktop
- **Dark theme** - Blue/cyan gradient accents
- **Two service paths** - Digital Presence + AI Integration
- **Service focus** - Clicking hero choice cards highlights the relevant service
- **Formspree integration** - Working contact form
- **SEO meta tags** - Search engine optimized
- **Accessible** - Focus states, reduced motion support

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Need Help?

Contact: hello@rielart.com | 647-906-3547