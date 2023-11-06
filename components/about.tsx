"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 text-justify">
        <span className="text-xl font-semibold block">
          I'm Idris Chaalel, Software Engineer | WEB3.0 enthusiast
        </span>{" "}
        Hi there! My name is Idris, and I'm a software engineer with a passion
        for creating innovative and practical solutions to real-world problems.
        With my strong background in computer science, I have a deep
        understanding of software development and design principles. My goal is
        to use my skills to help businesses and individuals achieve their
        objectives and make their mark in the digital world. I specialize in
        Backend development (server-side languages such as Python, PHP, Java,
        JavaScript, etc.), Database design and management, Technical
        problem-solving and debugging, and I'm always eager to take on new
        challenges and learn new skills.
      </p>
    </motion.section>
  );
}
