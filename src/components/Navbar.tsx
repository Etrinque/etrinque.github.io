import { useState } from 'react';
import { Menu, X, ChevronDown, Linkedin, Github, Mail, Rss, User } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  const projects = [
    { name: 'GO-Crawl', url: 'https://github.com/etrinque/go-crawl' },
    { name: 'StaticSitePy', url: 'https://github.com/etrinque/staticsitepy' },
    { name: 'JScrawler', url: 'https://github.com/Etrinque/jsWebCrawler' },
    { name: 'OSS-INS', url: 'https://ossins.netlify.app/' },
  ];

  return (
      <nav className="bg-slate-950/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href={"#home"} className="text-white text-xl font-bold font-mono flex items-center gap-2 hover:text-indigo-400 transition-colors">
                <span className="text-2xl">🦛</span>
                ERIC TRINQUE
              </a>
            </div>

            {/* Desktop Navigation */}
            <div id={"dropdown"} className="hidden md:flex items-center space-x-4">
              <div className="relative group">
                <button id={"projects-button"} className="text-slate-300 px-3 py-2 rounded-md text-sm font-mono flex items-center gap-1 hover:text-white transition-colors">
                  <ChevronDown size={16} />
                  Projects
                </button>
                <div className="absolute hidden group-hover:block bg-slate-900 border border-slate-800 min-w-[200px] shadow-xl rounded-md mt-1">
                  {projects.map((project) => (
                      <a
                          key={project.name}
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
                      >
                        {project.name}
                      </a>
                  ))}
                </div>
              </div>
              <a href={"#blog"} className="text-slate-400 hover:text-indigo-400 px-3 py-2 rounded-md transition-colors">
                <Rss size={25} />
              </a>
              <a href={"#about"} className="text-slate-400 hover:text-indigo-400 px-3 py-2 rounded-md transition-colors">
                <User size={25} />
              </a>
              <a href={"#contact"} className="text-slate-400 hover:text-indigo-400 px-3 py-2 rounded-md transition-colors">
                <Mail size={25} />
              </a>
              <a href="https://www.linkedin.com/in/eric-trinque" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-400 px-3 py-2 rounded-md transition-colors">
                <Linkedin size={25} />
              </a>
              <a href="https://www.github.com/etrinque" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-400 px-3 py-2 rounded-md transition-colors">
                <Github size={25} />
              </a>
              <a href={"#resume"} className="bg-indigo-600/90 px-4 py-2 rounded-md font-mono hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/20">
                <span className="text-white ">
                  Resume
                </span>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
            <div className="md:hidden bg-slate-950 border-b border-slate-800 pb-4">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button
                    onClick={() => setShowProjects(!showProjects)}
                    className="w-full text-left text-slate-300 px-3 py-2 rounded-md font-mono flex items-center justify-between"
                >
                  Projects
                  <ChevronDown size={16} className={`transform transition-transform ${showProjects ? 'rotate-180' : ''}`} />
                </button>
                {showProjects && (
                    <div className="pl-6 space-y-1">
                      {projects.map((project) => (
                          <a
                              key={project.name}
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block text-slate-400 px-3 py-2 hover:bg-slate-800 hover:text-white rounded-md"
                          >
                            {project.name}
                          </a>
                      ))}
                    </div>
                )}
                <a href={"#blog"} className="block text-slate-300 px-3 py-2 rounded-md hover:bg-slate-800 hover:text-white">
                  Blog
                </a>
                <a href={"#about"} className="block text-slate-300 px-3 py-2 rounded-md hover:bg-slate-800 hover:text-white">
                  About
                </a>
                <a href={"#contact"} className="block text-slate-300 px-3 py-2 rounded-md hover:bg-slate-800 hover:text-white">
                  Contact
                </a>
                <a href={"#resume"} className="block text-slate-300 px-3 py-2 rounded-md hover:bg-slate-800 hover:text-white font-bold">
                  Resume
                </a>
              </div>
            </div>
        )}
      </nav>
  );
};
