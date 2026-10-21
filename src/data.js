// Edit this file to change the words on every page.

export const profile = {
  name: "Sonia",
  role: "Software Engr.",
  email: "",
  intro:
    "I am a full-stack developer with experience designing, developing, and deploying end-to-end web and mobile applications. I combine backend work in Python, Node.js, and SQL with responsive frontend interfaces in React.js, JavaScript, and Tailwind. I work with cross-functional teams and deliver platforms people can use clearly.",
  about: [
    "I am a full-stack developer with experience designing, developing, and deploying end-to-end web and mobile applications. I combine backend work in Python, Node.js, and SQL with responsive frontend interfaces in React.js, JavaScript, and Tailwind. I work with cross-functional teams and deliver platforms people can use clearly.",
    "Work so far: Elevate, a Kigali services app, and MediBook.",
  ],
};

export const skillCards = [
  {
    title: "Front end",
    text: "HTML, CSS, JavaScript, React, and Tailwind. Pages, forms, and layouts that stay clear.",
  },
  {
    title: "Back end",
    text: "Node.js and Express on MediBook, and Python with Django on Elevate.",
  },
  {
    title: "Interface",
    text: "Responsive design that rearranges from a wide screen to a phone.",
  },
];

export const skillGroups = [
  {
    label: "Languages",
    items: ["HTML", "CSS", "JavaScript"],
  },
  {
    label: "Interface",
    items: ["React", "Tailwind", "Responsive layout", "Forms", "UI development"],
  },
  {
    label: "Also used",
    items: ["Node.js", "Express", "MySQL", "Django", "Flutter", "Git"],
  },
];

export const projects = [
  {
    slug: "elevate",
    title: "Elevate System",
    kind: "Web app",
    year: "",
    summary:
      "A school management platform. Administrators, instructors, and students each have a profile, and the React interface stays in sync through REST APIs.",
    live: "https://elevate-system.vercel.app/",
    linkLabel: "Open Elevate",
    stack: ["React", "Python", "Django", "SQL"],
    points: [
      "Built for a school, with separate profiles for administrators, instructors, and students.",
      "The interface is React. The server is Python and Django, and the profiles are stored in SQL.",
      "REST APIs keep the screens in sync with those records.",
    ],
  },
  {
    slug: "kigali",
    title: "Kigali City Services Directory",
    kind: "Mobile app",
    year: "",
    summary:
      "A Flutter app for finding local services in Kigali. Listings are stored in Firebase so they can update in real time.",
    live: "https://github.com/soniaetuhoko/Kigali_app",
    linkLabel: "View on GitHub",
    stack: ["Flutter", "Dart", "Firebase"],
    points: [
      "A cross-platform mobile app for local service discovery in Kigali.",
      "Built with Flutter and Dart.",
      "Firebase holds the listings and supports faster, real-time queries.",
    ],
  },
  {
    slug: "medibook",
    title: "MediBook",
    kind: "API",
    year: "",
    summary:
      "A clinic appointment API. It books 30-minute doctor slots, runs a background worker, and logs each change.",
    live: "https://github.com/ALU-BSE/summative-ii-medibook-project-soniaetuhoko",
    linkLabel: "View on GitHub",
    stack: ["Node.js", "Express", "MySQL", "Redis"],
    points: [
      "An API for booking clinic appointments.",
      "Built with Node.js, Express, MySQL, and Redis.",
      "Books 30-minute doctor slots, runs a background worker, and logs each change.",
    ],
  },
  {
    slug: "portfolio",
    title: "Personal portfolio",
    kind: "Website",
    year: "2026",
    summary:
      "This website. An introduction, a short background, a project showcase, and a contact form, laid out for a wide screen and a phone.",
    live: "",
    linkLabel: "",
    stack: ["React", "CSS", "React Router"],
    points: [
      "Home, About, Projects, and Contact are separate pages.",
      "The project showcase links through to a detail page for each piece of work.",
      "The contact form checks the name, email, and message before it accepts them.",
      "The menu sits across the top on a wide screen and folds into a button on a phone.",
    ],
  },
];

export function findProject(slug) {
  return projects.find((project) => project.slug === slug);
}
