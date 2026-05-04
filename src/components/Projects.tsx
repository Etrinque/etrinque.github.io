import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  const pastProjects = [
    { name: 'Go-Crawl', url: 'https://github.com/etrinque/go-crawl', desc: 'Concurrent web crawler built in Go, focused on fast traversal, controlled fan-out, and clean command-line ergonomics.' },
    { name: 'RssAgg', url: 'https://github.com/etrinque/rssagg', desc: 'RSS feed aggregator CLI with a PostgreSQL-backed data layer for tracking feeds, users, and collected posts.' },
    { name: 'FracGen', url: 'https://github.com/Etrinque/fractal-generator', desc: 'Interactive fractal generator for experimenting with recursive visuals, rendering controls, and procedural image output.' },
    { name: 'GD-Scope', url: 'https://github.com/Etrinque/gd-scope', desc: 'Game-development focused inspection tool for exploring project data and surfacing useful structure at a glance.' },
  ];

  return (
    <section id="projects" className="w-[92%] md:w-[80%] mx-auto py-4 md:py-6">
      <div className="bg-panel border border-line-soft rounded-md p-4 sm:p-6 md:p-8 shadow-2xl max-h-[calc(100vh-5rem)] overflow-hidden flex flex-col gap-5 md:gap-8">
        <h2 className="text-3xl md:text-5xl font-bold text-paper text-center shrink-0">Github Projects</h2>
        
        <div className="min-h-0 overflow-y-auto pr-1 md:pr-2 overscroll-contain">
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {pastProjects.map((project) => (
              <ProjectCard key={project.name} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
