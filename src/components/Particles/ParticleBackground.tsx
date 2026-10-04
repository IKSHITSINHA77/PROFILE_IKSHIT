'use client';

import { motion } from 'framer-motion';

export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {Array.from({ length: 50 }).map((_, i) => {
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        const randomDuration = 10 + Math.random() * 20;
        const randomDelay = Math.random() * 5;

        return (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/60 rounded-full"
            style={{
              left: `${randomX}%`,
              top: `${randomY}%`,
            }}
            animate={{
              y: [0, Math.random() > 0.5 ? 100 : -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: randomDuration,
              delay: randomDelay,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        );
      })}
    </div>
  );
}
