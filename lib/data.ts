import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
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
    icon: React.createElement(FaReact),
    date: "Apr 2021 - Sep 2021",
  },
  {
    title: "MACHINE LEARNING DEVELOPER",
    location: "",
    description:
      "Machine learning developer of the 'Dynamic Hand Gesture Recognition' project using 2D & 3D CNN.",
    icon: React.createElement(FaReact),
    date: "May 2022 - Jul 2022",
  },
  {
    title: "DJANGO WEB DEVELOPER",
    location: "",
    description:
      "Machine learning developer of the 'Dynamic Hand Gesture Recognition' project using 2D & 3D CNN.",
    icon: React.createElement(FaReact),
    date: "Aug 2022 - Nov 2022",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
