import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
  subItems?: NavItem[];
}

export interface ServiceDetail {
  title: string;
  description: string;
  icon?: LucideIcon;
  features: string[];
}

export interface PageContent {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  iconName: string; // Mapping string to actual icon component in rendering
  features?: string[];
  benefits?: string[];
  image: string;
  lottieUrl?: string;
}

export interface Industry {
  name: string;
  iconName: string;
}

export interface LeadershipProfile {
  name: string;
  role: string;
  email: string;
  phone: string;
  bio?: string;
  image?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image: string;
  tags: string[];
}

// Helper interface for WordPress API response
export interface WPPost {
  id: number;
  date: string;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string }>;
    'author'?: Array<{ name: string }>;
    'wp:term'?: Array<Array<{ name: string; taxonomy: string }>>;
  };
}