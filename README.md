# Gaurav Singh — Portfolio

React 19 + Vite + Tailwind 4 portfolio, organised so each thing is defined **once**.

```bash
npm install
npm run dev      # local dev
npm run build    # production build -> dist/
```

## Structure

```
src/
├── components/
│   ├── common/      Reusable building blocks (used by every section)
│   │   ├── Button.jsx (+ ButtonGroup)   SectionTitle.jsx   Card.jsx
│   │   ├── TagList.jsx   SocialLinks.jsx   PreLoader.jsx   ScrollToTop.jsx
│   ├── layout/      Layout.jsx (page shell) · Navbar.jsx · Footer.jsx
│   └── sections/    Hero · About · TechStack · Experience · Projects · Contact
│                    (each folder = component + its own .css)
├── pages/           Home.jsx · ProjectDetails.jsx · NotFound.jsx
├── data/            All text/content (no JSX markup)
├── hooks/           useBodyScrollLock · useScrollVisibility · useScrollToTopOnMount
├── utils/           cx · links · experience helpers
└── styles/          variables.css (tokens) · globals.css · animations.css
```

## "I want to change…" cheat sheet

| Change | Edit |
| --- | --- |
| A section **title / subtitle** | `src/data/sections.js` |
| **Heading look** (all sections at once) | `components/common/SectionTitle.css` |
| **Button look** (hero, project card, contact, details page) | `components/common/Button.css` |
| **Card look** (about, tech, experience, project, contact) | `components/common/Card.css` |
| **Tech pill look** | `components/common/TagList.css` |
| Colors, radius, shadows, fonts, transition speed, container width | `src/styles/variables.css` |
| Email / GitHub / LinkedIn | `src/data/socialLinks.js` |
| Hero + About text, stats | `src/data/profile.js` |
| Skills · Experience · Projects | `data/skills.js` · `data/experience.js` · `data/projects.js` |
| Resume PDF | replace `public/assets/resume/…pdf` (path set in `data/profile.js`) |
| Add a nav link | `navLinks` in `src/data/sections.js` |
| Show the Contact section | uncomment `<Contact />` in `src/pages/Home.jsx` |

Section-specific layout lives in that section's own `.css` file; shared styling lives in `common/`.
Breakpoints used everywhere: `1280px` (desktop) · `1100px` · `768px` (tablet) · `480px` (mobile).
