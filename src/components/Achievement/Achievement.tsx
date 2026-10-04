'use client';

import { motion } from 'framer-motion';
import Counter from './Counter';
import { fadeInUp } from '@/src/utils/animationVariants';

export default function Achievement() {
  return (
    <section id="achievements" className="relative w-full py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Achievements & Impact
          </span>
        </motion.h2>

        {/* Counters */}
        <motion.div variants={fadeInUp} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <Counter />
        </motion.div>
      </div>
    </section>
  );
}
