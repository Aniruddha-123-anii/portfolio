'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const stats = [
  { value: 2, suffix: '+', label: 'Years Experience' },
  { value: 10, suffix: '+', label: 'Projects Completed' },
  { value: 5, suffix: '+', label: 'Tech Stacks' },
  { value: 100, suffix: '%', label: 'Commitment' },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <motion.div 
              className="h-px flex-1 bg-border"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ originX: 1 }}
            />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">About Me</h2>
            <motion.div 
              className="h-px flex-1 bg-border"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ originX: 0 }}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <motion.p 
                className="text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Backend-focused Full Stack Developer with expertise in{' '}
                <motion.span 
                  className="text-foreground font-medium"
                  whileHover={{ color: "var(--primary)" }}
                >
                  Java 21
                </motion.span>,{' '}
                <motion.span 
                  className="text-foreground font-medium"
                  whileHover={{ color: "var(--primary)" }}
                >
                  Spring Boot
                </motion.span>,{' '}
                <motion.span 
                  className="text-foreground font-medium"
                  whileHover={{ color: "var(--primary)" }}
                >
                  Microservices
                </motion.span>,{' '}
                <motion.span 
                  className="text-foreground font-medium"
                  whileHover={{ color: "var(--primary)" }}
                >
                  Apache Kafka
                </motion.span>, and{' '}
                <motion.span 
                  className="text-foreground font-medium"
                  whileHover={{ color: "var(--primary)" }}
                >
                  fintech lending platforms
                </motion.span>.
              </motion.p>
              
              <motion.p 
                className="text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                I specialize in building high-performance, scalable backend systems that power 
                modern financial applications. My experience spans from designing microservice 
                architectures to implementing real-time event streaming solutions using Kafka, 
                ensuring systems can handle millions of transactions with reliability and precision.
              </motion.p>
              
              <motion.p 
                className="text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Currently working at Lentra AI, I contribute to mission-critical lending platforms 
                that process substantial daily transaction volumes, focusing on system optimization, 
                API design, and seamless integration with banking systems.
              </motion.p>
            </div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-emerald-500/20 rounded-2xl blur-2xl"
                animate={{ 
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="relative bg-secondary p-8 rounded-2xl border border-border">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div 
                      key={stat.label}
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
