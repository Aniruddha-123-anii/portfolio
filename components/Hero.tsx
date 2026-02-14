'use client';

import { motion } from 'framer-motion';
import { Download, ArrowDown, MapPin, Mail } from 'lucide-react';
import TypewriterText from './TypewriterText';
import AnimatedBackground from './AnimatedBackground';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number],
    },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

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
      <AnimatedBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Available for Opportunities Badge */}
          <motion.div className="mb-6" variants={badgeVariants}>
            <motion.span 
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(16,185,129,0.5)" }}
              transition={{ duration: 0.3 }}
            >
              <motion.span 
                className="w-2 h-2 bg-primary rounded-full mr-2"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Available for Opportunities
            </motion.span>
          </motion.div>

          {/* Name with gradient animation */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6"
            variants={itemVariants}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Aniruddha{' '}
            </motion.span>
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-primary bg-[length:200%_auto] animate-gradient"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Sonawane
            </motion.span>
          </motion.h1>

          {/* Designation with typing effect */}
          <motion.div variants={itemVariants}>
            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              <TypewriterText 
                text="Associate Software Developer at Lentra AI" 
                delay={1000}
                speed={40}
              />
            </p>
          </motion.div>

          {/* Location & Email */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 text-muted-foreground mb-8"
            variants={itemVariants}
          >
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05, color: "var(--primary)" }}
              transition={{ duration: 0.2 }}
            >
              <MapPin size={18} className="text-primary" />
              <span>Pune, Maharashtra, INDIA</span>
            </motion.div>
            <span className="hidden sm:inline text-border">|</span>
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Mail size={18} className="text-primary" />
              <a 
                href="mailto:aniruddhasonawane6666@gmail.com" 
                className="hover:text-primary transition-colors"
              >
                aniruddhasonawane6666@gmail.com
              </a>
            </motion.div>
          </motion.div>

          {/* Tech stack tags */}
          <motion.div 
            className="flex flex-wrap justify-center gap-2 mb-8"
            variants={itemVariants}
          >
            {['Full Stack Developer', 'Java 21', 'Spring Boot', 'Microservices', 'FinTech'].map((tag, index) => (
              <motion.span
                key={tag}
                className="px-3 py-1 text-sm font-medium bg-secondary/50 text-muted-foreground rounded-full border border-border/50"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 + index * 0.1, duration: 0.4 }}
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: "rgba(16, 185, 129, 0.1)",
                  borderColor: "rgba(16, 185, 129, 0.3)"
                }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p 
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            variants={itemVariants}
          >
            Backend-focused developer specializing in building scalable fintech solutions. 
            Experienced in designing high-performance microservices, Kafka-based event streaming, 
            and modern lending platforms that process millions in daily transactions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={itemVariants}
          >
            <motion.button
              onClick={handleScrollToProjects}
              className="px-8 py-3 bg-primary text-background font-semibold rounded-lg flex items-center gap-2 shadow-lg shadow-primary/25"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)" 
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              View Projects
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowDown size={18} />
              </motion.div>
            </motion.button>
            
            <motion.a
              href="/resume.pdf"
              download
              className="px-8 py-3 border border-border text-foreground font-semibold rounded-lg flex items-center gap-2 backdrop-blur-sm"
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderColor: "rgba(16, 185, 129, 0.5)"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              Download Resume
              <Download size={18} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="text-muted-foreground" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
