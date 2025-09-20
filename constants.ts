
import type { NavLink, Skill, Project, ContactInfo } from './types';
import { PythonIcon, SqlIcon, WebDevIcon, DataAnalyticsIcon, MailIcon, PhoneIcon, LinkedInIcon } from './components/Icons';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const SKILLS: Skill[] = [
  { name: 'Python', level: 90, icon: PythonIcon },
  { name: 'SQL', level: 85, icon: SqlIcon },
  { name: 'Front-End Development', level: 95, icon: WebDevIcon },
  { name: 'Data Analytics', level: 80, icon: DataAnalyticsIcon },
];

export const PROJECTS: Project[] = [
  {
    title: 'Fake News Detection',
    description: 'Developed a machine learning model to accurately identify and classify misinformation from online sources, achieving high precision and recall.',
  },
  {
    title: 'YOLO Object Detection',
    description: 'Implemented a real-time object detection system using the YOLO (You Only Look Once) algorithm for identifying objects in video streams.',
  },
  {
    title: 'Privacy Protection in Online Networks',
    description: 'Designed and implemented a system to enhance user privacy in social networks through data anonymization and access control mechanisms.',
  },
];

export const CONTACT_INFO: ContactInfo[] = [
    { name: 'Email', href: 'mailto:ramani.r@example.com', icon: MailIcon },
    { name: 'Phone', href: 'tel:+1234567890', icon: PhoneIcon },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/ramani-r', icon: LinkedInIcon },
];
