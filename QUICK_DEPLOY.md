# 🚀 Deployment Instructions for th3 b3rt Portfolio

## Quick Deploy (GitHub Pages)

### Step 1: Enable GitHub Pages

1. **Go to:** https://github.com/ib3rt/sunset-portfolio/settings/pages

2. **Configure:**
   - Source: ✅ **Deploy from a branch**
   - Branch: **main** → `/(root)`
   - Click **Save**

3. **Done!** 🎉 Your site will be live at:
   - **https://ib3rt.github.io/sunset-portfolio**

### Step 2: Add Custom Domain (art.b3rt.dev)

In GitHub Settings → Pages:
1. Custom domain: `art.b3rt.dev`
2. Save
3. Wait for DNS to propagate (~15 min)
4. Click "Enforce HTTPS"

---

## Alternative: Deploy to Netlify (Recommended)

1. **Go to:** https://app.netlify.com/drop

2. **Drag & drop** the entire `sunset-portfolio` folder

3. **Add custom domain:**
   - Domain Management → Add custom domain
   - Enter: `art.b3rt.dev`

4. **Done!** Site live instantly

---

## Local Development

```bash
cd sunset-portfolio

# Start local server
python3 -m http.server 8000

# Open in browser
open http://localhost:8000
```

---

## Files Ready for Deployment

✅ `netlify.toml` - Netlify configuration  
✅ `.github/workflows/deploy.yml` - GitHub Actions (for auto-deploy)  
✅ `README.md` - Project documentation  
✅ `DEPLOYMENT.md` - Detailed deployment guide

---

## What's Been Fixed

✅ Artist name: "th3 b3rt"  
✅ Header navigation working properly  
✅ Dropdown menus animated  
✅ Mobile menu functional  
✅ All links working  
✅ SEO metadata complete  
✅ Dark/light mode toggle
