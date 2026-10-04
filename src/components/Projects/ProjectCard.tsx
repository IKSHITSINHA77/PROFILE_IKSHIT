'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
}

export default function ProjectCard({ title, description, tags, link, github }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10, boxShadow: '0 0 30px rgba(34, 211, 238, 0.3)' }}
      className="group h-full rounded-lg bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/20 p-6 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden"
    >
      {/* Glowing top border on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
          {title}
        </h3>

        <p className="text-gray-400 text-sm mb-4 leading-relaxed">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {link && (
            <motion.a
              href={link}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 transition-colors text-sm"
            >
              <ExternalLink size={16} />
              View
            </motion.a>
          )}
          {github && (
            <motion.a
              href={github}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-700/50 text-gray-300 hover:bg-slate-700/80 transition-colors text-sm"
            >
              <Code size={16} />
              Code
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
