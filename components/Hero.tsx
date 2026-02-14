'use client';

import { Download, ArrowDown, MapPin, Mail } from 'lucide-react';

export default function Hero() {
  const handleScrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="animate-fade-in">
            {/* Available for Opportunities Badge */}
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
                Available for Opportunities
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Aniruddha{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">
                Sonawane
              </span>
            </h1>

            {/* Designation */}
            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              Associate Software Developer at <span className="text-foreground font-medium">Lentra AI</span>
            </p>

            {/* Location & Email */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-primary" />
                <span>Pune, Maharashtra, INDIA</span>
              </div>
              <span className="hidden sm:inline text-border">|</span>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-primary" />
                <a 
                  href="mailto:aniruddhasonawane6666@gmail.com" 
                  className="hover:text-primary transition-colors"
                >
                  aniruddhasonawane6666@gmail.com
                </a>
              </div>
            </div>

            <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6">
              Full Stack Developer | Java 21 | Spring Boot | Microservices | FinTech Systems
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Backend-focused developer specializing in building scalable fintech solutions. 
              Experienced in designing high-performance microservices, Kafka-based event streaming, 
              and modern lending platforms that process millions in daily transactions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
            <button
              onClick={handleScrollToProjects}
              className="px-8 py-3 bg-primary text-background font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              View Projects
              <ArrowDown size={18} />
            </button>
            <a
              href="/resume.pdf"
              download
              className="px-8 py-3 border border-border text-foreground font-semibold rounded-lg hover:bg-secondary transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              Download Resume
              <Download size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-muted-foreground" size={24} />
      </div>
    </section>
  );
}
