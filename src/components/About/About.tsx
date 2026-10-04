'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/src/utils/animationVariants';

export default function About() {
  const achievements = [
    { label: 'CGPA', value: '8.6' },
    { label: 'TECHgium', value: 'Finalist' },
    { label: 'Role', value: 'AI Engineer' },
    { label: 'Students', value: '62.6K' },
  ];

  return (
    <section id="about" className="relative w-full py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            About Me
          </span>
        </motion.h2>

        {/* Content grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          {/* Text content */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm Ikshit Sinha, an AI Engineer and Full-Stack Developer from Bangalore, India. Currently pursuing a degree in Computer Science with specialization in Cybersecurity at Dayananda Sagar Academy of Technology and Management.
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              My passion lies in building intelligent, scalable solutions. I specialize in developing agentic AI systems, full-stack applications, and leveraging cutting-edge technologies like LLMs, computer vision, and multi-model architectures.
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              As a national finalist in L&T TECHgium among 62,600+ students and 540 colleges, I've demonstrated commitment to innovation. I'm constantly learning, building, and contributing to open-source projects.
            </p>
          </motion.div>

          {/* Achievement cards */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 rounded-lg bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/20 backdrop-blur-sm"
              >
                <p className="text-cyan-400 text-sm font-mono mb-2">{achievement.label}</p>
                <p className="text-2xl font-bold text-white">{achievement.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Education section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 p-8 rounded-lg bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-cyan-500/20"
        >
          <h3 className="text-2xl font-bold text-cyan-300 mb-6">Education</h3>
          <div className="space-y-4">
            <div className="border-l-2 border-cyan-400 pl-4">
              <p className="font-semibold text-white text-lg">BTech Computer Science (Cybersecurity)</p>
              <p className="text-cyan-400 text-sm">Dayananda Sagar Academy of Technology and Management</p>
              <p className="text-gray-400 text-sm">CGPA: 8.6</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
