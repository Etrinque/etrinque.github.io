import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  const pastProjects = [
    { name: 'Go-Crawl', url: 'https://github.com/etrinque/go-crawl', desc: 'Webcrawler built on concurrency' },
    { name: 'RssAgg', url: 'https://github.com/etrinque/rssagg', desc: 'RSS feed aggregator cli tool with Postgres database' },
    { name: 'JSWebCrawler', url: 'https://github.com/Etrinque/jsWebCrawler', desc: 'Web Crawler written in Javascript' },
    { name: 'StaticSitePy', url: 'https://github.com/Etrinque/staticSitePy', desc: 'Python conversion tool, to convert Markdown to HTML' },
  ];

  return (
    <section id="projects" className="w-[80%] mx-auto py-8 md:py-16">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-8 shadow-2xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center">Github Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {pastProjects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
