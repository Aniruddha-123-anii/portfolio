'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Code, 
  Database, 
  Server, 
  Cloud, 
  GitBranch, 
  Terminal,
  Cpu,
  Layers
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Backend Development',
    icon: Server,
    skills: [
      { name: 'Java 21', level: 95 },
      { name: 'Spring Boot', level: 90 },
      { name: 'Microservices', level: 85 },
      { name: 'Apache Kafka', level: 80 },
    ],
  },
  {
    title: 'Frontend Development',
    icon: Code,
    skills: [
      { name: 'React.js', level: 85 },
      { name: 'Next.js', level: 80 },
      { name: 'TypeScript', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
    ],
  },
  {
    title: 'Database & Storage',
    icon: Database,
    skills: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 75 },
      { name: 'Redis', level: 70 },
      { name: 'Database Design', level: 80 },
    ],
  },
  {
    title: 'DevOps & Tools',
    icon: Cloud,
    skills: [
      { name: 'Docker', level: 80 },
      { name: 'Git/GitHub', level: 90 },
      { name: 'CI/CD', level: 75 },
      { name: 'AWS/GCP', level: 70 },
    ],
  },
];

function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <motion.span 
          className="text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 + index * 0.1 }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="w-full bg-secondary rounded-full h-2.5 overflow-hidden">
        <motion.div
          className="h-2.5 rounded-full bg-gradient-to-r from-primary to-emerald-400"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ 
            duration: 1.2, 
            delay: 0.2 + index * 0.1,
            ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number]
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.p
              className="text-primary text-sm font-medium mb-2 uppercase tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Technical Expertise
            </motion.p>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Skills & Technologies
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-primary mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className="bg-secondary/50 rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <category.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="space-y-1">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      index={skillIndex + categoryIndex * 4}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Tags */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Other Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                'REST APIs', 'GraphQL', 'JUnit', 'Mockito', 
                'Maven', 'Gradle', 'Linux', 'Nginx',
                'Jenkins', 'Kubernetes', 'Swagger', 'Postman'
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1.5 text-sm bg-secondary text-muted-foreground rounded-full border border-border/50 hover:border-primary/50 hover:text-primary transition-all cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
