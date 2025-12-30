export const Dossier = () => (
  <div className="mt-36 sm:mt-4 md:mt-28 animate-slide-in-right">
    <div className=" bg-slate-900/50 border border-slate-800 rounded-3xl p-8 shadow-2xl backdrop-blur-sm">
      <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <span className="text-indigo-400">//</span> Software Engineer, Gainesville, Florida
      </h4>
      
      <div className="space-y-6">
        <div>
          <p className="text-xs font-mono text-indigo-400 uppercase tracking-widest mb-3">Core Technical Skills</p>
          <div className="flex flex-wrap gap-2">
            {['Go', 'TypeScript', 'C/C++', 'C#', 'Python', 'React', 'Next.js', 'PostgreSQL', 'Docker'].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm text-slate-300">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-mono text-indigo-400 uppercase tracking-widest mb-3">Expertise</p>
          <ul className="space-y-2 text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-indigo-400 mt-1">▹</span>
              <span>Full-stack architecture & systems design</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-400 mt-1">▹</span>
              <span>Concurrent programming & performance tuning</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-400 mt-1">▹</span>
              <span>Mobile Development & AI/ML Curious </span>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-mono text-indigo-400 uppercase tracking-widest mb-3">Current Mission</p>
          <p className="text-slate-400 text-sm italic leading-relaxed">
            "Building robust, scalable solutions while pursuing academic excellence in Computer Science with a focus on Mobile Application development in the evenings."
          </p>
        </div>

        <div className="pt-4">
          <a href="#resume" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-mono text-sm transition-colors">
            View Full Resume <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </div>
  </div>
);
