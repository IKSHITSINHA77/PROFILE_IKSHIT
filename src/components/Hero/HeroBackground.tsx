'use client';

import useMousePosition from '@/src/hooks/useMousePosition';
import { motion } from 'framer-motion';

export default function HeroBackground() {
  const mousePosition = useMousePosition();

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Starfield */}
      <div className="absolute inset-0">
        {Array.from({ length: 100 }).map((_, i) => {
          const randomX = Math.random() * 100;
          const randomY = Math.random() * 100;
          const randomDuration = 3 + Math.random() * 4;
          const randomDelay = Math.random() * 2;

          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${randomX}%`,
                top: `${randomY}%`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: randomDuration,
                delay: randomDelay,
                repeat: Infinity,
              }}
            />
          );
        })}
      </div>

      {/* Gradient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />

      {/* Mouse glow effect */}
      <motion.div
        className="fixed w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: mousePosition.x - 128,
          y: mousePosition.y - 128,
        }}
        transition={{
          type: 'spring',
          stiffness: 50,
          damping: 30,
        }}
      />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
    </div>
  );
}
