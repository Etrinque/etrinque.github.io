import { ExternalLink } from 'lucide-react';
import earlyIntegrationImage from '../../blog_content/blog_media/early-integration.png';
import mvpBuildoutImage from '../../blog_content/blog_media/mvp-buildout.png';
import earlyIntegrationMarkdown from '../../blog_content/wish-graph-devlog-early-integration.md?raw';
import mvpBuildoutMarkdown from '../../blog_content/wish-graph-devlog-mvp-buildout.md?raw';

interface BlogPost {
  title: string;
  videoUrl: string;
  image: string;
  imageAlt: string;
  body: string[];
}

const blogImages: Record<string, string> = {
  './blog_media/early-integration.png': earlyIntegrationImage,
  './blog_media/mvp-buildout.png': mvpBuildoutImage,
};

const parseBlogPost = (source: string): BlogPost => {
  const lines = source.trim().split('\n');
  const title = lines.find((line) => line.startsWith('# '))?.replace('# ', '') ?? 'Untitled Post';
  const videoMatch = source.match(/\[Watch Dev Log Video]\((.*?)\)/);
  const imageMatch = source.match(/!\[(.*?)]\((.*?)\)/);
  const body = lines.filter((line) => (
    line.trim() &&
    !line.startsWith('# ') &&
    !line.startsWith('[Watch Dev Log Video]') &&
    !line.startsWith('![')
  ));

  return {
    title,
    videoUrl: videoMatch?.[1] ?? '#',
    image: blogImages[imageMatch?.[2] ?? ''] ?? '',
    imageAlt: imageMatch?.[1] ?? title,
    body,
  };
};

const blogPosts = [
  parseBlogPost(mvpBuildoutMarkdown),
  parseBlogPost(earlyIntegrationMarkdown),
];

export const Blog = () => (
  <section id="blog" className="w-[92%] md:w-[80%] mx-auto py-4 md:py-8">
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl max-h-[calc(100vh-7rem)] overflow-hidden flex flex-col gap-5 md:gap-8">
      <div className="text-center shrink-0">
        <h2 className="text-3xl md:text-5xl font-bold text-white">Blog</h2>
        <p className="mt-2 text-sm md:text-base text-slate-400">Wish-Graph build notes and dev log updates</p>
      </div>

      <div className="min-h-0 overflow-y-auto pr-1 md:pr-2 overscroll-contain">
        <div className="grid gap-5 lg:grid-cols-2">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-2xl bg-slate-800/50 border border-slate-700 shadow-lg"
            >
              <img
                src={post.image}
                alt={post.imageAlt}
                className="block w-full h-auto border-b border-slate-700"
              />

              <div className="p-5 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">{post.title}</h3>
                  <a
                    href={post.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Watch Dev Log Video
                  </a>
                </div>

                <div className="space-y-3 text-sm leading-relaxed text-slate-300">
                  {post.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);
