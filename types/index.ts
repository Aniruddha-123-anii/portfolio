export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface TechStack {
  name: string;
  icon?: string;
  category: 'backend' | 'frontend' | 'database' | 'devops' | 'ai';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Certification {
  id: string;
  title: string;
  icon: string;
  category: string;
}

export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  period: string;
  score: string;
  scoreLabel: string;
}