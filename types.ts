
import type React from 'react';

export interface NavLink {
  name: string;
  href: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: React.ComponentType<{ className?: string }>;
}

export interface Project {
  title: string;
  description: string;
}

export interface ContactInfo {
    name: string;
    href: string;
    icon: React.ComponentType<{ className?: string }>;
}
