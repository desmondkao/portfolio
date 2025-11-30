# Portfolio Website

A modern, minimalist portfolio website built with Astro and Tailwind CSS. Based on the [devportfolio](https://github.com/RyanFitzgerald/devportfolio) template.

## Features

- **Modern Tech Stack**: Built with Astro static site generator and Tailwind CSS v4
- **Minimalist Design**: Clean, professional design with smooth animations
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **TypeScript Configuration**: Type-safe customization through a single config file
- **Sections**:
  - Hero section with animated introduction
  - About me with skills showcase
  - Projects portfolio with links
  - Work experience timeline
  - Education history
  - Social media links

## Quick Start

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:4321` to see your site.

### Build for Production

```bash
npm run build
```

The built site will be in the `dist/` directory.

## Customization

All customization is done through a single file: **`src/config.ts`**

Edit this file to update:
- Personal information (name, title, description)
- Accent color (hex value for theming)
- Social media links (email, LinkedIn, Twitter, GitHub)
- About me text
- Skills array
- Projects (with name, description, link, and technologies)
- Work experience (company, title, date range, bullet points)
- Education (school, degree, date range, achievements)

**Tip**: Sections will automatically hide if you leave them empty in the config.

## GitHub Pages Deployment

This project includes a GitHub Actions workflow that automatically builds and deploys to GitHub Pages when you push to the `main` branch.

### Setup Steps:

1. Push this repository to GitHub
2. Go to your repository **Settings**
3. Navigate to **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. Push to the `main` branch and the workflow will automatically deploy your site

Your site will be live at `https://[your-username].github.io/portfolio/`

## Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages deployment workflow
├── public/
│   └── favicon.svg             # Site favicon
├── src/
│   ├── components/             # Astro components
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Projects.astro
│   │   ├── Experience.astro
│   │   ├── Education.astro
│   │   └── Footer.astro
│   ├── pages/
│   │   └── index.astro         # Main page
│   ├── styles/
│   │   └── global.css          # Global styles
│   └── config.ts               # Site configuration (EDIT THIS!)
├── astro.config.mjs            # Astro configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies and scripts
```

## Technologies Used

- **Astro** - Static site generator
- **Tailwind CSS v4** - Utility-first CSS framework
- **TypeScript** - Type-safe configuration
- **IBM Plex Mono** - Google Fonts typeface

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run astro` - Run Astro CLI commands

## License

Based on [devportfolio](https://github.com/RyanFitzgerald/devportfolio) by Ryan Fitzgerald (MIT License)

