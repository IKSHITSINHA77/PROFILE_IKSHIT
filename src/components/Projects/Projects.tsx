'use client';

import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projects } from '@/src/data/projects';
import { staggerContainer, fadeInUp } from '@/src/utils/animationVariants';

export default function Projects() {
  return (
    <section id="projects" className="relative w-full py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-center"
        >
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-gray-400 text-lg mb-12"
        >
          Innovative solutions crafted with cutting-edge technologies
        </motion.p>

        {/* Projects grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={fadeInUp}>
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                link={project.link}
                github={project.github}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
