'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CounterProps {
  end: number;
  label: string;
}

function CounterItem({ end, label }: CounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const duration = 2000; // 2 seconds

    const updateCount = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const newCount = Math.floor(progress * end);
      setCount(newCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isVisible, end]);

  return (
    <motion.div
      onViewportEnter={() => setIsVisible(true)}
      className="p-8 rounded-lg bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/20 text-center hover:border-cyan-400/50 transition-all duration-300"
      whileHover={{ scale: 1.05, y: -10 }}
    >
      <p className="text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text mb-2">
        {count}+
      </p>
      <p className="text-gray-400 text-lg">{label}</p>
    </motion.div>
  );
}

export default function Counter() {
  const counters = [
    { end: 62600, label: 'Students Reached' },
    { end: 540, label: 'Colleges' },
    { end: 86, label: 'CGPA ×10' },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {counters.map((counter, index) => (
        <CounterItem key={index} end={counter.end} label={counter.label} />
      ))}
    </div>
  );
}
