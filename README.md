# Aniruddha Sonawane - Portfolio

A modern, professional developer portfolio built with Next.js 14, React, TypeScript, and Tailwind CSS.

## 🌐 Live Demo

**Website URL:** [https://its-aniruddha.vercel.app/](https://its-aniruddha.vercel.app/)

[![Website](https://img.shields.io/badge/🌐%20Visit%20Live%20Website-success?style=for-the-badge)](https://its-aniruddha.vercel.app/)

## Features

- 🌐 **Live Website**: [https://its-aniruddha.vercel.app/](https://its-aniruddha.vercel.app/)
- **🎨 3D Animations**: Advanced Framer Motion animations with mouse tracking
- **📊 Animated Skills**: Progress bars that fill up on scroll
- **💬 Testimonials Carousel**: Interactive recommendation slider
- **🖱️ Custom Cursor**: Animated cursor that follows mouse with hover effects
- **📈 Scroll Progress**: Visual progress bar at top of page
- **✨ Particle System**: Interactive constellation particles with mouse repulsion
- **⏳ Page Loader**: Professional loading screen with progress animation
- **🌓 Dark/Light Theme**: Toggle between dark and light modes with smooth transitions
- **📧 Email Contact Form**: Functional contact form using EmailJS
- **🎯 Project Modals**: Click projects to see full details in modal
- **⌨️ Typewriter Effect**: Animated text typing in hero section
- **📱 Fully Responsive**: Optimized for mobile, tablet, and desktop
- **⚡ Next.js 14**: App Router with server-side rendering
- **🔒 TypeScript**: Fully typed for better development experience

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Email Service**: EmailJS
- **Deployment**: Vercel-ready

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx              # Root layout with SEO metadata & ThemeProvider
│   ├── page.tsx                # Main page composing all sections
│   └── globals.css             # Global styles, Tailwind imports & theme variables
├── components/
│   ├── Navbar.tsx              # Fixed navigation with theme toggle & smooth scroll
│   ├── Hero.tsx                # Hero section with 3D animations & typing effect
│   ├── About.tsx               # Professional summary with animated counters
│   ├── Skills.tsx              # Skills with animated progress bars
│   ├── TechStack.tsx           # Technology cards grid
│   ├── Experience.tsx          # Work experience timeline
│   ├── Projects.tsx            # Project showcase with modal details
│   ├── Certifications.tsx      # Certification cards
│   ├── Education.tsx           # Education timeline
│   ├── Testimonials.tsx        # Testimonials carousel
│   ├── Contact.tsx             # Contact form with EmailJS & social links
│   ├── Footer.tsx              # Footer with scroll to top
│   ├── ThemeProvider.tsx       # Theme context provider
│   ├── CustomCursor.tsx        # Custom animated cursor
│   ├── PageLoader.tsx          # Animated page loading screen
│   ├── ScrollProgress.tsx      # Top scroll progress bar
│   ├── ConstellationBackground.tsx  # Interactive particle system
│   ├── AdvancedBackground.tsx  # 3D mouse-tracking background
│   └── TypewriterText.tsx      # Reusable typing animation
├── data/
│   ├── certifications.ts       # Certification data
│   └── education.ts            # Education data
├── hooks/
│   └── useScrollAnimation.ts   # Custom hook for scroll animations
├── types/
│   └── index.ts                # TypeScript interfaces
├── public/
│   └── resume.pdf              # Add your resume here
├── .env.local                  # Environment variables (EmailJS config)
├── .env.local.example          # Example environment variables
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

3. Configure environment variables:
```bash
cp .env.local.example .env.local
# Edit .env.local with your EmailJS credentials
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

## Configuration

### EmailJS Setup (Contact Form)

To enable the contact form to send emails:

1. Create a free account at [EmailJS](https://www.emailjs.com)
2. Add an Email Service (Gmail, Outlook, etc.)
3. Create an Email Template with variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - Message content
4. Get your credentials from the dashboard:
   - **Service ID** (e.g., `service_abc123`)
   - **Template ID** (e.g., `template_xyz789`)
   - **Public Key** (e.g., `user_abc123xyz`)
5. Update `.env.local`:
```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### Theme Configuration

The project supports both dark and light themes:

- **Default Theme**: Dark mode
- **Theme Toggle**: Located in the top-right corner of the navbar
- **Persistence**: Theme preference is saved to localStorage
- **Transitions**: Smooth 300ms color transitions between themes

Theme colors are defined using CSS variables in `app/globals.css`:
- `:root` - Dark theme (default)
- `.light` - Light theme

## Customization

### Personal Information

Update the following files with your information:

- `app/layout.tsx`: SEO metadata, page title
- `components/Hero.tsx`: Name, designation, location, email, introduction
- `components/About.tsx`: Professional summary, stats
- `components/Experience.tsx`: Work experience timeline
- `components/Projects.tsx`: Project cards with descriptions and links
- `components/Certifications.tsx`: Update `/data/certifications.ts`
- `components/Education.tsx`: Update `/data/education.ts`
- `components/Contact.tsx`: Contact information, social links

### Styling

- **Colors**: Edit `tailwind.config.ts` (CSS variables defined in `globals.css`)
- **Global Styles**: Edit `app/globals.css`
- **Animations**: Custom keyframes in `tailwind.config.ts`

### Resume

Add your resume PDF to the `public/` folder and ensure the filename matches the link in `Hero.tsx` and `Footer.tsx`.

## Sections Overview

1. **Page Loader**: Animated loading screen with progress bar and tech stack preview
2. **Custom Cursor**: Interactive cursor with hover detection (desktop only)
3. **Scroll Progress**: Visual progress indicator at top of viewport
4. **Constellation Background**: Interactive particle system across entire page
5. **Navbar**: Fixed navigation with theme toggle and smooth scroll
6. **Hero**: 3D animated background, typing effect, gradient name animation
7. **About**: Professional summary with animated stat counters
8. **Skills**: Animated progress bars showing expertise levels
9. **Tech Stack**: Technology cards organized by category
10. **Experience**: Work history timeline with hover effects
11. **Projects**: Featured projects with modal detail views
12. **Certifications**: Professional certifications showcase
13. **Education**: Academic background timeline
14. **Testimonials**: Carousel of recommendations with star ratings
15. **Contact**: Functional EmailJS contact form and social links
16. **Footer**: Quick links, scroll-to-top, and copyright

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks

## Deployment

This project is optimized for deployment on Vercel:

1. Push your code to a Git repository (GitHub, GitLab, etc.)
2. Import the project on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard (EmailJS credentials)
4. Deploy with default settings

**Note**: Don't forget to add your EmailJS environment variables in the Vercel dashboard under Project Settings → Environment Variables.

## Environment Variables

Create a `.env.local` file in the root directory:

```bash
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Important**: Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser. Never put sensitive/private keys here.

## License

MIT License - feel free to use this template for your own portfolio!

## Author

**Aniruddha Sonawane**
- Email: aniruddhasonawane6666@gmail.com
- LinkedIn: [Aniruddha Sonawane](https://in.linkedin.com/in/aniruddha-sonawane-13160b254)
- GitHub: [Aniruddha-123-anii](https://github.com/Aniruddha-123-anii)
