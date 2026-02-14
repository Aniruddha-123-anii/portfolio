'use client';

import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import type { Experience } from '../types';

const experiences: Experience[] = [
  {
    company: 'Lentra AI',
    role: 'Full Stack Developer',
    period: 'Jul 2024 – Present',
    description: [
      'Developed and maintained microservices for loan origination systems handling millions in daily transactions',
      'Implemented event-driven architecture using Apache Kafka for real-time data processing',
      'Optimized database queries and API performance, reducing response times by 40%',
      'Collaborated with cross-functional teams to deliver features for major banking clients',
      'Built reusable React components for internal tools and dashboard applications',
    ],
  },
  {
    company: 'Blackrock',
    role: 'Backend Developer Intern',
    period: 'Nov 2022 – Feb 2023',
    description: [
      'Assisted in developing RESTful APIs for portfolio management systems',
      'Participated in code reviews and implemented best practices for Java Spring Boot applications',
      'Created automated test suites achieving 85% code coverage',
      'Documented API specifications and technical workflows for team reference',
    ],
  },
];

export default function Experience() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Experience</h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
                }`}
              >
                <div
                  className={`flex flex-col md:flex-row items-start gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1.5 mt-2 ring-4 ring-background" />

                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                    }`}
                  >
                    <div className="bg-secondary/50 p-6 rounded-xl border border-border hover:border-primary/30 transition-all duration-300">
                      <div
                        className={`flex items-center gap-2 mb-2 text-primary ${
                          index % 2 === 0 ? 'md:justify-end' : ''
                        }`}
                      >
                        <Briefcase size={18} />
                        <span className="text-sm font-medium">{exp.period}</span>
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-1">{exp.company}</h3>
                      <p className="text-muted-foreground font-medium mb-4">{exp.role}</p>

                      <ul
                        className={`space-y-2 text-sm text-muted-foreground ${
                          index % 2 === 0 ? 'md:text-right' : ''
                        }`}
                      >
                        {exp.description.map((item, i) => (
                          <li
                            key={i}
                            className={`flex items-start gap-2 ${
                              index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''
                            }`}
                          >
                            <span className="text-primary mt-1.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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