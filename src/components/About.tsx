import { Linkedin, Github } from 'lucide-react';

export const About = () => {
  return (
      <section id="about" className="w-[80%] mx-auto py-8 md:py-16">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-8 shadow-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">A little about me...</h1>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-indigo-400 mb-3">Introduction</h3>
              <p className="leading-relaxed text-slate-300">
                Hey there! I'm Eric Trinque, an enthusiastic programmer with little over 3 years of learning & experience spanning multiple domains. I'm currently in the process of building a portfolio to showcase my skills and projects. My coding journey has been eclectic, with languages like GO, JavaScript/TypeScript, C family (C, C++, C#), and Python forming the crux of my expertise. Frameworks like React, Vue, Alpine, Svelte, HTMX, alongside modern CSS solutions such as Tailwind CSS, are also in my toolkit.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-indigo-400 mb-3">Approach to Development</h3>
              <p className="leading-relaxed text-slate-300">
                My approach to development is centered around the principle of I advocate for using standard libraries wherever possible, with a preference for well-established, security-focused third-party libraries when necessary. My goal is always to build robust, scalable, and secure applications that adhere to modern best practices.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-indigo-400 mb-3">Current Projects</h3>
              <p className="leading-relaxed mb-4 text-slate-300">
                My current focus is on creating a range of programming projects to strengthen my resume, everything from frontend work on websites using modern frameworks to backend API development.
              </p>

              <h4 className="text-xl font-semibold text-slate-200 mb-3">Active projects I'm working on:</h4>
              <ul className="list-disc list-inside space-y-2 ml-4 text-slate-300">
                <li>Personal portfolio site, This very site, a rebuild in Next.js is coming...</li>
                <li>Client business websites to showcase their services</li>
                <li>Demo website for insurance agent service</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-indigo-400 mb-3">Preferred Technologies</h3>
              <div className="space-y-2">
                <p><span className="font-semibold text-slate-200">Programming Languages:</span> GO, JavaScript/TypeScript, HTML, C, C++, C#, Python</p>
                <p><span className="font-semibold text-slate-200">Frameworks:</span> React, Next.js, Svelte, HTMX, Bootstrap, Tailwind CSS</p>
                <p><span className="font-semibold text-slate-200">Operating Systems:</span> Windows 11, Linux (Pop_OS, Debian, Ubuntu)</p>
              </div>
            </div>
          </div>

          <footer className="border-t border-slate-800 pt-8 text-center space-y-4">
            <p className="text-slate-400">For collaborations or just a casual chat about programming</p>
            <div className="flex justify-center gap-6">
              <a href="https://www.linkedin.com/in/eric-trinque" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors font-medium">
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a href="https://www.github.com/etrinque" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors font-medium">
                <Github size={20} />
                Github
              </a>
            </div>
            <p className="text-slate-400">Let's connect and code something together.</p>
          </footer>
        </div>
      </section>
  );
};
