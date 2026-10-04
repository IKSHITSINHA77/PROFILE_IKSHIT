'use client';

import { motion } from 'framer-motion';

export default function GithubStats() {
  return (
    <section id="github" className="relative w-full py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            GitHub Activity
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="p-8 rounded-lg bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/20 text-center"
        >
          <p className="text-gray-400">GitHub stats integration coming soon...</p>
        </motion.div>
      </div>
    </section>
  );
}
