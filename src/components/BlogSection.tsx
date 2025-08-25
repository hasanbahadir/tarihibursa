import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { CalendarDays, Clock, ArrowRight, Eye } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function BlogSection() {
  const blogPosts = [
    {
      title: "Bursa'da Görülmesi Gereken 10 Tarihi Yer",
      excerpt: "Osmanlı'nın ilk başkenti Bursa'nın mutlaka görülmesi gereken tarihi mekanlarını keşfedin. Ulucami'den Yeşil Türbe'ye...",
      image: "https://images.unsplash.com/photo-1752670451148-50941ab59e57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdHRvbWFuJTIwaGlzdG9yaWNhbCUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NTYxMDYyMTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Tarihi Yerler",
      date: "15 Ocak 2024",
      readTime: "8 dk",
      views: "1.2K",
      featured: true
    },
    {
      title: "Osmanlı'dan Günümüze Bursa Mutfağı",
      excerpt: "İskender kebabın doğduğu şehirde, geleneksel lezzetlerin hikayesini ve en iyi mekanları öğrenin.",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXJraXNoJTIwZm9vZCUyMGlza2VuZGVyfGVufDF8fHx8MTc1NjEwNjIyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Gastronomi",
      date: "12 Ocak 2024",
      readTime: "6 dk",
      views: "985",
      featured: false
    },
    {
      title: "Uludağ'da 1 Günlük Gezi Planı",
      excerpt: "Türkiye'nin en popüler kayak merkezinden doğa yürüyüşlerine kadar Uludağ'da yapılabilecek aktiviteler.",
      image: "https://images.unsplash.com/photo-1551524164-6cf2ac11654b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGNhYmxlJTIwY2FyfGVufDF8fHx8MTc1NjEwNjMwMHww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Doğa",
      date: "10 Ocak 2024",
      readTime: "5 dk",
      views: "756",
      featured: false
    },
    {
      title: "Cumalıkızık: UNESCO Dünya Mirası Köyü",
      excerpt: "700 yıllık tarihi dokusu ile büyüleyen Cumalıkızık köyünde neler yapılır, nasıl gidilir?",
      image: "https://images.unsplash.com/photo-1710494803533-9b34ac6ef146?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXJraXNoJTIwdHJhZGl0aW9uYWwlMjBob3VzZXMlMjB2aWxsYWdlfGVufDF8fHx8MTc1NjEwNjIxOHww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Kültür",
      date: "8 Ocak 2024", 
      readTime: "7 dk",
      views: "1.1K",
      featured: false
    },
    {
      title: "Bursa Kapalı Çarşı Alışveriş Rehberi",
      excerpt: "Türkiye'nin en eski kapalı çarşılarından birinde alışveriş yapmanın püf noktaları ve öneriler.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXJraXNoJTIwYmF6YWFyJTIwbWFya2V0fGVufDF8fHx8MTc1NjEwNjMwNXww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Alışveriş",
      date: "5 Ocak 2024",
      readTime: "4 dk",
      views: "623",
      featured: false
    },
    {
      title: "Bursa'da Termal Turizm: Oylat Kaplıcaları",
      excerpt: "Şifalı sularıyla ünlü Oylat kaplıcalarında dinlence ve sağlık turizminin keyfini çıkarın.",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVybWFsJTIwc3ByaW5nc3xlbnwxfHx8fDE3NTYxMDYzMDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Sağlık",
      date: "3 Ocak 2024",
      readTime: "6 dk",
      views: "892",
      featured: false
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Tarihi Yerler": "bg-primary text-primary-foreground",
      "Gastronomi": "bg-orange-500 text-white",
      "Doğa": "bg-green-500 text-white",
      "Kültür": "bg-purple-500 text-white",
      "Alışveriş": "bg-blue-500 text-white",
      "Sağlık": "bg-teal-500 text-white"
    };
    return colors[category] || "bg-gray-500 text-white";
  };

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <section id="blog" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-primary">
            Bursa Tarihi & Turistik Blog
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Bursa'nın tarihi, kültürel ve gastronomi zenginlikleri hakkında detaylı rehberler, 
            gezilecek yerler ve yerel deneyimler.
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <Card className="overflow-hidden bg-card border-2 border-primary/20">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-80 lg:h-full">
                  <ImageWithFallback
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">
                      ÖNE ÇIKAN
                    </Badge>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <Badge className={`w-fit mb-4 ${getCategoryColor(featuredPost.category)}`}>
                    {featuredPost.category}
                  </Badge>
                  <h3 className="text-2xl md:text-3xl mb-4 text-primary">
                    {featuredPost.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 text-lg">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <CalendarDays className="h-4 w-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{featuredPost.views}</span>
                      </div>
                    </div>
                  </div>
                  <Button className="w-fit bg-primary hover:bg-primary/90 text-primary-foreground">
                    Devamını Oku
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {regularPosts.map((post, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden bg-card">
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <Badge className={getCategoryColor(post.category)}>
                    {post.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="text-lg leading-tight text-primary group-hover:text-primary/80 transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <CalendarDays className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="h-3 w-3" />
                      <span>{post.views}</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Oku
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA for Blog */}
        <div className="text-center">
          <Card className="inline-block bg-primary text-primary-foreground p-8">
            <CardContent className="text-center">
              <h3 className="text-xl mb-4">
                Rehber Eşliğinde Daha Fazlasını Keşfedin
              </h3>
              <p className="mb-6 opacity-90">
                Blog yazılarındaki tüm yerleri deneyimli rehberimizle birlikte gezin
              </p>
              <Button variant="secondary" size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Özel Tur Planlayın
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}