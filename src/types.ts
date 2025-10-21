export type SocialLink = {
  name: string;
  url: string;
};

export type Localized = {
  en: string;
  ru: string;
  uz: string;
};

export type Project = {
  title: string;
  description: Localized;
  tech: string[];
  link?: string;
  repo?: string;
  image?: string; // optional thumbnail URL
};

export type Experience = {
  company: string;
  role: Localized;
  period: string; // e.g. "2023 — Present"
  bullets: Localized[];
};

export type Education = {
  school: string;
  degree: Localized; // e.g., Bachelor of Science
  period: string;
  bullets: Localized[]; // highlights
};

export type SiteContent = {
  name: string;
  role: string;
  location?: string;
  bio: Localized;
  email: string;
  phone?: string;
  avatar?: string; // URL or /public path to avatar image
  socials: SocialLink[];
  projects: Project[];
  experience: Experience[];
  education?: Education[];
};
