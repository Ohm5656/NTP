import { motion } from 'motion/react';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../../data/projects';

export function ProjectsPage() {
  return (
    <div className="min-h-screen pt-20 pb-32 lg:pb-20">
      {/* Header Section */}
      <section className="bg-[#1a3a6b] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl text-white mb-6"
          >
            โครงการทั้งหมด
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            แสดงผลงานโครงการวิศวกรรมไฟฟ้าที่ประสบความสำเร็จของเราในอุตสาหกรรมต่างๆ
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-gray-600"
          >
            แสดง {projects.length} โครงการ
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1a3a6b]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl text-white mb-6">
              พร้อมเริ่มโครงการของคุณ?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              ติดต่อเราวันนี้เพื่อหารือเกี่ยวกับความต้องการเฉพาะของคุณและรับโซลูชั่นที่เหมาะสมสำหรับโครงการของคุณ
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#dc2626] hover:bg-[#b91c1c] text-white px-8 py-4 rounded-md transition-colors text-lg font-medium"
            >
              ติดต่อเรา
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}