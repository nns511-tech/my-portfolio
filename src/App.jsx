import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contacts from './components/Contacts';
import CustomCursor from './components/CustomCursor';
import Reveal from './components/Reveal';

function App() {
  return (
    <div className="bg-[#FDFBF7] text-slate-800 min-h-screen font-sans scroll-smooth selection:bg-sky-200 selection:text-sky-900">
      {/* Kursor interaktif */}
      <CustomCursor />

      <Navbar />
      <main>
        <Reveal>
          <Hero />
        </Reveal>

        <Reveal delay={0.1}>
          <About />
        </Reveal>

        <Reveal delay={0.1}>
          <Experience />
        </Reveal>

        <Reveal delay={0.1}>
          <Projects />
        </Reveal>

        <Reveal delay={0.1}>
          <Skills />
        </Reveal>

        <Reveal delay={0.1}>
          <Contacts />
        </Reveal>
      </main>

      <footer className="text-center py-6 text-slate-500 text-sm border-t border-sky-100 bg-white/50">
        © {new Date().getFullYear()} Najwa. Dibuat dengan React & Tailwind CSS.
      </footer>
    </div>
  );
}

export default App;