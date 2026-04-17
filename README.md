# RielArt Website

A modern, dark-themed website for RielArt - a Webflow Certified Partner agency specializing in web design, branding, and paid advertising.

## Features

- **Dark Theme**: Pure black background with cyan/blue gradient accents
- **Glassmorphism Design**: Modern translucent cards with blur effects
- **Smooth Animations**: GSAP-powered scroll animations and interactions
- **Responsive Design**: Fully responsive for mobile, tablet, and desktop
- **Interactive Elements**: Hover effects, particle background, and smooth scrolling
- **Performance Optimized**: Single-file structure with embedded assets

## Color Palette

- **Background**: #000000 (Pure Black)
- **Primary Accent**: Electric Cyan (#00D9FF) to Blue (#0066FF) gradient
- **Secondary**: Deep Blue (#0A1628)
- **Text**: White (#FFFFFF) and Light Gray (#B0B0B0)
- **Cards**: Dark translucent (rgba(255,255,255,0.05)) with blur

## Technologies Used

- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first CSS framework (via CDN)
- **GSAP**: Advanced animations and scroll triggers
- **Lucide Icons**: Modern icon library
- **Google Fonts**: Outfit (display) and Inter (body)

## Project Structure

```
rielart-website/
├── index.html          # Main website file (all CSS/JS embedded)
├── hero-wave.png       # 3D abstract wave image for hero
├── project-lumina.jpg  # Portfolio project image 1
├── project-techflow.jpg # Portfolio project image 2
├── project-artisan.jpg # Portfolio project image 3
└── README.md           # This file
```

## GitHub Pages Deployment Instructions

### Method 1: Direct Upload (Easiest)

1. **Create a GitHub Repository**
   - Go to [GitHub](https://github.com) and sign in
   - Click the "+" icon and select "New repository"
   - Name it `rielart-website` (or any name you prefer)
   - Make it Public
   - Click "Create repository"

2. **Upload Files**
   - In your new repository, click "Add file" → "Upload files"
   - Upload all files from this folder:
     - `index.html`
     - `hero-wave.png`
     - `project-lumina.jpg`
     - `project-techflow.jpg`
     - `project-artisan.jpg`
   - Click "Commit changes"

3. **Enable GitHub Pages**
   - Go to repository "Settings"
   - Scroll down to "Pages" section (or click "Pages" in the left sidebar)
   - Under "Source", select "Deploy from a branch"
   - Select "main" branch and "/ (root)" folder
   - Click "Save"

4. **Access Your Website**
   - Wait 1-2 minutes for deployment
   - Your site will be live at: `https://yourusername.github.io/rielart-website`
   - The URL will be shown in the GitHub Pages settings

### Method 2: Using Git Command Line

1. **Create a GitHub Repository** (as above)

2. **Initialize Git and Push**
   ```bash
   # Navigate to the website folder
   cd rielart-website
   
   # Initialize git
   git init
   
   # Add all files
   git add .
   
   # Commit
   git commit -m "Initial commit"
   
   # Add remote repository (replace with your repo URL)
   git remote add origin https://github.com/yourusername/rielart-website.git
   
   # Push to GitHub
   git push -u origin main
   ```

3. **Enable GitHub Pages** (as above)

### Method 3: Using GitHub Desktop

1. **Install GitHub Desktop** from [desktop.github.com](https://desktop.github.com)

2. **Add Local Repository**
   - Open GitHub Desktop
   - Click "File" → "Add local repository"
   - Select the `rielart-website` folder
   - Click "Add repository"

3. **Publish to GitHub**
   - Click "Publish repository"
   - Sign in to GitHub if prompted
   - Name your repository
   - Click "Publish repository"

4. **Enable GitHub Pages** (as above)

## Customization

### Changing Content

All content is in `index.html`. Look for these sections:

- **Hero Section**: Lines ~200-280
- **Services Section**: Lines ~320-420
- **Portfolio Section**: Lines ~440-540
- **Process Section**: Lines ~560-640
- **Testimonials Section**: Lines ~660-740
- **Contact Section**: Lines ~760-840
- **Footer**: Lines ~860-920

### Changing Colors

Colors are defined in the Tailwind config (in the `<script>` tag):

```javascript
colors: {
    'brand-black': '#000000',
    'brand-void': '#0A0A0A',
    'brand-cyan': '#00D9FF',
    'brand-blue': '#0066FF',
    'brand-deep': '#0A1628',
    'brand-gray': '#B0B0B0',
}
```

### Changing Images

Replace these files with your own images (keep the same filenames):
- `hero-wave.png` - Hero section 3D wave (transparent background recommended)
- `project-lumina.jpg` - Portfolio project 1
- `project-techflow.jpg` - Portfolio project 2
- `project-artisan.jpg` - Portfolio project 3

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance Notes

- All CSS is embedded in the HTML file
- All JavaScript is embedded in the HTML file
- Images should be optimized for web (recommended: WebP format, <500KB each)
- GSAP animations are hardware-accelerated

## License

This website is created for RielArt. All rights reserved.

## Support

For questions or issues, contact: hello@rielart.com
