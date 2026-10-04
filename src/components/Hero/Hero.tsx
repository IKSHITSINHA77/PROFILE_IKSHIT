'use client';

import { motion } from 'framer-motion';
import HeroBackground from './HeroBackground';
import TypingText from './TypingText';
import { fadeInUp } from '@/src/utils/animationVariants';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background */}
      <HeroBackground />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto px-4"
        initial="initial"
        animate="animate"
        variants={{
          animate: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {/* Main greeting */}
        <motion.div variants={fadeInUp}>
          <p className="text-cyan-400 text-lg md:text-xl font-mono mb-4">Hello, World! 👋</p>
        </motion.div>

        {/* Main title */}
        <motion.h1
          variants={fadeInUp}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
            Hi, I'm
          </span>
          <br />
          <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
            IKSHIT SINHA
          </span>
        </motion.h1>

        {/* Typing animation */}
        <motion.div variants={fadeInUp} className="mb-8">
          <TypingText />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={fadeInUp}
          className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-12"
        >
          Building AI-powered solutions, crafting elegant code, and pushing the boundaries of what's
          possible with modern technology.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(34, 211, 238, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-bold text-lg transition-all duration-200"
          >
            View My Work
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(34, 211, 238, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg border-2 border-cyan-400 text-cyan-400 font-bold text-lg hover:bg-cyan-400/10 transition-all duration-200"
          >
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-cyan-400"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
