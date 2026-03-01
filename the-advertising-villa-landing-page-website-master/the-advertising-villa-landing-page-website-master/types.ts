import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  details: string[];
}

export interface IndustryItem {
  name: string;
  icon: LucideIcon;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface TechCategory {
  title: string;
  items: string[];
}