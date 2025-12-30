interface ProjectCardProps {
  name: string;
  url: string;
  desc: string;
}

export const ProjectCard = ({ name, url, desc }: ProjectCardProps) => {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="block p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-indigo-500/50 hover:bg-slate-800 transition-all duration-300 group shadow-lg"
    >
      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">{name}</h4>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
      <div className="mt-4 flex items-center text-xs font-mono text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity">
        View Project →
      </div>
    </a>
  );
};
