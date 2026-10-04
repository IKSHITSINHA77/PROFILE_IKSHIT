'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsLoading(false);
          return 100;
        }
        return prev + Math.random() * 30;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  if (!isLoading && progress >= 100) {
    return null;
  }

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background animated gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Loading content */}
      <div className="relative z-10 text-center">
        {/* Animated title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            INITIALIZING
          </h1>
          <p className="text-lg md:text-xl text-cyan-300 font-mono tracking-widest">
            AI PORTFOLIO...
          </p>
        </motion.div>

        {/* Progress bar container */}
        <div className="w-64 md:w-80 mx-auto">
          {/* Glowing background effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-30 animate-pulse" />

          {/* Progress bar */}
          <div className="relative bg-slate-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-full h-2 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 rounded-full shadow-lg shadow-cyan-500/50"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ type: 'spring', stiffness: 50, damping: 20 }}
            />
          </div>

          {/* Progress text */}
          <motion.p
            className="text-cyan-300 text-sm md:text-base font-mono mt-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {Math.min(Math.round(progress), 100)}%
          </motion.p>
        </div>

        {/* Loading dots animation */}
        <div className="flex justify-center gap-2 mt-8">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-cyan-400 rounded-full"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 0.6,
                delay: i * 0.2,
                repeat: Infinity,
              }}
            />
          ))}
        </div>

        {/* Status text */}
        <motion.p
          className="text-cyan-500/60 text-xs md:text-sm font-mono mt-6 tracking-widest"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {progress < 30 && 'LOADING ASSETS...'}
          {progress >= 30 && progress < 60 && 'INITIALIZING COMPONENTS...'}
          {progress >= 60 && progress < 90 && 'CONNECTING SERVICES...'}
          {progress >= 90 && 'READY FOR DEPLOYMENT'}
        </motion.p>
      </div>
    </motion.div>
  );
}
