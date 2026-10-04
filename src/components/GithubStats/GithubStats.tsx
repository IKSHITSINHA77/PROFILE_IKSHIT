'use client';

import { motion } from 'framer-motion';

export default function GithubStats() {
  return (
    <section id="github" className="relative w-full py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-center"
        >
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            GitHub
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center text-gray-400 text-lg mb-10"
        >
          Explore my code, projects, and open-source work.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex justify-center"
        >
          <a
            href="https://github.com/IKSHITSINHA77"
            target="_blank"
            rel="noreferrer"
            className="px-7 py-3 rounded-lg border border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 transition"
          >
            Visit GitHub Profile →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
