'use client';

import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">About Me</h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Backend-focused Full Stack Developer with expertise in{' '}
                <span className="text-foreground font-medium">Java 21</span>,{' '}
                <span className="text-foreground font-medium">Spring Boot</span>,{' '}
                <span className="text-foreground font-medium">Microservices</span>,{' '}
                <span className="text-foreground font-medium">Apache Kafka</span>, and{' '}
                <span className="text-foreground font-medium">fintech lending platforms</span>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in building high-performance, scalable backend systems that power 
                modern financial applications. My experience spans from designing microservice 
                architectures to implementing real-time event streaming solutions using Kafka, 
                ensuring systems can handle millions of transactions with reliability and precision.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently working at Lentra AI, I contribute to mission-critical lending platforms 
                that process substantial daily transaction volumes, focusing on system optimization, 
                API design, and seamless integration with banking systems.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-emerald-500/20 rounded-2xl blur-2xl" />
              <div className="relative bg-secondary p-8 rounded-2xl border border-border">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">2+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5+</div>
                    <div className="text-sm text-muted-foreground">Tech Stacks</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">Commitment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}