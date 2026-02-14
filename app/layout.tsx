import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '../components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aniruddha Sonawane | Full Stack Developer',
  description: 'Full Stack Developer specializing in Java 21, Spring Boot, Microservices, Kafka-based systems, and fintech lending platforms.',
  keywords: ['Full Stack Developer', 'Java', 'Spring Boot', 'Microservices', 'Kafka', 'FinTech', 'React', 'Next.js'],
  authors: [{ name: 'Aniruddha Sonawane' }],
  openGraph: {
    title: 'Aniruddha Sonawane | Full Stack Developer',
    description: 'Backend-focused Full Stack Developer with expertise in Java 21, Spring Boot, Microservices, and fintech systems.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-background text-foreground`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}