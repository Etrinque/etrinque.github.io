export const Dossier = () => (
  <div className="mt-6 lg:mt-0 animate-slide-in-right">
    <div className=" bg-panel/65 border border-line-soft rounded-md p-5 xl:p-8 shadow-2xl backdrop-blur-sm">
      <h4 className="text-xl xl:text-2xl font-bold text-paper mb-5 flex items-center gap-2">
        <span className="text-lilac">//</span> Software Engineer, Gainesville, FL
      </h4>
      
      <div className="space-y-5">
        <div>
          <p className="text-xs font-mono text-lilac uppercase tracking-widest mb-3">Core Technical Skills</p>
          <div className="flex flex-wrap gap-2">
            {['Go', 'C++', 'Kotlin', 'TypeScript', 'Python', 'SQL', 'React', 'Node.js', 'PostgreSQL', 'Docker'].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-panel-soft border border-line rounded-md text-sm text-mist">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-mono text-lilac uppercase tracking-widest mb-3">Expertise</p>
          <ul className="space-y-2 text-mist">
            <li className="flex items-baseline gap-2">
              <span className="text-lilac">▹</span>
              <span>Concurrent systems, algorithms, and performance tuning</span>
            </li>
            <li className="flex items-baseline gap-2">
              <span className="text-lilac">▹</span>
              <span>Full-stack Go, React, TypeScript, and PostgreSQL apps</span>
            </li>
            <li className="flex items-baseline gap-2">
              <span className="text-lilac">▹</span>
              <span>Code review, testing, debugging, and AI evaluation</span>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-mono text-lilac uppercase tracking-widest mb-3">Current Track</p>
          <p className="text-muted text-sm italic leading-relaxed">
            "Building production-ready software while completing a B.S. in Computer Science at Full Sail University, expected April 2027."
          </p>
        </div>

        <div className="pt-4">
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event('open-resume-modal'))}
            className="inline-flex items-center gap-2 border-0 bg-transparent p-0 font-mono text-sm text-lilac transition-colors hover:text-rosewave"
          >
            View Full Resume <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </div>
  </div>
);
