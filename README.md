# Shreya Hegde — Portfolio

A modern, dark-themed portfolio built with **React** and **Tailwind CSS**.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm start

# 3. Open http://localhost:3000
```

## 📦 Build for Production

```bash
npm run build
```

The `build/` folder is ready to deploy to GitHub Pages, Netlify, or Vercel.

## 🌐 Deploy to GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "predeploy": "npm run build",
# "deploy": "gh-pages -d build"
# Also add: "homepage": "https://<your-username>.github.io/portfolio"

npm run deploy
```

## 🗂 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx       # Fixed nav with scroll effect
│   ├── Hero.jsx         # Hero with stats grid
│   ├── Experience.jsx   # Timeline of jobs
│   ├── Projects.jsx     # Project cards
│   ├── Skills.jsx       # Tech stack pills
│   ├── Contact.jsx      # Contact CTA
│   └── Footer.jsx       # Footer
├── App.jsx              # Root component
├── index.js             # React entry point
└── index.css            # Global styles + Tailwind
```

## 🎨 Customisation

- **Colors** — edit `tailwind.config.js` or the hex values in each component
- **Content** — update the data arrays at the top of each component
- **Fonts** — loaded from Google Fonts in `public/index.html`
- **Add a photo** — drop your image in `src/assets/` and import it in `Hero.jsx`
