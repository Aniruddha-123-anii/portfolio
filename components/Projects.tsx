'use client';

import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '../types';

const projects: Project[] = [
  {
    title: 'LOS Core',
    description: 'Loan Origination System core module handling end-to-end loan processing pipeline. Built microservices architecture for credit evaluation, document verification, and approval workflows. Processes thousands of loan applications daily with sub-second response times.',
    tech: ['Java 21', 'Spring Boot', 'Microservices', 'Apache Kafka', 'PostgreSQL'],
    github: '#',
  },
  {
    title: 'FMS (Fulfillment Microservice)',
    description: 'High-performance fulfillment service managing loan disbursement workflows. Implements event-driven architecture with Kafka for real-time transaction processing. Integrates with multiple banking APIs for seamless fund transfers and status tracking.',
    tech: ['Spring Boot', 'Apache Kafka', 'Docker', 'REST APIs', 'PostgreSQL'],
    github: '#',
  },
  {
    title: 'Configuration Comparison Utility',
    description: 'Developer tool for comparing environment configurations across deployment stages. Automates detection of configuration drift and ensures consistency between dev, staging, and production environments. Reduces deployment errors by 90%.',
    tech: ['Java', 'Spring Boot', 'React', 'TypeScript', 'Tailwind CSS'],
    github: '#',
  },
];

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Projects</h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-secondary/50 hover:bg-secondary rounded-xl border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                          aria-label="View GitHub repository"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                          aria-label="View live project"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}