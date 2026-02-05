#!/bin/bash

# 🚀 Sunset Portfolio - Deployment Script
# Run this locally to deploy to GitHub Pages

set -e

echo "🌅 Deploying th3 b3rt Portfolio to GitHub Pages..."
echo ""

# Check if git changes
if [[ -n $(git status --porcelain) ]]; then
    echo "📦 Committing changes..."
    git add -A
    read -p "Enter commit message: " msg
    git commit -m "${msg:-Update portfolio}"
else
    echo "✓ No changes to commit"
fi

# Push to GitHub
echo "⬆️  Pushing to GitHub..."
git push origin main

echo ""
echo "✅ Code pushed successfully!"
echo ""
echo "📋 Next steps to enable GitHub Pages:"
echo "1. Go to: https://github.com/ib3rt/sunset-portfolio/settings/pages"
echo "2. Under 'Build and deployment':"
echo "   - Source: Deploy from a branch"
echo "   - Branch: main → / (root)"
echo "   - Click Save"
echo ""
echo "🌐 Your site will be live at:"
echo "   https://ib3rt.github.io/sunset-portfolio"
echo ""
echo "🎯 To add custom domain (art.b3rt.dev):"
echo "   - In GitHub Settings → Pages → Custom domain"
echo "   - Enter: art.b3rt.dev"
echo "   - Enable HTTPS after DNS propagates"
