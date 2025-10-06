// src/app/lib/utils.ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// src/app/lib/constants.ts
export const siteConfig = {
  name: "Mohd Bilal",
  title: "Mohd Bilal - Full-Stack Developer",
  description: "Full-Stack Developer specializing in React, Next.js, TypeScript, and Node.js. Built AI & feedback platforms.",
  url: "https://codewithbilal.com",
  ogImage: "https://codewithbilal.com/og.png",
  links: {
    email: "mbilal@confederationcollege.ca",
    linkedin: "https://www.linkedin.com/in/mohd-bilal-b9a0b71a8/",
    github: "https://github.com/bilalzip/",
  },
  location: "Thunder Bay, ON",
  headline: "Full-Stack Developer — React, Next.js, TypeScript, Node",
  subline: "Built AI & feedback platforms; open to internships/new-grad roles (Canada/remote).",
}

export const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Resume", href: "/resume" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

export const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Cloudflare",
  "Stripe",
  "Tailwind CSS",
]

export const projects = [
  {
    title: "Hixbi",
    slug: "hixbi",
    description: "Unified chat for Gemini, ChatGPT, Claude, DeepSeek in one UI.",
    stack: ["Next.js", "Cloudflare Workers", "Stripe", "Zustand", "NextAuth"],
    highlights: [
      "Faster text responses via global edge microservices on Cloudflare Workers",
      "Stripe payments; NextAuth RBAC",
      "Highly scalable UI with performance focus",
    ],
    links: {
      live: "https://hixbi.com",
      github: "https://github.com/yourusername/hixbi",
      caseStudy: "/projects/hixbi",
    },
    featured: true,
  },
  {
    title: "The Gold Star",
    slug: "the-gold-star",
    description: "QR code feedback (public or private) with Google-compliant publish flow.",
    stack: ["React", "Vite", "Express.js", "SQL", "Tailwind", "Framer Motion"],
    highlights: [
      "Secure links + rate-limited endpoints; admin moderation/analytics",
      "Production on Vercel, custom domain",
    ],
    links: {
      live: "https://thegoldstar.ca",
      github: undefined,
      caseStudy: "/projects/the-gold-star",
    },
    featured: true,
  },
]

export const experience = [
  {
    title: "Student Computer Peer Tutor",
    company: "Confederation College",
    location: "Thunder Bay, ON",
    period: "Sep 2025 – Present",
    type: "Part-Time",
    highlights: [
      "Assist students with software/hardware/network issues; productivity up",
      "Guide on coding fundamentals, debugging, IDE/dev tools",
      "Help navigate IT resources and common tech problems",
    ],
  },
  {
    title: "Computer Service Help Desk Assistant",
    company: "Confederation College",
    location: "Thunder Bay, ON",
    period: "May 2025 – Aug 2025",
    type: "Full-Time",
    highlights: [
      "Bash scripts to automate logs, installs, account setup → faster support",
      "Streamlined monitoring + ticket resolution processes",
      "Managed Azure AD provisioning and access control",
      "Resolved Windows/Linux issues across OS/hardware/software",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "Connected To Culture, Inc.",
    location: "Washington, DC",
    period: "Mar 2024 – Sep 2024",
    type: "Volunteer",
    highlights: [
      "LangChain + vector search recommendations for engagement",
      "Fastify + TypeScript APIs; secure auth; faster responses",
      "Jenkins CI/CD for tests & deployments",
    ],
  },
]

export const education = {
  degree: "Diploma, Computer Programming",
  school: "Confederation College",
  location: "Thunder Bay, ON",
  period: "Sep 2024 – Apr 2026",
}