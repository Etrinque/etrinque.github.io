import { useEffect, useState } from 'react';
import { Anvil, FileText, FolderGit2, Menu, X, Linkedin, Github, Mail, Rss, User } from 'lucide-react';

const openResumeEventName = 'open-resume-modal';

const ResumeModalContent = () => (
  <div className="space-y-8 text-mist">
    <header className="border-b border-line-soft pb-5">
      <h3 className="text-3xl font-bold text-paper">Eric Trinque</h3>
      <p className="mt-1 text-lg text-lilac">Software Engineer</p>
      <p className="mt-2 text-sm text-muted">Gainesville, FL | TrinqueEric@gmail.com | GitHub | LinkedIn | Portfolio</p>
    </header>

    <section className="space-y-3">
      <h4 className="text-xl font-bold text-paper">Professional Summary</h4>
      <p className="leading-relaxed">
        Software engineer specializing in concurrent systems, algorithm design, and full-stack development with expertise in Go, C++, Kotlin, and JavaScript/TypeScript. Proven ability to architect scalable solutions, optimize performance, and deliver production-ready applications. 4+ years managing complex projects with cross-functional teams and maintaining 90%+ client satisfaction rates.
      </p>
    </section>

    <section className="space-y-3">
      <h4 className="text-xl font-bold text-paper">Technical Skills</h4>
      <div className="grid gap-3 md:grid-cols-2">
        <p><strong className="text-paper">Programming Languages:</strong> Go, C++, Kotlin, JavaScript, TypeScript, Python, SQL</p>
        <p><strong className="text-paper">Frameworks & Libraries:</strong> React, Node.js, wxWidgets, JavaFX, Bootstrap, TailwindCSS</p>
        <p><strong className="text-paper">Tools & Platforms:</strong> Docker, Kubernetes, Git, GitHub, PostgreSQL, MySQL, Linux, REST APIs</p>
        <p><strong className="text-paper">Practices:</strong> Agile/Scrum, CI/CD, TDD, Code Review, Unit Testing, Integration Testing, Debugging, Microservices, OOP, Algorithm Optimization</p>
      </div>
    </section>

    <section className="space-y-4">
      <h4 className="text-xl font-bold text-paper">Professional Experience</h4>

      <article className="space-y-2">
        <h5 className="text-lg font-semibold text-lilac">Software Developer (Freelance)</h5>
        <p className="text-sm text-muted">Remote, FL | 2024 - Present</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Engineered an enterprise intranet platform serving 50+ concurrent users with 99.5% uptime using a Go REST API backend, React/TypeScript frontend, and PostgreSQL database.</li>
          <li>Architected secure authentication with JWT token-based authorization and role-based access control across 3 admin tiers.</li>
          <li>Automated deployment using Git version control and CI/CD workflows, reducing deployment time while maintaining zero-downtime releases.</li>
          <li>Collaborated in Agile sprints with stakeholders to gather requirements, conduct code reviews, and deliver feature releases based on user feedback.</li>
        </ul>
      </article>

      <article className="space-y-2">
        <h5 className="text-lg font-semibold text-lilac">AI Training Specialist - Software Engineering</h5>
        <p className="text-sm text-muted">Alignerr AI & Outlier AI | Remote, FL | 2024 - Present</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Conducted 500+ code reviews of AI-generated solutions across Go, C++, Python, TypeScript, and JavaScript.</li>
          <li>Designed and executed unit tests, integration tests, and edge case validation across multiple programming paradigms.</li>
          <li>Used debugging tools and profilers including GDB and Chrome DevTools to identify memory leaks, race conditions, and performance issues.</li>
          <li>Collaborated with distributed engineering teams across multiple time zones while maintaining quality benchmarks.</li>
        </ul>
      </article>

      <article className="space-y-2">
        <h5 className="text-lg font-semibold text-lilac">Owner/Operator</h5>
        <p className="text-sm text-muted">Resolvd LLC | Gainesville, FL | 2020 - 2024</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Managed end-to-end project delivery for 200+ clients with aggregated project value exceeding $15M.</li>
          <li>Led cross-functional teams of 5-15 contractors and vendors, establishing communication protocols and project tracking systems.</li>
          <li>Used management dashboards and reporting systems to track KPIs, resource allocation, and milestone progress.</li>
          <li>Negotiated and managed vendor relationships and supply chain logistics while maintaining quality standards.</li>
        </ul>
      </article>

      <article className="space-y-2">
        <h5 className="text-lg font-semibold text-lilac">Real Estate Agent (Independent)</h5>
        <p className="text-sm text-muted">Pepine Realty | Gainesville, FL | 2021 - 2024</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Maintained strong client retention through CRM-based follow-up systems and data-driven market analysis.</li>
          <li>Managed complex negotiations involving multiple stakeholders, contract terms, and financial constraints.</li>
        </ul>
      </article>
    </section>

    <section className="space-y-4">
      <h4 className="text-xl font-bold text-paper">Technical Projects</h4>

      <article className="space-y-2">
        <h5 className="text-lg font-semibold text-lilac">Go-Crawl: Concurrent Web Crawler</h5>
        <p className="text-sm text-muted">Go, Goroutines, Concurrency, HTML Parsing, Worker Pool Pattern</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Built a production-grade web crawler processing 10,000+ pages using a goroutine-based worker pool architecture.</li>
          <li>Engineered an HTML parsing pipeline with error handling, retry logic, and link frequency analysis.</li>
          <li>Implemented concurrent-safe data structures and validated behavior through race detection and stress testing.</li>
        </ul>
      </article>

      <article className="space-y-2">
        <h5 className="text-lg font-semibold text-lilac">Boids Flocking Simulation: Real-Time Physics Engine</h5>
        <p className="text-sm text-muted">C++17, wxWidgets, Object-Oriented Design, Graphics Programming</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Developed an interactive particle system simulating emergent behavior using Reynolds' flocking algorithm.</li>
          <li>Optimized collision detection using spatial partitioning, reducing computational complexity from O(n^2) to O(n log n).</li>
          <li>Engineered extensible OOP architecture with custom 2D vector math, file I/O serialization, and GUI controls.</li>
        </ul>
      </article>

      <article className="space-y-2">
        <h5 className="text-lg font-semibold text-lilac">Fractal Generator: Mathematical Visualization Platform</h5>
        <p className="text-sm text-muted">Kotlin, JavaFX, Recursive Algorithms, Graphics Rendering</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Created an interactive desktop application rendering Sierpinski, Mandelbrot, and Julia fractals with configurable parameters.</li>
          <li>Optimized recursive rendering algorithms for smoother real-time visualization.</li>
          <li>Designed modular MVC architecture separating rendering, UI controls, and fractal implementations.</li>
        </ul>
      </article>
    </section>

    <section className="space-y-3">
      <h4 className="text-xl font-bold text-paper">Education</h4>
      <article>
        <h5 className="text-lg font-semibold text-lilac">Bachelor of Science in Computer Science</h5>
        <p>Full Sail University | Expected April 2027 | GPA: 3.75</p>
        <p className="mt-2 text-sm text-muted">Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Systems, Software Engineering, Memory Management, AI/Machine Learning</p>
      </article>
    </section>

    <section className="space-y-3">
      <h4 className="text-xl font-bold text-paper">Professional Development</h4>
      <ul className="list-disc space-y-2 pl-5">
        <li>Frontend Masters - Web Development Specialization: JavaScript, TypeScript, React, Node.js</li>
        <li>Boot.dev - Backend Engineering & Systems Programming: Go, Python, Databases, Concurrency</li>
      </ul>
    </section>
  </div>
);

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowResume(false);
      }
    };

    if (showResume) {
      window.addEventListener('keydown', closeOnEscape);
    }

    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [showResume]);

  useEffect(() => {
    const openResume = () => setShowResume(true);

    window.addEventListener(openResumeEventName, openResume);

    return () => window.removeEventListener(openResumeEventName, openResume);
  }, []);

  return (
    <>
      <nav className="bg-ink/85 backdrop-blur-md sticky top-0 z-50 border-b border-line-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href={"#home"} className="text-paper text-xl font-bold font-mono flex items-center gap-2 hover:text-lilac transition-colors">
                <span className="flex h-9 w-9 items-center justify-center rounded-md border border-line bg-panel-soft shadow-lg shadow-rosewave/10">
                  <Anvil size={20} className="text-lilac" aria-hidden="true" />
                </span>
                ERIC TRINQUE
              </a>
            </div>

            {/* Desktop Navigation */}
            <div id={"dropdown"} className="hidden md:flex items-center space-x-4">
              <a href={"#projects"} className="text-muted hover:text-lilac px-3 py-2 rounded-md transition-colors">
                <FolderGit2 size={25} />
              </a>
              <a href={"#about"} className="text-muted hover:text-lilac px-3 py-2 rounded-md transition-colors">
                <User size={25} />
              </a>
              <a href={"#blog"} className="text-muted hover:text-lilac px-3 py-2 rounded-md transition-colors">
                <Rss size={25} />
              </a>
              <a href={"#contact"} className="text-muted hover:text-lilac px-3 py-2 rounded-md transition-colors">
                <Mail size={25} />
              </a>
              <a href="https://www.linkedin.com/in/eric-trinque" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-lilac px-3 py-2 rounded-md transition-colors">
                <Linkedin size={25} />
              </a>
              <a href="https://www.github.com/etrinque" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-lilac px-3 py-2 rounded-md transition-colors">
                <Github size={25} />
              </a>
              <button
                type="button"
                onClick={() => setShowResume(true)}
                className="inline-flex items-center gap-2 border-0 bg-transparent px-3 py-2 font-mono text-sm text-muted transition-colors hover:text-lilac"
              >
                <FileText size={20} />
                Resume
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-paper">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
            <div className="md:hidden bg-ink border-b border-line-soft pb-4">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href={"#projects"} className="block text-mist px-3 py-2 rounded-md hover:bg-panel-soft hover:text-paper">
                  Projects
                </a>
                <a href={"#about"} className="block text-mist px-3 py-2 rounded-md hover:bg-panel-soft hover:text-paper">
                  About
                </a>
                <a href={"#blog"} className="block text-mist px-3 py-2 rounded-md hover:bg-panel-soft hover:text-paper">
                  Blog
                </a>
                <a href={"#contact"} className="block text-mist px-3 py-2 rounded-md hover:bg-panel-soft hover:text-paper">
                  Contact
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setShowResume(true);
                    setIsOpen(false);
                  }}
                  className="block w-full border-0 bg-transparent px-3 py-2 text-left font-bold text-mist hover:bg-panel-soft hover:text-paper"
                >
                  Resume
                </button>
              </div>
            </div>
        )}
      </nav>

      {showResume && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-modal-title"
          onClick={() => setShowResume(false)}
        >
          <div
            className="flex max-h-[86vh] w-full max-w-4xl flex-col overflow-hidden rounded-md border border-line bg-panel shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <header className="flex items-center justify-between border-b border-line-soft px-5 py-4">
              <div>
                <h2 id="resume-modal-title" className="text-2xl font-bold text-paper">Resume</h2>
              </div>
              <button
                type="button"
                onClick={() => setShowResume(false)}
                className="border-0 bg-transparent p-2 text-muted transition-colors hover:text-paper"
                aria-label="Close resume"
              >
                <X size={22} />
              </button>
            </header>

            <div className="min-h-0 overflow-y-auto p-5 overscroll-contain">
              <ResumeModalContent />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
