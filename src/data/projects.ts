import type { Project } from "../types/appTypes";

export const projects: Project[] = [
  {
    id: 1,
    title: "Book Store",
    description:
      "A modern full-stack bookstore built with React.js, Zustand, Tailwind CSS, Postman, and REST APIs.",
    image: "library.png",
    technologies: [
      "React.js",
      "Zustand",
      "Tailwind CSS",
      "Postman",
      "REST API",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/mostafa-adel77/Book_Shop",
  },
  {
    id: 2,
    title: "Iron Beast Gym",
    description:
      "A modern gym e-commerce website built with React.js, Tailwind CSS, Zustand, and Strapi.",
    image: "heroGym.jpg",
    technologies: ["React.js", "Tailwind CSS", "Zustand", "Strapi"],
    liveUrl: "#",
    githubUrl: "https://github.com/mostafa-adel77/IRON_BEAST_GYM",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A modern portfolio website built with React.js, TypeScript, Vercel and Tailwind CSS.",
    image: "profile.png",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://mostafa-adel-portfolio.vercel.app/",
    githubUrl: "https://github.com/mostafa-adel77/Mostafa_Adel_Portfolio",
  },
];
