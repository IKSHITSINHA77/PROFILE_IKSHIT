import Navbar from '../components/Navbar/Navbar';
import ParticleBackground from '../components/Particles/ParticleBackground';
import CustomCursor from '../components/Cursor/CustomCursor';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import Timeline from '../components/Timeline/Timeline';
import Achievement from '../components/Achievement/Achievement';
import Certificates from '../components/Certificates/Certificates';
import GithubStats from '../components/GithubStats/GithubStats';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

export default function HomePage() {
  return (
    <main className="relative bg-black overflow-hidden">
      {/* Particle background */}
      <ParticleBackground />

      {/* Custom cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
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
