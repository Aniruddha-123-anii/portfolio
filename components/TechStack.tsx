'use client';

import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { 
  Coffee, 
  Server, 
  Layers, 
  Database, 
  Layout, 
  FileCode,
  Palette,
  Container,
  Brain
} from 'lucide-react';

const technologies = [
  { name: 'Java 21', category: 'backend', icon: Coffee },
  { name: 'Spring Boot', category: 'backend', icon: Server },
  { name: 'Microservices', category: 'backend', icon: Layers },
  { name: 'Apache Kafka', category: 'backend', icon: Database },
  { name: 'PostgreSQL', category: 'database', icon: Database },
  { name: 'React', category: 'frontend', icon: Layout },
  { name: 'Next.js', category: 'frontend', icon: FileCode },
  { name: 'Tailwind CSS', category: 'frontend', icon: Palette },
  { name: 'Docker', category: 'devops', icon: Container },
  { name: 'Generative AI / LLM APIs', category: 'ai', icon: Brain },
];

const categories: Record<string, string> = {
  backend: 'Backend',
  frontend: 'Frontend',
  database: 'Database',
  devops: 'DevOps',
  ai: 'AI/ML',
};

export default function TechStack() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="tech-stack" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Tech Stack</h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.name}
                  className="group relative bg-secondary/50 hover:bg-secondary p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm md:text-base">
                        {tech.name}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        {categories[tech.category]}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="bg-secondary/30 p-6 rounded-xl border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">Backend Expertise</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Deep expertise in Java ecosystem with Spring Boot, building RESTful APIs, 
                microservices architectures, and event-driven systems using Apache Kafka.
              </p>
            </div>
            <div className="bg-secondary/30 p-6 rounded-xl border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">Frontend Skills</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Modern React development with Next.js, TypeScript, and Tailwind CSS. 
                Creating responsive, performant user interfaces with excellent UX.
              </p>
            </div>
            <div className="bg-secondary/30 p-6 rounded-xl border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">AI Integration</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Experience integrating Generative AI and LLM APIs into applications, 
                leveraging modern AI capabilities to enhance product features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}