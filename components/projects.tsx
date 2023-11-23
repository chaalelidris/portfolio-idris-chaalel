"use client";

import React, { useCallback, useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  // Function to filter projects based on selected filter
  const filteredProjects = projectsData.filter((project) => {
    const filterParam = searchParams.get("filter");

    if (!filterParam || filterParam === "all") {
      return true;
    } else {
      // Adjust the condition based on your project data structure and filtering criteria
      return project.category.includes(filterParam);
    }
  });

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>

      {/* Filter buttons */}
      <div className="flex justify-center mb-4 gap-2">
        <button
          className={` dark:text-white/80 hover:cursor-pointer hover:bg-slate-100 dark:hover:bg-white/20  text-gray-800  py-1 px-2 border border-slate-300 rounded-full shadow ${
            searchParams.get("filter") === "All"
              ? "bg-gray-100 dark:bg-white/20 font-semibold"
              : "bg-white dark:bg-white/10 font-light"
          }`}
          onClick={() => {
            router.push(
              pathname + "?" + createQueryString("filter", "All") + "#projects"
            );
          }}
        >
          All
        </button>
        <button
          className={` dark:text-white/80 hover:cursor-pointer hover:bg-slate-100 dark:hover:bg-white/20  text-gray-800  py-1 px-2 border border-slate-300 rounded-full shadow 
          ${
            searchParams.get("filter") === "backend"
              ? "bg-gray-100 dark:bg-white/20 font-semibold"
              : "bg-white dark:bg-white/10 font-light"
          }`}
          onClick={() => {
            router.push(
              pathname +
                "?" +
                createQueryString("filter", "backend") +
                "#projects"
            );
          }}
        >
          Backend
        </button>
        <button
          className={` dark:text-white/80 hover:cursor-pointer hover:bg-slate-100 dark:hover:bg-white/20  text-gray-800  py-1 px-2 border border-slate-300 rounded-full shadow ${
            searchParams.get("filter") === "frontend"
              ? "bg-gray-100 dark:bg-white/20 font-semibold"
              : "bg-white dark:bg-white/10 font-light"
          }`}
          onClick={() => {
            router.push(
              pathname +
                "?" +
                createQueryString("filter", "frontend") +
                "#projects"
            );
          }}
        >
          Frontend
        </button>
        <button
          className={` dark:text-white/80 hover:cursor-pointer hover:bg-slate-100 dark:hover:bg-white/20  text-gray-800  py-1 px-2 border border-slate-300 rounded-full shadow ${
            searchParams.get("filter") === "mini-projects"
              ? "bg-gray-100 dark:bg-white/20 font-semibold"
              : "bg-white dark:bg-white/10 font-light"
          }`}
          onClick={() => {
            router.push(
              pathname +
                "?" +
                createQueryString("filter", "mini-projects") +
                "#projects"
            );
          }}
        >
          Mini Projects
        </button>
        {/* Add more filter buttons as needed */}
      </div>

      {/* Display filtered projects */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {filteredProjects &&
          filteredProjects.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))}
      </div>
    </section>
  );
}
