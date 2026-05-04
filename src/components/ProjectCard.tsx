import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  name: string;
  url: string;
  desc: string;
}

export const ProjectCard = ({ name, url, desc }: ProjectCardProps) => {
  return (
    <article
      className="flex h-full flex-col overflow-hidden rounded-md bg-panel-soft/70 border border-line shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-rosewave/50 hover:bg-panel-soft"
    >
      <header className="border-b border-line-soft px-6 py-5">
        <p className="mb-2 text-xs font-mono uppercase tracking-widest text-cyanwave">Project</p>
        <h4 className="text-2xl font-bold text-paper">{name}</h4>
      </header>

      <div className="flex-1 px-6 py-5">
        <p className="text-sm leading-relaxed text-mist">{desc}</p>
      </div>

      <footer className="border-t border-line-soft px-6 py-4">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-mono text-lilac transition-colors hover:text-rosewave"
        >
          View Repository
          <ExternalLink size={15} />
        </a>
      </footer>
    </article>
  );
};
