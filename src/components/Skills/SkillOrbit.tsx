'use client';

import { motion } from 'framer-motion';
import { skills } from '@/src/data/skills';

export default function SkillOrbit() {
  const centerX = 50;
  const centerY = 50;
  const radius = 35;
  const skillCount = skills.length;

  return (
    <div className="w-full h-96 md:h-[500px] flex items-center justify-center relative">
      {/* Central glowing orb */}
      <motion.div
        className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-2xl shadow-cyan-500/50"
        animate={{
          scale: [1, 1.1, 1],
          boxShadow: [
            '0 0 40px rgba(34, 211, 238, 0.5)',
            '0 0 60px rgba(34, 211, 238, 0.8)',
            '0 0 40px rgba(34, 211, 238, 0.5)',
          ],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="w-full h-full rounded-full flex items-center justify-center text-xl font-bold text-black">
          Skills
        </div>
      </motion.div>

      {/* Orbiting skills */}
      <svg className="absolute w-full h-full" style={{ overflow: 'visible' }}>
        {/* Orbit circles */}
        <circle
          cx={`${centerX}%`}
          cy={`${centerY}%`}
          r={`${radius}%`}
          fill="none"
          stroke="rgba(34, 211, 238, 0.1)"
          strokeDasharray="5,5"
        />
      </svg>

      {/* Skills positioned around the orbit */}
      {skills.map((skill, index) => {
        const angle = (360 / skillCount) * index;
        const radian = (angle * Math.PI) / 180;
        const x = centerX + radius * Math.cos(radian);
        const y = centerY + radius * Math.sin(radian);

        return (
          <motion.div
            key={skill.id}
            className="absolute"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <motion.div
              animate={{
                rotate: [0, -360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="w-20 h-20 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-400/50 flex flex-col items-center justify-center hover:border-cyan-300 transition-all duration-300"
              whileHover={{
                scale: 1.2,
                boxShadow: '0 0 30px rgba(34, 211, 238, 0.6)',
              }}
            >
              <span className="text-3xl mb-1">{skill.icon}</span>
              <span className="text-xs font-semibold text-center text-cyan-300">{skill.name}</span>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
