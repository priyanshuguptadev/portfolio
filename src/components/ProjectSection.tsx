import React from "react";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../data/projects";

const ProjectSection: React.FC = () => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
          Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
