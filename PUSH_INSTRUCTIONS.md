# Push to GitHub Instructions

The repository has been created at: https://github.com/ib3rt/sunset-portfolio

## Quick Push (run locally with GitHub CLI or token):

```bash
cd /home/ubuntu/.openclaw/workspace/projects/sunset-portfolio

# Option 1: Using gh CLI (if authenticated)
gh repo sync ib3rt/sunset-portfolio --source .

# Option 2: Using git with personal access token
git push -u https://YOUR_TOKEN@github.com/ib3rt/sunset-portfolio.git main

# Option 3: Manual - Clone locally and copy files
gh repo clone ib3rt/sunset-portfolio
cp -r /home/ubuntu/.openclaw/workspace/projects/sunset-portfolio/* sunset-portfolio/
cd sunset-portfolio
git add -A && git commit -m "Initial commit"
git push
```

## After Push - Deploy Options:

### Netlify (Recommended)
1. Go to https://app.netlify.com/drop
2. Drag & drop the `sunset-portfolio` folder
3. Done! 🎉

### Vercel
1. Go to https://vercel.com/new
2. Import from GitHub
3. Auto-deploy enabled!

### Custom Domain (art.b3rt.dev)
After deployment, add custom domain in your hosting dashboard.
