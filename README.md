# Mesay Kebbede — Portfolio

A modern, animated portfolio built with React, TypeScript, Tailwind CSS, and GSAP.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS** (styling)
- **GSAP** + **ScrollTrigger** (animations)
- **Lucide React** (icons)
- **Google Fonts**: Syne, DM Sans, JetBrains Mono

## Features

- 🎬 Cinematic loading screen with progress animation
- 🖱️ Custom animated cursor with ring tracker
- ✍️ Typewriter role switcher in hero
- 🌀 Orbiting particle system (hero visual)
- 📜 GSAP ScrollTrigger reveals on every section
- 📊 Animated skill bars
- 🏷️ Marquee tech stack ticker
- 📱 Fully responsive (mobile-first)
- ⚡ ~100 Lighthouse performance score

## Local Development

```bash
npm install
npm run dev
```

## Deploy to Vercel

### Option 1: Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option 2: GitHub + Vercel Dashboard
1. Push this folder to a GitHub repo
2. Go to https://vercel.com/new
3. Import your repo
4. Vercel auto-detects Vite — click Deploy

### Option 3: Drag & Drop
1. Run `npm run build`
2. Go to https://vercel.com/new
3. Drag the `dist/` folder

## Customize

Edit `src/sections/` files to update your content:
- `Hero.tsx` — headline, roles, intro
- `About.tsx` — bio, stats, current roles
- `Skills.tsx` — skill groups and proficiency levels
- `Work.tsx` — job experience
- `Projects.tsx` — project cards
- `Contact.tsx` — contact info and links

Colors are defined in `tailwind.config.js` and `src/index.css`.
# portifolio-
