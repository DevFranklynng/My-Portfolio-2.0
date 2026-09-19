export const SKILLS_STRIP = [
  "HTML5",
  "CSS3",
  "TAILWINDCSS",
  "JAVASCRIPT",
  "DOM MANIPULATION",
  "REST APIs",
  "GIT & GITHUB",
  "REACT",
  "RESPONSIVE WEB DESIGN",
  "UI DEVELOPMENT",
];

export const FEATURED_PROJECTS = [
  {
    name: "CampusNest",
    category: "Student Housing Platform",
    description:
      "A modern platform designed to help students find suitable accommodation while connecting them with landlords.",
    image: "/Assets/CampusNest.png",
    alt: "CampusNest student housing platform",
    large: true,
  },
  {
    name: "Enyimba Air",
    category: "Airline Website",
    description:
      "A modern aviation website focused on presenting airline services and information through a clean digital experience.",
    image: "/Assets/EnyimbaAir.png",
    alt: "Eyimba Air website",
    large: false,
  },
  {
    name: "Fashionise",
    category: "Fashion & E-Commerce",
    description:
      "A stylish fashion-focused digital experience built around modern visual presentation and user interaction.",
    image: "/Assets/Fashionise.png",
    alt: "Fashionis fashion website",
    large: false,
  },
];

export const PROJECTS = [
  {
    id: 1,
    name: "CampusNest",
    tag: "Web Application",
    filter: "web",
    description:
      "A student housing platform designed to connect students with available accommodation and landlords.",
    image: "/Assets/CampusNest.png",
    alt: "CampusNest student housing platform",
    tech: ["HTML", "CSS", "JavaScript", "Supabase"],
    featured: true,
  },
  {
    id: 2,
    name: "Enyimba Air",
    tag: "Airline Website",
    filter: "ecommerce",
    description:
      "A modern aviation website focused on presenting airline services and information through a clean digital experience.",
    image: "/Assets/EnyimbaAir.png",
    alt: "LUXORA e-commerce website",
    tech: ["HTML", "Tailwind", "JavaScript", "API"],
    featured: false,
  },
  {
    id: 3,
    name: "Fashionise",
    tag: "Fashion & E-Commerce",
    filter: "personal",
    description:
      "A stylish fashion-focused digital experience built around modern visual presentation and user interaction.",
    image: "/Assets/Fashionise.png",
    alt: "Franklyn portfolio website",
    tech: ["HTML", "CSS", "JavaScript"],
    featured: false,
  },
  {
    id: 4,
    name: "More to Come",
    tag: "Upcoming",
    filter: "web",
    description:
      "I'm constantly working on new ideas and projects as I continue growing as a developer.",
    image: null,
    alt: "",
    tech: [],
    featured: false,
    placeholder: true,
  },
];

export const FILTERS = [
  { key: "all", label: "All" },
  { key: "web", label: "Web Development" },
  { key: "ecommerce", label: "E-Commerce" },
  { key: "personal", label: "Personal" },
];

export const SERVICES = [
  {
    number: "01.",
    title: "Frontend Development",
    subtitle: "HTML / CSS / JavaScript / REST APIs / React",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "REST APIs", "React"],
    description:
      "Building responsive and interactive websites with clean, structured and maintainable frontend code.",
  },
  {
    number: "02.",
    title: "Web Design",
    subtitle: "Modern / Responsive / Clean",
    tags: ["Landing Pages", "UI Design", "Responsive Layouts", "Visual Hierarchy"],
    description:
      "Creating modern layouts that look polished, clear and consistent across different screen sizes.",
  },
  {
    number: "03.",
    title: "JavaScript Development",
    subtitle: "Interaction / Logic / APIs",
    tags: ["JavaScript", "DOM", "APIs", "Interactive UI"],
    description:
      "Adding useful interactions, dynamic behaviour and functionality to websites using JavaScript.",
  },
  {
    number: "04.",
    title: "Responsive Development",
    subtitle: "Mobile / Tablet / Desktop",
    tags: ["Mobile First", "Flexbox", "CSS Grid", "Media Queries"],
    description:
      "Making websites adapt smoothly to different devices and screen sizes without sacrificing usability.",
  },
  {
    number: "05.",
    title: "Git & Deployment",
    subtitle: "Git / GitHub / Netlify",
    tags: ["Git", "GitHub", "Netlify", "Deployment"],
    description:
      "Managing code with Git and GitHub and deploying completed websites for others to access online.",
  },
];