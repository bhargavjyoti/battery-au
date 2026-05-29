# Battery Australia 🔋

A sleek, premium, and mobile-optimized Next.js web application designed to connect Brisbane and Gold Coast motorists with rapid, 24/7 emergency roadside battery rescue services.

This project delivers state-of-the-art visual excellence, micro-animations, dynamic sitemaps, and buttery-smooth inertial scrolling physics.

---

## 🌟 Premium Features

- **Redesigned Hero Section**: Balanced 6-and-6 grid layout dominated by a high-resolution vehicle fleet graphic enclosed in glowing linear HSL gradient overlays and interactive Dispatch/SLA floating badges.
- **Lenis Smooth Scrolling**: Powered by the modern `lenis` scrolling engine. Scroll physics are tuned responsively:
  - **Desktop**: Deep, luxurious inertia glides (`lerp: 0.07`, `duration: 1.4`).
  - **Mobile viewports**: snappier, less intense scrolling (`lerp: 0.12`, `duration: 0.8`) allowing organic mobile touch-swipes to feel natural.
- **Dedicated Team Section**: Clean grid spotlighting team membersAndy (Customer Relations Officer), Sam (Senior Battery Tech), and Ranjit (Gold Coast Battery Tech) paired with specialized high-contrast Lucide icons.
- **Interactive Contact Hub (`/contact-us`)**: Action cards with instant call (`tel:`) and email (`mailto:`) pings, operational hours timeline, and responsive interactive Google Maps embeds for Brisbane and Gold Coast depot warehouses.
- **Dynamic Categories Grid**: Direct replacement paths for Car, Truck, Marine, Motorcycle, Golf Cart, and NBN batteries featuring glowing outlines and hover elevations.
- **Advanced SEO Mapping**:
  - Built-in dynamic sitemap generation (`/sitemap.xml`) indexing all services and service-area directories automatically.
  - Custom dynamic search engine crawler rules (`/robots.txt`).
  - Custom high-resolution multi-device app icons and Apple Touch Icons compiled natively (`/icon.png`).
  - Strict layout canonical links, OpenGraph properties, and Twitter cards configured on Next.js Server Components.

---

## 🛠️ Technology Stack

- **Core Framework**: [Next.js](https://nextjs.org/) (App Router & Static Optimizations)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (Spring physics, entrance glides)
- **Scroll Kinetics**: [Lenis](https://lenis.darkroom.engineering/) (Inertial scroll physics)
- **Icon Library**: [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started

### 1. Install Dependencies
Restore all dependencies (including Tailwind, Framer Motion, and Lenis):
```bash
npm install
```

### 2. Run the Development Server
Launch the local Turbopack hot-reloading dev server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) on your desktop or mobile browser.

### 3. Production Build Compile
Verify full TypeScript type checks, Next.js page data collections, and static exports generation:
```bash
npm run build
```
The static pages export yields optimized, pre-rendered static files (`○ Static prerendered`) under the `.next/` directory.

### 4. Start Production Server
Launch the compiled production build locally:
```bash
npm start
```
