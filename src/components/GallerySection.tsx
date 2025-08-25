import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ZoomIn, Play, MapPin, Calendar } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function GallerySection() {
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1583655226107-b1fbe5fa55f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJzYSUyMG1vc3F1ZSUyMGludGVyaW9yJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc1NjEwNjM3MHww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Ulucami İç Mimarisi",
      category: "Tarihi Yerler",
      description: "Bursa Ulucami'nin muhteşem iç mimarisi ve hat sanatı örnekleri"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1694875485662-127ef708bbe2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdHRvbWFuJTIwdHJhZGl0aW9uYWwlMjBhcmNoaXRlY3R1cmUlMjBkZXRhaWxzfGVufDF8fHx8MTc1NjEwNjM3NHww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Osmanlı Mimari Detayları",
      category: "Tarihi Yerler",
      description: "Geleneksel Osmanlı mimarisinin ince detayları ve süslemeleri"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1705769947716-07cd25348168?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMHZpbGxhZ2UlMjBob3VzZXMlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NTYxMDYzOTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Cumalıkızık Köyü",
      category: "Kültür",
      description: "UNESCO Dünya Mirası Cumalıkızık'ın renkli evleri"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1718002877969-0cb8496ea194?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMHR1cmtpc2glMjBiYXphYXIlMjBtYXJrZXR8ZW58MXx8fHwxNzU2MTA2Mzc4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Kapalı Çarşı",
      category: "Alışveriş",
      description: "Bursa'nın tarihi Kapalı Çarşısı ve geleneksel ticaret"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1702306870034-d6b5605cee6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGNhYmxlJTIwY2FyJTIwdWx1ZGFnfGVufDF8fHx8MTc1NjEwNjM4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Uludağ Teleferik",
      category: "Doğa",
      description: "Uludağ teleferik yolculuğu ve muhteşem manzaralar"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1671576414507-d229f3211069?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXJraXNoJTIwdHJhZGl0aW9uYWwlMjBjYXJwZXQlMjBoYW5kbWFkZXxlbnwxfHx8fDE3NTYxMDYzODZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Geleneksel El Sanatları",
      category: "Kültür",
      description: "Bursa'nın ünlü ipek ve halı dokuma geleneği"
    }
  ];

  const virtualTours = [
    {
      title: "Ulucami Sanal Turu",
      duration: "8 dakika",
      views: "2.3K",
      thumbnail: "https://images.unsplash.com/photo-1583655226107-b1fbe5fa55f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJzYSUyMG1vc3F1ZSUyMGludGVyaW9yJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc1NjEwNjM3MHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Cumalıkızık Köyü 360° Tur",
      duration: "12 dakika",
      views: "1.8K",
      thumbnail: "https://images.unsplash.com/photo-1705769947716-07cd25348168?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMHZpbGxhZ2UlMjBob3VzZXMlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NTYxMDYzOTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Uludağ Doğa Turu",
      duration: "15 dakika",
      views: "3.1K",
      thumbnail: "https://images.unsplash.com/photo-1702306870034-d6b5605cee6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGNhYmxlJTIwY2FyJTIwdWx1ZGFnfGVufDF8fHx8MTc1NjEwNjM4Mnww&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Tarihi Yerler": "bg-primary text-primary-foreground",
      "Kültür": "bg-purple-500 text-white",
      "Alışveriş": "bg-blue-500 text-white",
      "Doğa": "bg-green-500 text-white"
    };
    return colors[category] || "bg-gray-500 text-white";
  };

  const categories = ["Tümü", ...Array.from(new Set(galleryImages.map(img => img.category)))];
  const [selectedCategory, setSelectedCategory] = useState("Tümü");

  const filteredImages = selectedCategory === "Tümü" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-primary">
            Galeri & Sanal Tur
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bursa'nın güzelliklerini keşfedin. Fotoğraf galerimizi inceleyin 
            ve sanal turlarımızla şehri evden deneyimleyin.
          </p>
        </div>

        <Tabs defaultValue="gallery" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="gallery">Fotoğraf Galerisi</TabsTrigger>
            <TabsTrigger value="virtual">Sanal Turlar</TabsTrigger>
          </TabsList>

          <TabsContent value="gallery" className="space-y-8">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-primary text-primary-foreground" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image) => (
                <Dialog key={image.id}>
                  <DialogTrigger asChild>
                    <Card className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300">
                      <div className="relative">
                        <ImageWithFallback
                          src={image.src}
                          alt={image.title}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <ZoomIn className="h-8 w-8 text-white" />
                        </div>
                        <div className="absolute top-4 left-4">
                          <Badge className={getCategoryColor(image.category)}>
                            {image.category}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-medium text-lg mb-2 text-primary">
                          {image.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {image.description}
                        </p>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <div className="space-y-4">
                      <ImageWithFallback
                        src={image.src}
                        alt={image.title}
                        className="w-full h-96 object-cover rounded-lg"
                      />
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-medium text-primary">
                            {image.title}
                          </h3>
                          <Badge className={getCategoryColor(image.category)}>
                            {image.category}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground">
                          {image.description}
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="virtual" className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl text-primary mb-4">360° Sanal Turlar</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Drone çekimleri ve 360° kameralarla hazırlanmış sanal turlarımız ile 
                Bursa'yı evinizden keşfedin.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {virtualTours.map((tour, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <ImageWithFallback
                      src={tour.thumbnail}
                      alt={tour.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <Button 
                        size="lg" 
                        className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30"
                      >
                        <Play className="h-6 w-6 mr-2" />
                        Turu Başlat
                      </Button>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <Badge className="bg-black/50 text-white">
                        {tour.duration}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium text-lg mb-2 text-primary">
                      {tour.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{tour.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span>{tour.views} görüntülenme</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA for Virtual Tours */}
            <div className="text-center mt-12">
              <Card className="inline-block bg-muted/50 p-8 max-w-lg">
                <CardContent className="text-center">
                  <MapPin className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl text-primary mb-4">
                    Canlı Rehberli Tur Deneyimi
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Sanal turları beğendiniz mi? Gerçek deneyim için rehberimizle iletişime geçin!
                  </p>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Rehberli Tur Rezervasyonu
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}