import Navbar from '@/src/components/Navbar/Navbar';
import ParticleBackground from '@/src/components/Particles/ParticleBackground';
import CustomCursor from '@/src/components/Cursor/CustomCursor';
import Hero from '@/src/components/Hero/Hero';
import About from '@/src/components/About/About';
import Skills from '@/src/components/Skills/Skills';
import Projects from '@/src/components/Projects/Projects';
import Timeline from '@/src/components/Timeline/Timeline';
import Achievement from '@/src/components/Achievement/Achievement';
import Certificates from '@/src/components/Certificates/Certificates';
import GithubStats from '@/src/components/GithubStats/GithubStats';
import Contact from '@/src/components/Contact/Contact';
import Footer from '@/src/components/Footer/Footer';

export default function HomePage() {
  return (
    <main className="relative bg-black overflow-hidden">
      <ParticleBackground />
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Achievement />
      <Certificates />
      <GithubStats />
      <Contact />
      <Footer />
    </main>
  );
}
