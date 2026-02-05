# 🚀 Sunset Portfolio - Deployment Guide

A comprehensive guide for deploying your sunset-themed art portfolio to the web.

---

## 📋 Table of Contents

1. [Quick Deploy (30 seconds)](#quick-deploy-30-seconds)
2. [Manual Deployment](#manual-deployment)
3. [Custom Domain Setup](#custom-domain-setup)
4. [Environment Configuration](#environment-configuration)
5. [Performance Optimization](#performance-optimization)
6. [SEO Checklist](#seo-checklist)
7. [Analytics Setup](#analytics-setup)

---

## 🚀 Quick Deploy (30 seconds)

### Option 1: Netlify (Recommended)

1. **Go to:** https://app.netlify.com/drop

2. **Drag & Drop** the `sunset-portfolio` folder

3. **Done!** Your site is live at `random-name.netlify.app`

### Option 2: Vercel

1. **Go to:** https://vercel.com/new

2. **Import** your GitHub repository

3. **Deploy** with default settings

---

## 🛠️ Manual Deployment

### Step 1: Prepare Your Files

```bash
# Navigate to project folder
cd sunset-portfolio

# Verify all files are in place
ls -la
```

Expected structure:
```
sunset-portfolio/
├── index.html
├── projects.html
├── contact.html
├── about.html (optional)
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── images/ (optional)
└── assets/
```

### Step 2: Upload to Netlify

**Option A: Netlify Dashboard**
1. Go to https://app.netlify.com
2. Click "Add new site" → "Deploy manually"
3. Drag & drop your `sunset-portfolio` folder
4. Your site is live! 🎉

**Option B: Netlify CLI**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod --dir=.
```

### Step 3: Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

---

## 🌐 Custom Domain Setup

### Option 1: Netlify Custom Domain

1. In Netlify dashboard, go to **Domain Management**
2. Click **Add custom domain**
3. Enter your domain: `yourname.com`
4. Update DNS records at your registrar:

```
Type: CNAME
Name: www or @
Value: your-site.netlify.app
TTL: Auto
```

### Option 2: Vercel Custom Domain

1. In Vercel dashboard, go to **Settings** → **Domains**
2. Click **Add**
3. Enter your domain
4. Add DNS records:

```
Type: CNAME (or A for apex domain)
Name: www or @
Value: cname.vercel-dns.com or vercel-dns.com
TTL: Auto
```

### Option 3: Cloudflare (Recommended)

For best performance + custom domain:

1. **Add site to Cloudflare**
2. **Update nameservers** at your registrar
3. **Deploy** to Netlify/Vercel first
4. **Add domain** in Cloudflare dashboard
5. **Cloudflare handles SSL automatically**

---

## 🔧 Environment Configuration

### Required Customizations

Edit `index.html`, `projects.html`, and `contact.html`:

```html
<!-- Update these values -->
<title>YOUR NAME | Sunset Art Portfolio</title>

<meta name="description" content="Your portfolio description here">

<!-- Social links -->
<a href="https://instagram.com/yourusername">Instagram</a>
<a href="https://twitter.com/yourusername">Twitter</a>
<a href="https://behance.net/yourusername">Behance</a>

<!-- Contact info -->
<a href="mailto:hello@yourname.com">hello@yourname.com</a>
```

### Analytics

#### Google Analytics (Optional)

Add to `<head>` of all HTML files:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

#### Plausible Analytics (Privacy-friendly)

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

---

## ⚡ Performance Optimization

### Image Optimization

The portfolio already includes lazy loading. For best results:

1. **Use WebP format** for all images
2. **Compress images** at https://squoosh.app
3. **Add width/height** attributes to all images
4. **Use srcset** for responsive images:

```html
<img 
  src="image-800.jpg"
  srcset="image-400.jpg 400w, image-800.jpg 800w, image-1200.jpg 1200w"
  sizes="(max-width: 600px) 400px, 800px"
  alt="Description"
>
```

### Minification (Optional)

For production, minify CSS and JS:

```bash
# CSS minification
npx clean-css-cli -o css/styles.min.css css/styles.css

# JS minification  
npx terser js/main.js -o js/main.min.js -c -m
```

Update HTML to reference minified files:
```html
<link rel="stylesheet" href="css/styles.min.css">
<script src="js/main.min.js" defer></script>
```

---

## 🔍 SEO Checklist

### On-Page SEO

- [ ] Unique title tags on all pages
- [ ] Meta descriptions on all pages
- [ ] Open Graph tags for social sharing
- [ ] Structured data (Schema.org)
- [ ] Semantic HTML5 elements
- [ ] Alt text on all images
- [ ] Descriptive URLs
- [ ] Internal linking structure

### Technical SEO

- [ ] XML sitemap (auto-generated)
- [ ] Robots.txt file
- [ ] Canonical URLs
- [ ] SSL/HTTPS enabled
- [ ] Fast load times (< 3s)
- [ ] Mobile responsive
- [ ] Core Web Vitals passing

### Social Meta Tags

Add to `<head>`:

```html
<!-- Open Graph -->
<meta property="og:title" content="Your Name | Artist Portfolio">
<meta property="og:description" content="Portfolio description">
<meta property="og:image" content="https://yourdomain.com/og-image.jpg">
<meta property="og:url" content="https://yourdomain.com">
<meta property="og:type" content="website">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Your Name | Artist Portfolio">
<meta name="twitter:description" content="Portfolio description">
<meta name="twitter:image" content="https://yourdomain.com/og-image.jpg">
```

---

## 📊 Analytics Setup

### Google Analytics 4

1. Create GA4 property at https://analytics.google.com
2. Get your measurement ID
3. Add tracking code (see above)
4. Verify with Real Time view

### Fathom (Privacy-friendly alternative)

1. Create account at https://usefathom.com
2. Add site
3. Add script to all pages:

```html
<script src="https://cdn.usefathom.com/script.js" data-site="YOUR_SITE_ID" defer></script>
```

---

## 📁 File Structure Reference

```
sunset-portfolio/
│
├── 📄 index.html              # Homepage
├── 📄 projects.html           # Portfolio gallery with filters
├── 📄 contact.html           # Contact form + info
│
├── 📁 css/
│   └── 🎨 styles.css         # Main stylesheet (21KB)
│
├── 📁 js/
│   └── ⚙️ main.js           # All interactions (12KB)
│
├── 📁 images/
│   ├── 🖼️ artwork/         # Portfolio images
│   ├── 📷 photos/          # Photography
│   └── 🖼️ thumbnails/       # Grid thumbnails
│
└── 📄 README.md             # This file
```

---

## 🎨 Customization Guide

### Colors

Edit `:root` in `css/styles.css`:

```css
:root {
  --sunset-gold: #FFD700;      /* Primary accent */
  --sunset-orange: #FF6B35;    /* CTAs */
  --sunset-pink: #FF69B4;      /* Highlights */
  --sunset-purple: #8B5CF6;     /* Secondary */
  /* ... */
}
```

### Fonts

Google Fonts are included. To change:

```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@400;500;600;700&display=swap" rel="stylesheet">

<style>
  :root {
    --font-display: 'YOUR_FONT', serif;
  }
</style>
```

### Animations

Edit keyframes in `css/styles.css`:

```css
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}
```

---

## 🚨 Troubleshooting

### Issue: Images not loading
**Solution:** Check image paths are correct relative to HTML files

### Issue: Mobile menu not working
**Solution:** Ensure JavaScript is loaded (check console for errors)

### Issue: Dark mode toggle not persisting
**Solution:** Check localStorage isn't blocked

### Issue: Forms not sending
**Solution:** Connect to form service (Netlify Forms, Formspree)

### Issue: Slow loading
**Solution:** Compress images, enable caching

---

## 📈 Going Live Checklist

- [ ] All placeholder text replaced
- [ ] Contact info updated
- [ ] Social links working
- [ ] Forms connected
- [ ] Analytics installed
- [ ] Meta tags filled
- [ ] OG images created (1200x630px)
- [ ] Favicon added
- [ ] Custom domain connected
- [ ] SSL working
- [ ] Mobile tested
- [ ] Cross-browser tested
- [ ] Performance optimized
- [ ] SEO verified

---

## 🎉 Deployment Complete!

Once deployed:

1. **Share your site** on social media
2. **Submit to Google Search Console**
3. **Add to portfolios** (Behance, Dribbble, etc.)
4. **Celebrate!** 🎊

---

**Questions?** Open an issue or reach out!

**Made with ❤️ using OpenClaw**
