<div align="center">

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Quicksand&weight=700&size=36&duration=3000&pause=1000&color=a47af0&center=true&vCenter=true&width=600&height=70&lines=Anahí+Lozano;Full+Stack+Developer;Web+%26+Mobile+Engineer)](https://git.io/typing-svg)

  <h2>🌟 Full-Stack Creative Portfolio 🌟</h2>
https://porfolio-six-smoky.vercel.app/

  
  <p>
    <b>A modern, responsive, and highly interactive developer portfolio featuring a 3D animated voxel cat mascot!</b>
  </p>
  
  <p>
    <a href="#about-the-project">About The Project</a> •
    <a href="#tech-stack">Tech Stack</a> •
    <a href="#the-mascot-threejs">The Mascot (Three.js)</a> •
    <a href="#features">Features</a> •
    <a href="#getting-started">Getting Started</a>
  </p>

  <br />

  ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
  ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
  ![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
  ![Three.js](https://img.shields.io/badge/Threejs-black?style=for-the-badge&logo=three.js&logoColor=white)

</div>

<br />

## 🌸 About The Project

This is my personal developer portfolio heavily inspired by a mix of modern UI aesthetics, "shoujo/manhwa" pastel tones, glassmorphism, and a highly polished pixel-perfect layout. It serves not only to showcase my skills as a Full Stack Developer (Angular, React, Node.js, Kotlin) but also my acute attention to detail in UX/UI and motion design.

**The design pivots around:**
- 🎨 **Aesthetics & Branding:** Blending robust engineering with a cozy, creative, and aesthetically pleasing interface.
- 📱 **Fully Responsive:** Smooth scaling down to mobile devices maintaining the "app-like" glass panels.
- 🌗 **Dark / Light Mode:** Fully supported theme switching from a bright pink/pastel tone to a deep, elegant dark lilac palette.

---

## 🛠 Tech Stack

The architecture focuses on high performance, type-safety, and incredible visual fidelity.

- **Framework:** [React 19](https://react.dev/) powered by [Vite](https://vitejs.dev/) for lightning-fast HMR and building.
- **Language:** Fully written in [TypeScript](https://www.typescriptlang.org/) for solid type guarantees.
- **Styling:** Custom Vanilla CSS + [Tailwind CSS v4](https://tailwindcss.com/) logic driving the complex gradients, borders, and shadows.
- **Animations:** [Framer Motion](https://www.framer.com/motion/) for buttery-smooth scroll triggers and element staggering.
- **3D Graphics:** [Three.js](https://threejs.org/) via [`@react-three/fiber`](https://docs.pmnd.rs/react-three-fiber/) and [`@react-three/drei`](https://github.com/pmndrs/drei) for the interactive mascot.

---

## 🐈 The Mascot (Three.js)

One of the standout features of this portfolio is the **Interactive Voxel Cat Mascot** residing in the bottom-right corner of the application.

It's entirely procedurally generated using standard `boxGeometry` blocks within React Three Fiber instead of loading a heavyweight `.gltf` asset!

**Highlights of the 3D Voxel Cat:**
- **Custom Idle Animation:** It "breathes" using Math curves bounded to the `useFrame` clock loop and moves its tail slowly.
- **Hover Interactivity:** Hovering over the cat triggers a completely different state: it looks up at your cursor, its tail wags faster, its eyes open entirely, and adorable floating 3D hearts emerge!
- **Click Actions:** Clicking on it triggers a highly satisfying and subtle UI *pop* sound.
- **Optimized Rendering:** Rendered efficiently over an `OrthographicCamera` and projected with `ContactShadows` onto the DOM.

---

## ✨ Features

- **Internationalization (i18n):** Native real-time toggle between English (`en`) and Spanish (`es`) with a custom animated pill switch.
- **Adaptive Theming:** Deep theme customization switching between light pastel pinks and deep dark space/lilac tones with dynamic generated background SVG paws and radials.
- **Performance Optimized:** Rapid animation transitions and heavily chunked builds.
- **Glassmorphism UI:** Sophisticated complex box shadows (`--shadow-magazine`, `--pixel-shadow`) making the layered components feel tactile and deep.

---

## 🚀 Getting Started

If you want to run this project locally to explore the code or fork it, you can easily get it up and running:

### Prerequisites
Make sure you have Node installed (v18 or higher recommended).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/alucarduwu/portfolio2.git
   ```

2. **Navigate into the directory:**
   ```bash
   cd portfolio2
   ```

3. **Install the dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Visit `http://localhost:5173/` in your browser!**

---

<div align="center">
  <p>Built with 💜 by <b>Anahí Lozano</b></p>
  <a href="https://github.com/alucarduwu">GitHub</a> • <a href="mailto:your-email@example.com">Contact</a>
</div>
