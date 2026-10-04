'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-2xl mx-auto p-8 rounded-lg bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/20"
        >
          <p className="text-gray-300 text-center mb-8 text-lg">
            Let's build something amazing together. Feel free to reach out!
          </p>

          {/* Contact options */}
          <div className="space-y-6 mb-8">
            {/* Email */}
            <motion.a
              href="mailto:ikshitsinha77@email.com"
              whileHover={{ scale: 1.05, x: 10 }}
              className="flex items-center gap-4 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition"
            >
              <Mail className="text-cyan-400" size={24} />
              <div>
                <p className="text-gray-300 font-semibold">Email</p>
                <p className="text-cyan-400 text-sm">ikshitsinha77@email.com</p>
              </div>
            </motion.a>

            {/* Phone */}
            <motion.a
              href="tel:+916201686230"
              whileHover={{ scale: 1.05, x: 10 }}
              className="flex items-center gap-4 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition"
            >
              <Phone className="text-cyan-400" size={24} />
              <div>
                <p className="text-gray-300 font-semibold">Phone</p>
                <p className="text-cyan-400 text-sm">+91 6201686230</p>
              </div>
            </motion.a>

            {/* Location */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition"
            >
              <MapPin className="text-cyan-400" size={24} />
              <div>
                <p className="text-gray-300 font-semibold">Location</p>
                <p className="text-cyan-400 text-sm">Bangalore, India</p>
              </div>
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
          >
            Send Me An Email
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
