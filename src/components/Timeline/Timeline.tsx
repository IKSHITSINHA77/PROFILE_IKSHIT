'use client';

import { motion } from 'framer-motion';
import { timeline } from '@/src/data/timeline';
import { fadeInUp, staggerContainer } from '@/src/utils/animationVariants';

export default function Timeline() {
  return (
    <section id="timeline" className="relative w-full py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            My Journey
          </span>
        </motion.h2>

        {/* Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {timeline.map((item, index) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              className="relative pl-8"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-lg shadow-cyan-500/50" />

              {/* Connecting line */}
              {index < timeline.length - 1 && (
                <div className="absolute left-2 top-6 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/50 to-transparent" />
              )}

              {/* Content */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-2xl font-bold text-cyan-400">{item.year}</span>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
