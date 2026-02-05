# 🌅 th3 b3rt | Sunset Art Portfolio

A beautiful sunset-themed artist portfolio built with pure HTML/CSS/JS. Features dark mode, responsive design, and world-class polish.

## 🚀 Quick Deploy to GitHub Pages

### Option 1: Enable GitHub Pages (Easiest)

1. **Go to:** https://github.com/ib3rt/sunset-portfolio/settings/pages

2. **Under "Build and deployment":**
   - Source: ✅ **Deploy from a branch**
   - Branch: **main** → `/ (root)`
   - Click **Save**

3. **Your site will be live at:** https://ib3rt.github.io/sunset-portfolio

### Option 2: Using GitHub CLI (Run Locally)

```bash
# Clone and push with workflow permissions
gh repo clone ib3rt/sunset-portfolio
cd sunset-portfolio
git add -A
git commit -m "Add deployment workflow"
gh repo set-default ib3rt/sunset-portfolio
git push

# Enable GitHub Pages via CLI
gh api repos/ib3rt/sunset-portfolio/pages -X PUT -f source='{"branch":"main","path":"/"}'
```

### Option 3: Deploy to Netlify (Recommended)

1. **Go to:** https://app.netlify.com/drop

2. **Drag & drop** the `sunset-portfolio` folder

3. **Add custom domain:**
   - Go to **Domain Management** → **Add custom domain**
   - Enter: `art.b3rt.dev`

4. **Done!** 🎉

### Option 4: Vercel + Cloudflare (Best Performance)

1. **Deploy to Vercel:**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy
   cd sunset-portfolio
   vercel --prod
   ```

2. **Add custom domain in Vercel:**
   - Settings → Domains → Add `art.b3rt.dev`

3. **Point Cloudflare DNS:**
   - Add CNAME: `art.b3rt.dev` → `cname.vercel-dns.com`
   - Enable SSL (automatic)

## 📁 Project Structure

```
sunset-portfolio/
├── index.html          # Homepage
├── projects.html       # Portfolio gallery
├── about.html          # About page
├── blog.html           # Blog listing
├── contact.html        # Contact form
├── css/
│   └── styles.css      # Complete stylesheet
├── js/
│   └── main.js         # All interactivity
├── images/             # Portfolio images
├── assets/             # Static assets
├── netlify.toml        # Netlify config
├── DEPLOYMENT.md       # Detailed deployment guide
└── README.md           # This file
```

## 🎨 Features

- 🌅 **Sunset-themed design** with animated gradients
- 🌓 **Dark/Light mode** with system preference detection
- 📱 **Fully responsive** with mobile navigation
- ♿ **Accessibility** with ARIA labels and semantic HTML
- 🔍 **SEO optimized** with meta tags and structured data
- ✨ **Smooth animations** with CSS transitions
- ⚡ **Performance optimized** with lazy loading
- 🎯 **Category filtering** on portfolio page

## 🛠️ Customization

### Update Name & Branding

Replace all instances of `th3 b3rt` with your name:

```bash
cd sunset-portfolio
sed -i 's/th3 b3rt/Your Name/g' *.html
```

### Update Colors

Edit `css/styles.css` - `:root` section:

```css
:root {
  --sunset-gold: #FFD700;
  --sunset-orange: #FF6B35;
  --sunset-pink: #FF69B4;
  --sunset-purple: #8B5CF6;
  /* ... */
}
```

### Add Your Images

Replace placeholder images in `images/` folder, then update references in HTML files.

## 📱 Mobile Testing

Test responsiveness using:

```bash
# View locally
cd sunset-portfolio
python3 -m http.server 8000

# Open in browser
# http://localhost:8000

# Test mobile view in DevTools:
# Ctrl+Shift+M (Windows/Linux)
# Cmd+Opt+M (Mac)
```

## 🔗 Useful Links

- **Repository:** https://github.com/ib3rt/sunset-portfolio
- **Live Demo:** (after deployment)
- **Issues:** https://github.com/ib3rt/sunset-portfolio/issues

## 📄 License

MIT License - Feel free to use for your own portfolio!

---

**Made with ❤️ and a touch of sunset magic**
