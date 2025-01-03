export interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user";
  avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}


export interface Resume {
  id: string;
  title: string;
  lastUpdated: string;
}

export interface Template {
  id: string;
  name: string;
  image: string;
  badge?: 'new' | 'most-selected' | 'recommended';
}

export type FormStep = 'contact' | 'experience' | 'education' | 'skills' | 'about' | 'finish';

export interface ContactInfo {
  firstName: string;
  lastName: string;
  country: "";
  city: string;
  postalCode: string;
  phone: string;
  email: string;
  summary: "";
}

export interface ResumeData {
  contact: ContactInfo;
  experience: any[]; // To be expanded later
  education: any[]; // To be expanded later
  skills: string[];
  about: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  currentlyWorking: boolean;
  description: DescriptionPoint[];
}

export interface DescriptionPoint {
  id: string;
  text: string;
}


export interface CustomSection {
  title: string;
  subtitle: string;
  year: string;
  description: string;
}