export const resumePdfUrl = "/Mehrsa_Mohajeri.pdf";

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/mehrsamohajeri",
  github: "https://github.com/mehrsamohajeri",
  instagram:
    "https://www.instagram.com/mehrsa_mohajerii?lqvp=MTFuMDJzYmR5NXZlbg%3D%3D&utm_source=qr",
  telegram: "https://t.me/Mehrsa_Mohajeri",
} as const;

export const navItems = [
  { href: "#", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#resume", label: "Resume" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
] as const;

export const hardSkills = [
  "HTML",
  "CSS",
  "Javascript",
  "Typescript",
  "Python",
  "Vue",
  "Nuxt",
  "React",
  "Next",
  "Bootstrap",
  "Tailwind",
  "Git",
  "Playwright",
  "Cypress",
] as const;

export const softSkills = [
  "English",
  "German",
  "Teamwork",
  "Communication",
  "Adaptability",
  "Work Ethic",
  "Creativity",
  "Leadership",
  "Problem-solving",
  "Research Skills",
  "Flexibility",
  "Time Management",
] as const;

export type ExperienceEntry = {
  title: string;
  org: string;
  period: string;
  description?: string;
  descriptionParagraphs?: string[];
  link?: string;
};

export const experiences: ExperienceEntry[] = [
  {
    title: "Front-End Developer",
    org: "System Group (Abramad)",
    period: "Feb 2025 - Present",
    link: "https://cloud.abramad.com/auth/login",
    description:
      "Abramad is a cloud services provider that simplifies access to IT solutions through reliable and secure cloud infrastructure. The company was founded with the expertise and capabilities of System Group, a leading provider of enterprise software in Iran. We deliver enterprise and managed cloud solutions using cutting-edge technologies.",
  },
  {
    title: "Front-End Developer",
    org: "Navatel",
    period: "Jan 2025 - Feb 2025",
    description:
      "Navatel’s cloud-based CRM enables businesses to manage and enhance customer relationships by integrating multiple communication channels including calls, live chat, messaging apps, SMS, and fax into a unified platform. This all-in-one system ensures real-time connectivity and helps improve customer satisfaction through seamless, multi-channel engagement.",
  },
  {
    title: "Front-End Developer",
    org: "Ulfat E-commerce development company",
    period: "Dec 2023 - Dec 2024",
    descriptionParagraphs: [
      "Zanjiretamin: Supply Chain Platform provides direct access to supply and demand, offering financial tools such as tailored loans, receivables financing, and securities to support businesses of all sizes.",
      "Barhub: Optimizing supply, distribution, and production systems management is crucial for large enterprises. Advanced logistics solutions reduce costs, improve service quality, and enhance customer satisfaction despite high demand and operational complexity.",
    ],
  },
  {
    title: "Front-End Developer",
    org: "Parnian web design school",
    period: "Aug 2023 - Jan 2024",
    description:
      "I began my journey into front-end development here, building my skills from the ground up. During this time, I worked on several projects, which you can explore on my GitHub profile.",
  },
];

export const education: ExperienceEntry[] = [
  {
    title: "Front-End Developer",
    org: "Parnian web design school",
    period: "Aug 2023 - Jan 2024",
  },
  {
    title: "Bachelor of Applied Science - BASc",
    org: "K. N. Toosi University of Technology",
    period: "Sep 2019 - Jul 2023",
  },
  {
    title: "Diploma of Education",
    org: "Salam high school",
    period: "Sep 2016 - Jul 2019",
  },
];

export type PortfolioProject = {
  image: string;
  alt: string;
  title: string;
  github: string;
  demo: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    image: "/Image/portfolio7.webp",
    alt: "Food Delivery Template",
    title: "Food Delivery Template",
    github:
      "https://github.com/Mehrsa-Mohajeri-Developer/Food_Delivery_Tailwind_Project_8",
    demo: "https://mehrsamohajeri.github.io/Food_Delivery_Tailwind_Project_8/",
  },
  {
    image: "/Image/portfolio8.webp",
    alt: "Sports Template",
    title: "Sports Template",
    github:
      "https://github.com/Mehrsa-Mohajeri-Developer/Sports_Tailwind_Project_10/tree/main",
    demo: "https://mehrsamohajeri.github.io/Sports_Tailwind_Project_10/",
  },
  {
    image: "/Image/portfolio9.webp",
    alt: "Bootstrap Template",
    title: "Bootstrap Template",
    github: "https://github.com/Mehrsa-Mohajeri-Developer/Bootstrap_Project_6",
    demo: "https://mehrsamohajeri.github.io/Bootstrap_Project_6/",
  },
  {
    image: "/Image/porfolio1.webp",
    alt: "Corporation Template",
    title: "Corporation Template",
    github:
      "https://github.com/Mehrsa-Mohajeri-Developer/Corporation_Template_Project_1",
    demo: "https://mehrsamohajeri.github.io/Corporation_Template_Project_1/",
  },
  {
    image: "/Image/portfolio2.webp",
    alt: "Taxi Template",
    title: "Taxi Template",
    github:
      "https://github.com/Mehrsa-Mohajeri-Developer/Taxi_Template_Project_2",
    demo: "https://mehrsamohajeri.github.io/Taxi_Template_Project_2/",
  },
  {
    image: "/Image/portfolio3.webp",
    alt: "Fashion Template",
    title: "Fashion Template",
    github:
      "https://github.com/Mehrsa-Mohajeri-Developer/Fashion_Template_Project_3",
    demo: "https://mehrsamohajeri.github.io/Fashion_Template_Project_3/",
  },
  {
    image: "/Image/portfolio4.webp",
    alt: "Landscape Template",
    title: "Landscape Template",
    github:
      "https://github.com/Mehrsa-Mohajeri-Developer/Landscape_Template_Project_4",
    demo: "https://mehrsamohajeri.github.io/Landscape_Template_Project_4/",
  },
  {
    image: "/Image/portfolio5.webp",
    alt: "Photography Template",
    title: "Photography Template",
    github:
      "https://github.com/Mehrsa-Mohajeri-Developer/Photography_Template_Project_5",
    demo: "https://mehrsamohajeri.github.io/Photography_Template_Project_5/",
  },
  {
    image: "/Image/portfolio6.webp",
    alt: "Solar System",
    title: "Solar System",
    github: "https://github.com/Mehrsa-Mohajeri-Developer/Solar_System_Trick13",
    demo: "https://mehrsamohajeri.github.io/Solar_System_Trick13/",
  },
];