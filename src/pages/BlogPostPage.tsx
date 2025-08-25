import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../content/blogPosts";
import { useEffect } from "react";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-2xl text-primary mb-4">Yazı bulunamadı</h1>
        <Link to="/" className="text-secondary underline">Ana sayfaya dön</Link>
      </div>
    );
  }

  // Basit SEO: sayfa başlığı ve meta description ayarı
  useEffect(() => {
    const prevTitle = document.title;
    const title = post.seoTitle || post.title;
    document.title = title;

    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = post.seoDescription || post.excerpt;

    return () => {
      document.title = prevTitle;
    };
  }, [post]);

  return (
    <article className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl md:text-4xl text-primary mb-4">{post.title}</h1>
        <p className="text-muted-foreground mb-6">{post.excerpt}</p>
        <img src={post.image} alt={post.title} className="w-full rounded-lg shadow mb-8" />
        <div className="prose prose-invert max-w-none">
          {post.content.map((block, i) => {
            if (block.type === "heading") return <h2 key={i}>{block.content}</h2>;
            if (block.type === "quote") return <blockquote key={i}>{block.content}</blockquote>;
            if (block.type === "list") return (
              <ul key={i}>
                {block.items?.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            );
            if (block.type === "image") return <img key={i} src={block.content} />;
            return <p key={i}>{block.content}</p>;
          })}
        </div>
        <div className="mt-8">
          <Link to="/" className="text-secondary underline">← Ana sayfaya dön</Link>
        </div>
      </div>
    </article>
  );
}
