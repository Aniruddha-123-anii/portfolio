'use client';

import { GraduationCap, Calendar, Award } from 'lucide-react';
import { education } from '../data/education';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Education() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="education" className="py-20 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-primary text-sm font-medium mb-2 uppercase tracking-wide">
              Academic Background
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Education
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border" />

            {education.map((edu, index) => (
              <div
                key={edu.id}
                className={`relative mb-12 last:mb-0 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms`, transitionDuration: '700ms' }}
              >
                <div className={`flex flex-col md:flex-row items-start gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-secondary rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group">
                      <div className={`flex items-center gap-2 mb-3 text-primary ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <GraduationCap size={20} />
                        <span className="text-sm font-medium">{edu.period}</span>
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {edu.degree} — {edu.field}
                      </h3>

                      <p className="text-muted-foreground mb-4">
                        {edu.institution}
                      </p>

                      <div className={`inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                        <Award size={14} className="text-primary" />
                        <span className="text-sm font-medium text-primary">
                          {edu.scoreLabel}: {edu.score}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
