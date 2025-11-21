export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
  github?: string;
  icon: 'code' | 'globe' | 'cpu';
}

export interface TimelineItem {
  date: string;
  title: string;
  role: string;
  description: string;
}

export interface CommandResponse {
  type: 'input' | 'output' | 'error' | 'success';
  content: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}