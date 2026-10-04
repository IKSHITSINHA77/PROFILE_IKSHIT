'use client';

import { motion } from 'framer-motion';
import { certificates } from '@/src/data/certificates';
import { fadeInUp, staggerContainer } from '@/src/utils/animationVariants';

export default function Certificates() {
  return (
    <section id="certificates" className="relative w-full py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-center"
        >
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Certifications
          </span>
        </motion.h2>
        <p className="text-center text-gray-400 text-lg mb-12">
          Credentials that support my AI, programming, cloud, and database foundations.
        </p>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              variants={fadeInUp}
              className="p-6 rounded-lg bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/20 hover:border-cyan-400/50 transition-all"
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <p className="text-cyan-400 font-semibold mb-2">{cert.title}</p>
              <p className="text-gray-300 text-sm">{cert.issuer}</p>
              <p className="text-gray-500 text-xs mt-3">{cert.date}</p>
              <p className="text-gray-400 text-sm mt-3 leading-relaxed">{cert.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
