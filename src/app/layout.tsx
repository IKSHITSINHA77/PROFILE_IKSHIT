import type { Metadata } from 'next';
import './globals.css';
import Loader from '@/components/Loader/Loader';

export const metadata: Metadata = {
  title: 'Ikshit Portfolio - AI Engineer & Full Stack Developer',
  description: 'Personal portfolio showcasing AI projects, full stack development, and open source contributions.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black text-white">
        <Loader />
        {children}
      </body>
    </html>
  );
}
