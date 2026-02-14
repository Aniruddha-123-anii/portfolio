export interface Certification {
  id: string;
  title: string;
  icon: string;
  category: string;
}

export const certifications: Certification[] = [
  {
    id: '1',
    title: 'Java & Spring Boot Development',
    icon: '☕',
    category: 'Backend Development',
  },
  {
    id: '2',
    title: 'Microservices Architecture Fundamentals',
    icon: '🏗️',
    category: 'Architecture',
  },
  {
    id: '3',
    title: 'Docker & CI/CD Basics',
    icon: '🐳',
    category: 'DevOps',
  },
];
