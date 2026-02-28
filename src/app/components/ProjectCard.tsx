import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group cursor-pointer"
    >
      <div className="relative h-64 overflow-hidden">
        <ImageWithFallback
          src={project.image}
          alt={project.titleTh}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-[#dc2626] text-white px-3 py-1 rounded text-sm font-medium">
          {project.categoryTh}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl text-[#1a3a6b] mb-2 font-semibold">{project.titleTh}</h3>
        <p className="text-gray-600 leading-relaxed">{project.descriptionTh}</p>
      </div>
    </motion.div>
  );
}
