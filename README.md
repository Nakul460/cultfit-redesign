# cult.fit — Unofficial Concept Redesign

> **Unofficial concept redesign created for educational and portfolio purposes. Not affiliated with or endorsed by cult.fit.**

A full-page redesign of [cult.fit](https://www.cult.fit) built with React, Vite, and Aceternity UI components. This project reimagines the cult.fit experience with modern UI patterns, fluid animations, and accessible design.

**Live Demo:** [cultfit-plum.vercel.app](https://cultfit-plum.vercel.app)

---

## Tech Stack

- **React 19** + **Vite 8**
- **Tailwind CSS v4** via `@tailwindcss/vite`
- **Aceternity UI** — Apple Cards Carousel, CardSpotlight, Vortex, CanvasRevealEffect, MagneticButton, MovingBorderButton
- **Motion** — Framer Motion animations
- **tsparticles** — Background particles
- **Bootstrap Icons** — Icon system
- **Geist** — Typography

## Sections

| Section | Description |
|---|---|
| **Concept Banner** | Top strip identifying this as a portfolio project |
| **Navbar** | Sticky nav with scroll-based shrink, mobile menu, login popup |
| **Hero** | Animated background with moving-border CTA |
| **Workouts** | Apple Cards carousel with workout categories |
| **Why cult.fit** | Features grid with Canvas Reveal Effect |
| **Stats & Reasons** | Vortex background + 3 CardSpotlight cards |
| **Membership Plans** | Spotlight cards with Elite as primary |
| **Shop** | Infinite CSS marquee with product cards |
| **Footer** | Copyright, attribution, disclaimer |

## Getting Started

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Accessibility

- Full keyboard navigation across all interactive elements
- Visible focus rings on every focusable control
- ARIA labels on icon-only buttons and interactive components
- `prefers-reduced-motion` disables all animations (Globe, sparkles, video autoplay, marquee, vortex)
- Semantic HTML structure throughout
- Lazy loading on below-fold images to prevent CLS

## Project Structure

```
src/
├── App.jsx                              # Main layout — composes all sections
├── components/
│   ├── Navbar.jsx                       # Sticky nav + concept banner
│   ├── Hero.jsx                         # Hero section
│   ├── apple-cards-carousel-demo.jsx    # Workout carousel
│   ├── features-section-demo-3.jsx      # Why cult.fit features grid
│   ├── WhySection.jsx                   # Stats + reason cards
│   ├── CultpassPlans.jsx                # Membership pricing cards
│   ├── WellnessHub.jsx                  # Shop product marquee
│   ├── Footer.jsx                       # Footer with disclaimer
│   ├── LoginPopup.jsx                   # Phone + social login modal
│   └── ui/                              # Reusable Aceternity components
│       ├── apple-cards-carousel.jsx
│       ├── card-spotlight.jsx
│       ├── canvas-reveal-effect.jsx
│       ├── vortex.jsx
│       ├── magnetic-button.jsx
│       ├── moving-border-button.jsx
│       ├── resizable-navbar.jsx
│       ├── flip-words.jsx
│       ├── hover-border-gradient.jsx
│       ├── background-gradient-animation.jsx
│       └── lamp.jsx
├── hooks/
│   └── use-outside-click.jsx
├── lib/
│   └── utils.js
├── index.css                            # Tailwind theme, marquee, reduced-motion
└── main.jsx                             # Entry point
```

## Disclaimer

This is a **personal portfolio project**. All cult.fit branding, trademarks, and product names belong to their respective owners. Product images use freely licensed photos from Unsplash. No proprietary assets or CDN resources are used.

## License

This project is for educational and portfolio use only. Not for commercial distribution.
