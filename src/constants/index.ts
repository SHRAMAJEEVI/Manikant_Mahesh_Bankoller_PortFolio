// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  FaGithub,
  FaLinkedin,
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiDjango,
  SiMysql,
  SiLeetcode,
  SiHackerrank,
  SiC,
} from "react-icons/si";

import {
  mobile,
  backend,
  creator,
  web,
  project1,
  projectImage,
  html,
  css,
  javascript,
  java,
  python,
  django,
  reactjs,
  git,
  mysql,
  c,
  youtube,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "certifications",
    title: "Certifications",
    link: "/certifications",
  },
  {
    id: "source-code",
    title: "Source Code",
    link: "https://github.com/SHRAMAJEEVI/Manikant_Mahesh_Bankoller_PortFolio",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Full stack Developer",
    icon: web,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Java", icon: java },
  { name: "Python", icon: python },
  { name: "Django", icon: django },
  { name: "React", icon: reactjs },
  { name: "Git", icon: git },
  { name: "MySQL", icon: mysql },
  { name: "C", icon: c },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Software Engineer Intern",
    company_name: "Yuga Yatra Retail (OPC) Pvt. Ltd.",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "Mar 2026 – Present",
    points: [
      "Gaining hands-on experience in developing websites and applications using Cursor AI, Firebase Studio, and modern AI-powered development tools.",
      "Working on integrating AI technologies into software workflows.",
      "Designing UI assets, product creatives, and visual components using Canva.",
      "Managing seller portals for Amazon and Flipkart.",
    ],
  },
  {
    title: "Java Programming Intern",
    company_name: "InternPe",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "25th August 2025 – 21st September 2025",
    points: [
      "Gained hands-on experience in Java programming and problem-solving.",
      "Developed multiple Java projects during the internship period.",
      "Strengthened technical skills through practical project development.",
      "Collaborated with team members on software development tasks.",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [] as const;

// Projects
export const PROJECTS = [
  {
    name: "Artisan Market Place",
    description:
      "A secure web marketplace for artisans to showcase and sell handcrafted products online. The platform includes admin approval for newly added products, ensuring authenticity and quality. Customers can browse approved items, add to cart, and place orders.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "SQLite",
        color: "pink-text-gradient",
      },
    ],
    image: projectImage,
    source_code_link: "https://github.com/SHRAMAJEEVI/Artisan._.Market._.place",
    live_site_link: "https://artisan-market-place.onrender.com/",
  },
] as const;

export const SOCIALS = [
  {
    name: "GitHub",
    icon: FaGithub,
    link: "https://github.com/SHRAMAJEEVI",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/manikant-mahesh-bankoller-490b8b294/",
  },
  {
    name: "LeetCode",
    icon: SiLeetcode,
    link: "https://leetcode.com/u/Manikant07/",
  },
  {
    name: "HackerRank",
    icon: SiHackerrank,
    link: "https://www.hackerrank.com/profile/bankollermanika1",
  },
] as const;
