import { useState } from "react";

import { Project } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectGalleryModal } from "./ProjectGalleryModal";
import { cn } from "./ui/utils";

interface ProjectGalleryGridProps {
  projects: Project[];
  className?: string;
}

export function ProjectGalleryGrid({
  projects,
  className,
}: ProjectGalleryGridProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(
    null,
  );

  return (
    <>
      <div
        className={cn(
          "grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-x-10 md:gap-y-16",
          className,
        )}
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onClick={setSelectedProject}
          />
        ))}
      </div>

      <ProjectGalleryModal
        open={selectedProject !== null}
        project={selectedProject}
        onOpenChange={(nextOpen) => {
          if (!nextOpen) {
            setSelectedProject(null);
          }
        }}
      />
    </>
  );
}
