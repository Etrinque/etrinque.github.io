import { ExternalLink } from 'lucide-react';
import earlyIntegrationImage from '../../blog_content/blog_media/early-integration.png';
import mvpBuildoutImage from '../../blog_content/blog_media/mvp-buildout.png';
import uiKitImage from '../../blog_content/blog_media/ui-kit.png';
import earlyIntegrationMarkdown from '../../blog_content/wish-graph-devlog-early-integration.md?raw';
import mvpBuildoutMarkdown from '../../blog_content/wish-graph-devlog-mvp-buildout.md?raw';
import uiKitMarkdown from '../../blog_content/wish-graph-devlog-ui-kit.md?raw';

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
  './blog_media/ui-kit.png': uiKitImage,
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
  parseBlogPost(uiKitMarkdown),
  parseBlogPost(mvpBuildoutMarkdown),
  parseBlogPost(earlyIntegrationMarkdown),
];

export const Blog = () => (
  <section id="blog" className="w-[92%] md:w-[80%] mx-auto py-4 md:py-6">
    <div className="bg-panel border border-line-soft rounded-md p-4 sm:p-6 md:p-8 shadow-2xl max-h-[calc(100vh-5rem)] overflow-hidden flex flex-col gap-5 md:gap-8">
      <div className="text-center shrink-0">
        <h2 className="text-3xl md:text-5xl font-bold text-paper">Blog</h2>
        <p className="mt-2 text-sm md:text-base text-muted">Wish-Graph build notes and dev log updates</p>
      </div>

      <div className="min-h-0 overflow-y-auto pr-1 md:pr-2 overscroll-contain">
        <div className="grid gap-5">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="grid overflow-hidden rounded-md bg-panel-soft/70 border border-line shadow-lg lg:h-72 lg:grid-cols-[minmax(18rem,0.9fr)_1.1fr]"
            >
              <div className="h-48 max-h-72 border-b border-line bg-ink-soft/70 sm:h-56 lg:h-full lg:border-b-0 lg:border-r">
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  className="block h-full w-full object-contain"
                />
              </div>

              <div className="flex min-h-0 flex-col gap-4 p-5">
                <div className="shrink-0 space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold text-paper leading-tight">{post.title}</h3>
                  <a
                    href={post.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-lilac hover:text-rosewave transition-colors"
                  >
                    <ExternalLink size={16} />
                    Watch Dev Log Video
                  </a>
                </div>

                <div className="min-h-0 max-h-48 space-y-3 overflow-y-auto pr-1 text-sm leading-relaxed text-mist overscroll-contain lg:max-h-none">
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
