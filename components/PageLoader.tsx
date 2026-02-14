'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2 } from 'lucide-react';

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Enhanced Logo */}
          <motion.div
            className="mb-8"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Logo Container with Animated Border */}
            <div className="relative">
              {/* Animated rotating border */}
              <motion.div
                className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary via-emerald-400 to-primary opacity-75 blur-sm"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Main logo box */}
              <motion.div 
                className="relative w-28 h-28 rounded-2xl bg-background flex flex-col items-center justify-center border border-primary/30 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Inner gradient glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-emerald-500/20" />
                
                {/* Corner decorations */}
                <div className="absolute top-2 left-2 w-2 h-2 border-l-2 border-t-2 border-primary/50" />
                <div className="absolute top-2 right-2 w-2 h-2 border-r-2 border-t-2 border-primary/50" />
                <div className="absolute bottom-2 left-2 w-2 h-2 border-l-2 border-b-2 border-primary/50" />
                <div className="absolute bottom-2 right-2 w-2 h-2 border-r-2 border-b-2 border-primary/50" />
                
                {/* Code icon */}
                <motion.div
                  initial={{ y: -5, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  <Code2 className="w-6 h-6 text-primary mb-1" />
                </motion.div>
                
                {/* AS Text */}
                <motion.span 
                  className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-emerald-400 tracking-wider"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
                >
                  AS
                </motion.span>
                
                {/* Subtitle */}
                <motion.span 
                  className="text-[10px] text-muted-foreground mt-1 tracking-widest uppercase"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Portfolio
                </motion.span>
                
                {/* Pulse effect */}
                <motion.div
                  className="absolute inset-0 border-2 border-primary rounded-2xl"
                  initial={{ opacity: 0, scale: 1 }}
                  animate={{ opacity: [0, 0.5, 0], scale: [1, 1.1, 1.2] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Loading Text */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.h2 
              className="text-2xl font-bold text-foreground mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Aniruddha Sonawane
            </motion.h2>
            <motion.p 
              className="text-muted-foreground text-sm"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {progress < 30 && "Initializing portfolio..."}
              {progress >= 30 && progress < 60 && "Loading components..."}
              {progress >= 60 && progress < 90 && "Compiling assets..."}
              {progress >= 90 && "Almost ready..."}
            </motion.p>
          </motion.div>

          {/* Enhanced Progress Bar */}
          <div className="w-72 h-1.5 bg-secondary rounded-full overflow-hidden relative">
            {/* Background shimmer */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-background/50 to-transparent"
              animate={{ x: [-288, 288] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            
            <motion.div
              className="h-full bg-gradient-to-r from-primary via-emerald-400 to-primary rounded-full relative"
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow effect on progress bar */}
              <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-r from-transparent to-white/50 blur-sm" />
            </motion.div>
          </div>

          {/* Percentage */}
          <motion.div
            className="mt-4 flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-sm text-muted-foreground font-mono">
              {Math.min(Math.round(progress), 100)}%
            </span>
            <span className="text-xs text-muted-foreground/50">loaded</span>
          </motion.div>

          {/* Tech Stack Icons */}
          <motion.div
            className="flex gap-3 mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {['Java', 'Spring', 'React', 'Next.js'].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-3 py-1.5 text-xs font-medium bg-secondary/80 text-muted-foreground rounded-lg border border-border/50 hover:border-primary/30 hover:text-primary transition-colors"
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                whileHover={{ y: -2, scale: 1.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
