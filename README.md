# Mina — Portfolio

A 3D cyber-themed React portfolio. Dark neon aesthetic with animated 3D orb, custom cursor, scroll fade-ins, and a fully modular component structure.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open http://localhost:5173
```

## Build for Production

```bash
npm run build
# Output goes to /dist — drag that folder to Netlify!
```

## Project Structure

```
src/
├── components/
│   ├── Cursor.jsx       # Custom animated cursor
│   ├── Navbar.jsx       # Fixed top nav
│   ├── Hero.jsx         # Hero section + stats
│   ├── Orb.jsx          # 3D rotating orb animation
│   ├── Skills.jsx       # Skills cards
│   ├── Projects.jsx     # Project cards with SVG thumbnails
│   ├── About.jsx        # About + terminal card
│   └── Contact.jsx      # Contact links
├── hooks/
│   └── useScrollFade.js # IntersectionObserver scroll animation
├── App.jsx              # Root component
├── index.css            # Global styles + design tokens
└── main.jsx             # React entry point
```

## Customization

### Your Info
- **Contact links** → `src/components/Contact.jsx` — update email, GitHub, LinkedIn URLs
- **Stats** → `src/components/Hero.jsx` — update numbers in the `STATS` array
- **Skills** → `src/components/Skills.jsx` — edit the `SKILLS` array
- **Projects** → `src/components/Projects.jsx` — edit the `PROJECTS` array

### Adding a New Project
In `Projects.jsx`, add an entry to the `PROJECTS` array:
```js
{
  id: '004',
  title: 'My New Project',
  desc: 'What it does.',
  stack: ['React', 'Supabase'],
  url: 'https://myproject.netlify.app',
  visual: 'coming',   // use 'coming' until you add a custom SVG thumb
}
```

### Colors
All colors are CSS variables in `src/index.css`:
```css
--neon:  #00ff88   /* primary green neon */
--neon2: #00ccff   /* cyan neon */
--neon3: #ff00aa   /* pink neon */
```

## Deploy to Netlify
1. Run `npm run build`
2. Drag the `dist/` folder to [netlify.com/drop](https://netlify.com/drop)
3. Done!
