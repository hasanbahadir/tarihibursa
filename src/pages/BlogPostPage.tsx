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
    <article className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              {post.readTime}
            </span>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
              {post.category}
            </span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-12">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-96 object-cover rounded-2xl shadow-xl"
          />
        </div>

        {/* Article Content */}
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="prose prose-lg max-w-none">
            {post.content.map((block, i) => {
              if (block.type === "heading") return (
                <h2 
                  key={i} 
                  className="text-2xl md:text-3xl font-bold text-primary mt-12 mb-6 first:mt-0 border-l-4 border-primary pl-6"
                >
                  {block.content}
                </h2>
              );
              if (block.type === "quote") return (
                <blockquote 
                  key={i} 
                  className="border-l-4 border-secondary bg-secondary/10 p-6 my-8 italic text-lg rounded-r-lg"
                >
                  {block.content}
                </blockquote>
              );
              if (block.type === "list") return (
                <ul key={i} className="space-y-3 my-6 ml-6">
                  {block.items?.map((item, idx) => (
                    <li key={idx} className="text-muted-foreground leading-relaxed relative">
                      <span className="absolute -left-6 top-2 w-2 h-2 bg-primary rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              );
              if (block.type === "image") return (
                <img 
                  key={i} 
                  src={block.content} 
                  className="w-full rounded-xl shadow-lg my-8"
                  alt=""
                />
              );
              return (
                <p key={i} className="text-muted-foreground leading-relaxed text-lg mb-6">
                  {block.content}
                </p>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 text-center">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary/90 transition-colors text-lg font-medium shadow-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    </article>
  );
}
