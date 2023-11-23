import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import logoNewsize from "@/public/projects/logo-newsize.png";
import imageEcms from "@/public/projects/portfolio-comite-managment-system.png";
import imageIdris from "@/public/projects/portfolio-idris-chaalel.png";
import imageMigfarm from "@/public/projects/portfolio-migfarm-project.png";
import imageSihate from "@/public/projects/portfolio-sihate-healthcare.png";
import imageTripnest from "@/public/projects/portfolio-tripnest.png";
import { typeProject } from "@/d";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineering Student",
    location: "Higher School Of Computer Science ESI-SBA - Algeria",
    description: "",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2020 - Jul 2023",
  },
  {
    title: "FULL STACK DEVELOPER",
    location: "",
    description:
      "Full stack developer of the Tripnest project, a platform for real estate rental services. Tripnest is built using the latest modern web technologies including Next.js 13, Prisma ORM, MongoDB, and more. It provides features for property listing, search, booking, and payment integration.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2023 - Present",
  },
  {
    title: "Freelancer",
    location: "Mostaql",
    description:
      "As a freelance professional on Mostaql. Through effective communication and timely delivery, I consistently exceeded client expectations. This experience honed my ability to adapt to project requirements and work collaboratively in a remote environment. establishing a reputation for reliability and quality work.",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2022",
  },
  {
    title: "WEB DEVELOPER | BACKEND & FRONTEND",
    location: "",
    description:
      "Web developer of “Educational committee management system - ECMS”, a project that involves the study, design, and implementation of a platform for managing committees within the Guelma University departments. It enables effective administration and control of course leaders while collecting and tracking educational activity progress from teachers and student delegates.",
    icon: React.createElement(CgWorkAlt),
    date: "Apr 2020 - Sep 2020",
  },
  {
    title: "PROJECT MANAGER & WEB DEVELOPER",
    location: "",
    description:
      "Project Manager and web developer of “Sihate”, a medical records management system that allows patients to make appointments and enables doctors to generate medical records and prescriptions. It was developed using Django Python framework, HTML5, CSS3, Bootstrap 5, and JavaScript.",
    icon: React.createElement(CgWorkAlt),
    date: "Apr 2021 - Sep 2021",
  },
  {
    title: "MACHINE LEARNING DEVELOPER",
    location: "",
    description:
      "Machine learning developer of the 'Dynamic Hand Gesture Recognition' project using 2D & 3D CNN.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2022 - Jul 2022",
  },
  {
    title: "DJANGO WEB DEVELOPER",
    location: "",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2022 - Nov 2022",
  },
] as const;

export const projectsData: typeProject[] = [
  {
    title: "Tripnest-Real estates rental platform",
    description:
      "I worked as a full-stack developer on this startup project. catering to the Algerian market. Built with modern web technologies including Next.js 13, React Js,Prisma ORM, MongoDB, and more to build a robust and user-friendly platform. It offer features such as property listing,search, booking, and payment integration, providing a seamless rental experience for users.",
    tags: [
      "React",
      "Next.js",
      "MongoDB",
      "Tailwind",
      "Prisma",
      "Typescript",
      "OAUTH2",
    ],
    imageUrl: imageTripnest,
    category: ["All", "backend", "frontend"],
  },
  {
    title: "ECMS",
    description:
      "Educational Committee Management System ECMS for managing committees in the University of Guelma departments.",
    tags: ["Php", "Html", "Css", "Javascript", "Jquery"],
    imageUrl: imageEcms,
    category: ["All", "backend", "frontend"],
  },
  {
    title: "Sihate",
    description:
      "Medical records management system allowing patients to make appointments and enabling doctors to generate medical records and prescriptions.",
    tags: ["Html", "Css", "MySQL", "Bootstrap", "Python", "Django"],
    imageUrl: imageSihate,
    category: ["All", "backend", "frontend"],
  },
  {
    title: "Teamchat",
    description:
      "TeamChat: A cutting-edge team communication app developed with Next.js, React, TypeScript, and Prisma ORM, TeamChat offers real-time messaging, a sleek UI, and robust scalability. Leveraging TypeScript for type safety and Prisma ORM for efficient data management, it delivers a dynamic and reliable solution for seamless team collaboration.",
    tags: ["React", "Next.js", "MySQL", "Tailwind", "Prisma"],
    imageUrl: undefined,
    category: ["All", "backend", "frontend"],
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
] as const;
