import { Linkedin, Github } from 'lucide-react';

export const About = () => {
  return (
      <section id="about" className="w-[92%] md:w-[80%] mx-auto py-4 md:py-6">
        <div className="bg-panel border border-line-soft rounded-md p-4 sm:p-6 md:p-8 shadow-2xl max-h-[calc(100vh-5rem)] overflow-hidden flex flex-col gap-5 md:gap-7">
          <h1 className="text-3xl md:text-5xl font-bold text-paper text-center shrink-0">A little about me...</h1>

          <div className="min-h-0 overflow-y-auto pr-1 md:pr-2 overscroll-contain space-y-6 md:space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-lilac mb-3">Introduction</h3>
              <p className="leading-relaxed text-mist">
                I'm Eric Trinque, a software engineer in Gainesville, Florida focused on concurrent systems, algorithm design, and full-stack application development. My current stack centers on Go, C++, Kotlin, JavaScript/TypeScript, Python, SQL, React, Node.js, and PostgreSQL, with a practical bias toward production-ready software that can be tested, deployed, and maintained.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-lilac mb-3">Professional Experience</h3>
              <p className="leading-relaxed text-mist">
                Recent freelance work includes an enterprise intranet platform serving 50+ concurrent users with a Go REST API, React/TypeScript frontend, PostgreSQL database, JWT authentication, and role-based access control. I also work as an AI training specialist for software engineering tasks, reviewing AI-generated solutions across Go, C++, Python, TypeScript, and JavaScript for correctness, security, performance, and test coverage.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-lilac mb-3">Engineering Approach</h3>
              <p className="leading-relaxed mb-4 text-mist">
                I like systems that are measurable and boring in the best way: clear interfaces, strong error handling, useful tests, and deployment paths that do not depend on heroics. My background combines software delivery with years of project ownership, stakeholder coordination, and process management, so I tend to think about maintainability, risk, and feedback loops as part of the build from the start.
              </p>

              <h4 className="text-xl font-semibold text-paper mb-3">Current technical focus:</h4>
              <ul className="list-disc list-inside space-y-2 ml-4 text-mist">
                <li>Concurrent programming, worker pools, and performance-sensitive backend systems</li>
                <li>Full-stack application architecture with Go, React, TypeScript, and PostgreSQL</li>
                <li>Algorithmic visualization, graphics programming, and desktop UI development</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-lilac mb-3">Education & Development</h3>
              <div className="space-y-2">
                <p><span className="font-semibold text-paper">Degree:</span> B.S. in Computer Science, Full Sail University, expected April 2027</p>
                <p><span className="font-semibold text-paper">Coursework:</span> Data Structures & Algorithms, Object-Oriented Programming, Database Systems, Software Engineering, Memory Management, AI/Machine Learning</p>
                <p><span className="font-semibold text-paper">Professional Development:</span> Frontend Masters for JavaScript, TypeScript, React, and Node.js; Boot.dev for Go, Python, databases, and concurrency</p>
              </div>
            </div>
          </div>

          <footer className="border-t border-line-soft pt-6 text-center space-y-4 shrink-0">
            <p className="text-muted">For collaborations or just a casual chat about programming</p>
            <div className="flex justify-center gap-6">
              <a href="https://www.linkedin.com/in/eric-trinque" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lilac hover:text-rosewave transition-colors font-medium">
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a href="https://www.github.com/etrinque" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lilac hover:text-rosewave transition-colors font-medium">
                <Github size={20} />
                Github
              </a>
            </div>
            <p className="text-muted">Let's connect and code something together.</p>
          </footer>
        </div>
      </section>
  );
};
