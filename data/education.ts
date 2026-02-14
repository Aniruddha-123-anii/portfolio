export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  period: string;
  score: string;
  scoreLabel: string;
}

export const education: Education[] = [
  {
    id: '1',
    degree: 'MCA',
    field: 'Computer Applications',
    institution: 'Indira College of Engineering and Management',
    period: '2023 – 2025',
    score: '8.36 / 10',
    scoreLabel: 'CGPA',
  },
  {
    id: '2',
    degree: 'B.Sc',
    field: 'Computer Science',
    institution: 'Ahmednagar College',
    period: '2020 – 2023',
    score: '9.27 / 10',
    scoreLabel: 'CGPA',
  },
];
