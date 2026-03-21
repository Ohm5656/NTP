import { ArrowUpRight, Images } from "lucide-react";
import { motion } from "motion/react";

import { Project } from "../../data/projects";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: (project: Project) => void;
}

export function ProjectCard({
  project,
  index,
  onClick,
}: ProjectCardProps) {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.985 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      onClick={() => onClick(project)}
      aria-label={`เปิดแกลเลอรีโครงการ ${project.titleTh}`}
      aria-haspopup="dialog"
      className="group overflow-hidden rounded-[28px] border border-slate-200/80 bg-white text-left shadow-[0_18px_60px_-28px_rgba(15,23,42,0.28)] transition-colors hover:border-[#1a3a6b]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dc2626] focus-visible:ring-offset-4"
    >
      <div className="relative overflow-hidden rounded-[28px]">
        <div className="absolute inset-x-0 top-0 z-10 flex items-start justify-between gap-3 p-5">
          <span className="rounded-full border border-white/60 bg-white/92 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#1a3a6b] shadow-sm backdrop-blur-md">
            {project.categoryTh}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-[#1a3a6b]/10 bg-[#1a3a6b]/85 px-3 py-1.5 text-xs font-medium text-white shadow-sm backdrop-blur-md">
            <Images size={14} />
            {project.images.length}
          </span>
        </div>

        <div className="relative h-72 overflow-hidden bg-slate-100">
  <ImageWithFallback
    src={project.coverImage}
    alt={project.titleTh}
    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/10 via-transparent to-transparent" />
</div>
      </div>

      <div className="space-y-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold tracking-tight text-[#1a3a6b]">
              {project.titleTh}
            </h3>
            <p className="line-clamp-3 text-sm leading-7 text-slate-600 sm:text-[15px]">
              {project.descriptionTh}
            </p>
          </div>

          <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#1a3a6b]/10 bg-slate-50 text-[#1a3a6b] transition-colors group-hover:border-[#dc2626]/20 group-hover:bg-[#dc2626] group-hover:text-white">
            <ArrowUpRight size={18} />
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-slate-100 pt-4 text-sm">
          <span className="text-slate-500">
            {project.locationTh ?? project.location}
          </span>
          <span className="font-medium text-[#1a3a6b]">
            {project.year}
          </span>
        </div>
      </div>
    </motion.button>
  );
}
