# Aniruddha Sonawane - Portfolio

A modern, professional developer portfolio built with Next.js 14, React, TypeScript, and Tailwind CSS.

## Features

- **Dark Theme**: Premium black/charcoal aesthetic with emerald accent colors
- **Smooth Animations**: Scroll-triggered reveal animations and hover effects
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Single Page Layout**: Smooth scroll navigation between sections
- **SEO Optimized**: Proper metadata and semantic HTML structure

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx             # Main page composing all sections
│   └── globals.css          # Global styles and Tailwind imports
├── components/
│   ├── Navbar.tsx           # Fixed navigation with smooth scroll
│   ├── Hero.tsx             # Hero section with CTA buttons
│   ├── About.tsx            # Professional summary
│   ├── TechStack.tsx        # Technology cards
│   ├── Projects.tsx         # Project showcase
│   ├── Experience.tsx       # Timeline layout
│   ├── Contact.tsx          # Contact form and social links
│   └── Footer.tsx           # Footer with scroll to top
├── hooks/
│   └── useScrollAnimation.ts # Custom hook for scroll animations
├── types/
│   └── index.ts             # TypeScript interfaces
├── public/
│   └── resume.pdf           # Add your resume here
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

## Deployment

This project is optimized for deployment on Vercel:

1. Push your code to a Git repository
2. Import the project on [Vercel](https://vercel.com)
3. Deploy with default settings

## Customization

### Personal Information

Update the following files with your information:

- `app/layout.tsx`: SEO metadata
- `components/Hero.tsx`: Name, title, description
- `components/About.tsx`: Professional summary
- `components/Projects.tsx`: Your projects
- `components/Experience.tsx`: Work experience
- `components/Contact.tsx`: Contact information

### Styling

- Colors: Edit `tailwind.config.ts`
- Global styles: Edit `app/globals.css`

### Resume

Add your resume PDF to the `public/` folder and update the download link in `Hero.tsx`.

## License

MIT License - feel free to use this template for your own portfolio!