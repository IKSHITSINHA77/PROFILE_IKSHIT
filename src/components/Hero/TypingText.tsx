'use client';

import { TypeAnimation } from 'react-type-animation';

export default function TypingText() {
  return (
    <div className="text-xl md:text-2xl font-semibold text-cyan-300 h-10">
      <TypeAnimation
        sequence={[
          'AI Engineer',
          2000,
          'Backend Developer',
          2000,
          'Cybersecurity Enthusiast',
          2000,
          'Open Source Contributor',
          2000,
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        style={{ display: 'inline-block' }}
      />
    </div>
  );
}
