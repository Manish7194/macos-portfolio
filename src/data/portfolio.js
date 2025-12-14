export const personalInfo = {
    name: "Manish Kumar",
    title: "Full Stack Developer",
    bio: "Passionate developer with expertise in building modern web and mobile applications. I love creating beautiful, functional, and user-friendly experiences.",
    email: "manishmourya7194@gmail.com",
    github: "https://github.com/Manish7194",
    linkedin: "https://www.linkedin.com/in/manish-kumar1108/",
    twitter: "https://x.com/Manish_Kumar719",
};

export const projects = [
    {
        id: 1,
        name: "ParkEasy - Parking App",
        description: "A Flutter-based parking booking application with real-time availability, slot locking, and smart filters.",
        technologies: ["Flutter", "Supabase", "Google Maps API", "Dart"],
        image: "/projects/parkeasy.png",
        github: "https://github.com/Manish7194/spot_wise",
        demo: null,
        featured: true,
    },
    {
        id: 2,
        name: "Algorithm Visualizer",
        description: "Interactive visualization tool for sorting and pathfinding algorithms with modern UI and smooth animations.",
        technologies: ["React", "Vite", "GSAP", "Tailwind CSS"],
        image: "/projects/algo-viz.png",
        github: "https://github.com/Manish7194/algorithm-visualizer",
        demo: "https://algorithm-visualizer-kappa-eosin.vercel.app/",
        featured: true,
    },
    {
        id: 3,
        name: "Portfolio Website",
        description: "A macOS-inspired portfolio website showcasing projects and skills with interactive elements.",
        technologies: ["React", "GSAP", "Tailwind CSS", "Vite"],
        image: "/projects/portfolio.png",
        github: "https://github.com/manishmaurya/portfolio",
        demo: "https://manishmaurya.dev",
        featured: false,
    },
];

export const skills = {
    "Frontend": [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "GSAP", level: 75 },
    ],
    "Backend": [
        { name: "Node.js", level: 80 },
        { name: "Express", level: 75 },
        { name: "Supabase", level: 70 },
        { name: "REST APIs", level: 85 },
    ],
    "Mobile": [
        { name: "Flutter", level: 80 },
        { name: "Dart", level: 75 },
        { name: "React Native", level: 65 },
    ],
    "Tools & Others": [
        { name: "Git", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Figma", level: 70 },
        { name: "Vite", level: 80 },
    ],
};

export const apps = [
    {
        id: "finder",
        name: "Projects",
        icon: "📁",
        component: "Finder",
    },
    {
        id: "about",
        name: "About Me",
        icon: "👤",
        component: "AboutMe",
    },
    {
        id: "skills",
        name: "Skills",
        icon: "⚡",
        component: "Skills",
    },
    {
        id: "contact",
        name: "Contact",
        icon: "✉️",
        component: "Contact",
    },
    {
        id: "terminal",
        name: "Terminal",
        icon: "⌘",
        component: "Terminal",
    },
];
