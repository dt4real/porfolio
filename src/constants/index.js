import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  springboot,
  carrent,
  gitSocial,
  linkedIn,
  nikeShop,
  adwuma,
  briefcase
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: gitSocial,
    link: "https://github.com/dt4real"
  },
  {
    id: 2,
    img: linkedIn,
    link: "https://www.linkedin.com/in/otcheredarlington/"
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Android Mobile Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "SpringBoot",
    icon: springboot,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Java Developer",
    company_name: "Margins ID Group",
    icon: briefcase,
    iconBg: "#E6DEDD",
    date: "Sep 2020 - Sep 2022",
    points: [
      "Developing and maintaining web and mobile applications using SpringBoot, Android, ReactJS and other related technologies.",
      "Collaborating with cross-functional teams including product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Maintained and enhanced RESTful API services, ensuring operational efficiency and scalability.",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "Next Generation IT Solutions",
    icon: briefcase,
    iconBg: "#383E56",
    date: "Jan 2023 - Feb 2024",
    points: [
      "Collaborated with my team to develop a microservices-based e-commerce platform using TypeScript, Node.js, React, and Kubernetes.",
      "Built RESTful APIs with Node.js and Express, ensuring seamless integration with front-end components.",
      "Migrated legacy codebase from JavaScript to TypeScript, enhancing code maintainability and reducing bugs.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    web_link: "https://dt4real.github.io/rent-car-react/",
    source_code_link: "https://github.com/dt4real/rent-car-react",
  },
  {
    name: "Simple Ecommerce",
    description:
      "Web application that enables users to search for shoes, view, and add the shoes to their cart.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: nikeShop,
    web_link: "https://dt4real.github.io/ecommerce-basic-react/",
    source_code_link: "https://github.com/dt4real/ecommerce-basic-react",
  },
  {
    name: "Adwuma MarketPlace",
    description:
      "A comprehensive freelance marketplace platform, enabling freelancers and clients to connect and collaborate on various projects.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "microservice",
        color: "green-text-gradient",
      },
      {
        name: "websocket",
        color: "pink-text-gradient",
      },
      {
        name: "rabbitmq",
        color: "orange-text-gradient",
      },
    ],
    image: adwuma,
    web_link: "#",
    source_code_link: "https://github.com/dt4real/adwuma",
  },
];

export { services, technologies, experiences, testimonials, projects };
