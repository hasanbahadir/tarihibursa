import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Building2, Utensils, Mountain } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function FeatureCards() {
  const features = [
    {
      icon: Building2,
      title: "Tarihi Mekânlar",
      description: "Ulucami, İrgandı Köprüsü, Yeşil Türbe ve daha fazlası...",
      image: "https://images.unsplash.com/photo-1752670451148-50941ab59e57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdHRvbWFuJTIwaGlzdG9yaWNhbCUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NTYxMDYyMTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      details: [
        "Osmanlı mimarisinin en güzel örnekleri",
        "UNESCO Dünya Mirası adayı yapılar",
        "Profesyonel rehber eşliğinde detaylı geziler"
      ]
    },
    {
      icon: Utensils,
      title: "Gastronomi",
      description: "İskender kebap, kestane şekeri ve yerel lezzetler",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXJraXNoJTIwZm9vZCUyMGlza2VuZGVyfGVufDF8fHx8MTc1NjEwNjIyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      details: [
        "İskender kebabın doğduğu şehir",
        "Ünlü kestane şekeri ve lokumu",
        "Otantik restoran önerileri"
      ]
    },
    {
      icon: Mountain,
      title: "Doğa & Kültür",
      description: "Uludağ, Oylat, Cumalıkızık köyü ve doğal güzellikler",
      image: "https://images.unsplash.com/photo-1710494803533-9b34ac6ef146?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXJraXNoJTIwdHJhZGl0aW9uYWwlMjBob3VzZXMlMjB2aWxsYWdlfGVufDF8fHx8MTc1NjEwNjIxOHww&ixlib=rb-4.1.0&q=80&w=1080",
      details: [
        "UNESCO Dünya Mirası Cumalıkızık",
        "Uludağ milli parkı ve kayak merkezi",
        "Oylat kaplıcaları ve doğal alanlar"
      ]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-primary">
            Bursa'da Keşfedilecek Yerler
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tarihi zenginliklerden doğal güzelliklere, gastronomi kültüründen modern yaşama 
            kadar Bursa'nın her köşesini deneyimleyin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden bg-card">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-secondary p-3 rounded-full">
                      <IconComponent className="h-6 w-6 text-secondary-foreground" />
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}