'use client';

import { motion } from 'framer-motion';
import SkillOrbit from './SkillOrbit';
import { fadeInUp } from '@/src/utils/animationVariants';

export default function Skills() {
  return (
    <section id="skills" className="relative w-full py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-center"
        >
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Skills & Technologies
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={fadeInUp}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-gray-400 text-lg mb-12"
        >
          A constellation of technologies I work with
        </motion.p>

        {/* Skill Orbit */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <SkillOrbit />
        </motion.div>
      </div>
    </section>
  );
}
