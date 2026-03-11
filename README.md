# Portfolio Website

This is a personal portfolio website built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS**. It showcases my projects, blogs, and a brief about me.

## Features

- **React 19** with React Router v7 for client‑side routing.
- **Vite** for fast development and optimized builds.
- **Tailwind CSS** (v4) for utility‑first styling.
- **FontSource Inter** for clean typography.
- **Lucide React** icons.
- **Markdown** rendering for blog posts.
- **Animations** using `motion`.
- **Responsive** layout with a minimal design.

## Project Structure

```
src/
├─ components/      # Reusable UI components (Layout, Nav, etc.)
├─ pages/           # Page components (Home, ProjectDetails, Blogs, …)
├─ App.tsx          # Root component with routing
├─ main.tsx         # Application entry point
├─ index.css        # Tailwind base styles
└─ ...
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

## Scripts

- `dev` – Starts Vite in development mode with hot‑module replacement.
- `build` – Generates an optimized production build.
- `preview` – Serves the production build locally.
- `lint` – Runs ESLint across the codebase.

## Linting & Formatting

ESLint is configured with the recommended rules for React and hooks. Run:

```bash
npm run lint
```

## Contributing

Feel free to open issues or submit pull requests if you find bugs or have suggestions.

## License

This project is private and intended for personal use.
