import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import TechStack from '../components/TechStack';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Education from '../components/Education';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <TechStack />
      <Experience />
      <Projects />
      <Certifications />
      <Education />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
