'use client';

import useMousePosition from '@/src/hooks/useMousePosition';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const mousePosition = useMousePosition();

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed w-4 h-4 rounded-full bg-cyan-400 pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{
          type: 'spring',
          stiffness: 1000,
          damping: 40,
        }}
      />

      {/* Cursor ring/trail */}
      <motion.div
        className="fixed w-8 h-8 border-2 border-cyan-400/50 rounded-full pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 30,
        }}
      />

      {/* Glow effect */}
      <motion.div
        className="fixed w-12 h-12 rounded-full bg-cyan-400/10 pointer-events-none z-50 blur-xl"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 50,
        }}
      />
    </>
  );
}
