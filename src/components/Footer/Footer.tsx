'use client';

import { motion } from 'framer-motion';
import { Code, User, Mail, Globe } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Code, href: '#', label: 'GitHub' },
    { icon: User, href: '#', label: 'LinkedIn' },
    { icon: Globe, href: '#', label: 'Website' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <footer className="relative w-full bg-gradient-to-t from-slate-900 to-slate-800/50 border-t border-cyan-500/20 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Ikshit
            </p>
            <p className="text-gray-400 text-sm mt-2">AI Engineer & Full Stack Developer</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <p className="font-semibold mb-4 text-white">Quick Links</p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-cyan-400 cursor-pointer transition">About</li>
              <li className="hover:text-cyan-400 cursor-pointer transition">Projects</li>
              <li className="hover:text-cyan-400 cursor-pointer transition">Skills</li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <p className="font-semibold mb-4 text-white">Connect</p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={index}
                    href={link.href}
                    whileHover={{ scale: 1.2, color: '#06b6d4' }}
                    className="text-gray-400 hover:text-cyan-400 transition"
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="pt-8 border-t border-cyan-500/20 text-center text-gray-500 text-sm"
        >
          <p>© 2026 Ikshit. Built with Next.js, React, and Tailwind CSS.</p>
        </motion.div>
      </div>
    </footer>
  );
}
