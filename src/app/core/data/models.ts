export interface NavLink {
  label: string;
  fragment: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  summary: string;
  detail: string;
}

export interface VerticalSolution {
  name: string;
}

export interface VerticalItem {
  icon: string;
  title: string;
  tag: string;
  summary: string;
  solutions: VerticalSolution[];
}

export interface ProductItem {
  name: string;
  tagline: string;
  description: string;
}

export interface ReasonItem {
  index: string;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

export interface CoreValue {
  letter: string;
  title: string;
  description: string;
}

export interface CustomerItem {
  name: string;
  location: string;
  logo?: string;
}

export interface PartnerItem {
  name: string;
  location: string;
  logo?: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface JobOpening {
  title: string;
  openings: string;
  location: string;
  type: string;
  education: string;
  requirements: string[];
}

export interface SocialLink {
  icon: string;
  label: string;
  url: string | null; // null = not live yet, shows dimmed/non-clickable
}
