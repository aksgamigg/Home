import { Project, TimelineItem } from './types';
import { Code, Globe, Cpu, Terminal, BookOpen, Award } from 'lucide-react';

export const PROJECTS: Project[] = [
  {
    id: 'edumerge',
    title: 'EduMerge',
    description: 'A privacy-focused Python mail merge tool solving subscription fatigue for students. Features local processing, custom syntax, and PDF export.',
    tech: ['Python', 'Tkinter', 'Automation', 'OS API'],
    link: 'https://aksweb.me/EduMerge-Website',
    github: 'https://github.com/aksgamigg',
    icon: 'code'
  },
  {
    id: 'pollution',
    title: 'Pollution Awareness',
    description: 'Interactive web platform visualizing air quality data in Delhi. Educates users on PM2.5/PM10 impact with actionable health advice.',
    tech: ['HTML5', 'CSS3', 'Data Viz', 'Responsive'],
    link: 'https://aksweb.me/Pollution-Website',
    icon: 'globe'
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    date: 'November 2025',
    title: 'Hackathon Participant',
    role: 'Lead Developer',
    description: 'Built a rapid prototype under 24 hours. Learned time management and deployment under pressure.'
  },
  {
    date: 'October 2025',
    title: 'Lok Sabha Delegate',
    role: 'Member of Parliament (Simulated)',
    description: 'Debated electoral malpractice, Uniform Civil Code, and One Nation One Election policy issues in a Model UN format.'
  },
  {
    date: 'Mid 2025',
    title: 'EduMerge Launch',
    role: 'Creator & Maintainer',
    description: 'Developed and shipped a desktop application to 500+ local student users to automate document generation.'
  }
];

export const COMMANDS = {
  help: "Available commands: about, projects, social, email, clear, whoami, date",
  whoami: "guest@akshaj-portfolio (Level: Visitor)",
  about: "Akshaj Goel | 10th Grade Developer | Aspiring MIT Engineer | Python & Web Enthusiast.",
  projects: "1. EduMerge (Python Automation)\n2. Pollution Awareness (Web Platform)\nType 'open edumerge' to view.",
  social: "GitHub: aksgamigg\nBlog: codenchords.wordpress.com",
  email: "akshajgoel@bnpsramvihar.edu.in",
};

export const SYSTEM_INSTRUCTION = `
You are an AI assistant for Akshaj Goel's portfolio website. 
Akshaj is a 10th-grade student in New Delhi, aspiring to go to MIT.
He is interested in Neural Networks, Algorithms, and Global Economics.
He has built "EduMerge" (Python mail merge tool) and a "Pollution Awareness" website.
He recently participated in a Hackathon (Nov 2025) and was a Lok Sabha Delegate (Oct 2025).
Your goal is to answer questions about his skills, projects, and background professionally but with a slight "futuristic system" tone.
Keep answers concise (under 3 sentences unless asked for more).
If asked about his contact, provide his email: akshajgoel@bnpsramvihar.edu.in.
`;