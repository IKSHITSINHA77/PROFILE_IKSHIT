'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/src/utils/animationVariants';

export default function Certificates() {
  const certificates = [
    { title: 'TECHgium Finalist 2025', issuer: 'Tech Summit India' },
    { title: 'AI Engineering Specialist', issuer: 'Online Platform' },
    { title: 'Full Stack Developer', issuer: 'Dev Academy' },
  ];

  return (
    <section id="certificates" className="relative w-full py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Certifications
          </span>
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          className="grid md:grid-cols-3 gap-6"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="p-6 rounded-lg bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/20 hover:border-cyan-400/50 transition-all"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <p className="text-cyan-400 font-semibold mb-2">{cert.title}</p>
              <p className="text-gray-400 text-sm">{cert.issuer}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
