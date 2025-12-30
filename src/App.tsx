import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

// Main App Component
export default function App() {
  return (
      <div className="h-screen overflow-y-auto snap-y snap-mandatory bg-slate-950 text-slate-300 font-sans scroll-smooth">
        <Navbar />
        <div className="snap-start min-h-screen flex flex-col justify-center items-center">
          <Hero />
        </div>
        <div className="snap-start min-h-screen flex flex-col justify-center items-center">
          <Projects />
        </div>
        <div className="snap-start min-h-screen flex flex-col justify-center items-center">
          <About />
        </div>
        <div className="snap-start min-h-screen flex flex-col justify-center items-center">
          <Blog />
        </div>
        <div className="snap-start min-h-screen flex flex-col items-center">
          <div className="flex-grow flex flex-col justify-center w-full items-center">
            <Contact />
          </div>
          <Footer />
        </div>
      </div>
  );
}
