import type { Skill } from "../types/skillTypes";

import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiStrapi,
  SiGit,
  SiGithub,
  SiSwagger,
  SiVite,
} from "react-icons/si";

import { FaStore, FaCode } from "react-icons/fa";

export const skills: Skill[] = [
  {
    name: "HTML5",
    category: "Front-End",
    level: "Advanced",
    icon: SiHtml5,
    color: "text-orange-500",
  },
  {
    name: "CSS3",
    category: "Front-End",
    level: "Advanced",
    icon: FaCode,
    color: "text-blue-500",
  },
  {
    name: "JavaScript (ES6+)",
    category: "Front-End",
    level: "Advanced",
    icon: SiJavascript,
    color: "text-yellow-400",
  },
  {
    name: "React.js",
    category: "Framework",
    level: "Advanced",
    icon: SiReact,
    color: "text-cyan-400",
  },
  {
    name: "TypeScript",
    category: "Language",
    level: "Advanced",
    icon: SiTypescript,
    color: "text-blue-600",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    level: "Advanced",
    icon: SiTailwindcss,
    color: "text-cyan-400",
  },
  {
    name: "Bootstrap",
    category: "Styling",
    level: "Advanced",
    icon: SiBootstrap,
    color: "text-purple-500",
  },
  {
    name: "Zustand",
    category: "State Management",
    level: "Intermediate",
    icon: FaStore,
    color: "text-orange-400",
  },
  {
    name: "Strapi",
    category: "CMS",
    level: "Intermediate",
    icon: SiStrapi,
    color: "text-purple-400",
  },
  {
    name: "REST APIs",
    category: "API",
    level: "Intermediate",
    icon: FaCode,
    color: "text-green-400",
  },
  {
    name: "Git",
    category: "Tools",
    level: "Intermediate",
    icon: SiGit,
    color: "text-orange-600",
  },
  {
    name: "GitHub",
    category: "Tools",
    level: "Intermediate",
    icon: SiGithub,
    color: "text-white",
  },
  {
    name: "Swagger",
    category: "API Documentation",
    level: "Intermediate",
    icon: SiSwagger,
    color: "text-green-500",
  },
  {
    name: "Vite",
    category: "Build Tool",
    level: "Intermediate",
    icon: SiVite,
    color: "text-purple-500",
  },
];
