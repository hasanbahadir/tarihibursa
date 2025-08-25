import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Star, Award, MapPin, Clock, Users, Quote, Phone, Mail, Calendar } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function GuideSection() {
  const achievements = [
    { icon: Award, text: "Turizm Rehberlik Sertifikası", year: "2008" },
    { icon: MapPin, text: "Bursa Uzman Rehberi", year: "15+ Yıl" },
    { icon: Users, text: "1000+ Memnun Ziyaretçi", year: "2024" },
    { icon: Star, text: "4.9/5 Değerlendirme", year: "Google" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      country: "ABD",
      rating: 5,
      comment: "Hüsamettin Bey'in rehberliğinde Bursa'yı gezmek harika bir deneyimdi. Tarih bilgisi çok derin ve İngilizce çok iyi."
    },
    {
      name: "Mehmet Özkan",
      country: "Türkiye",
      rating: 5,
      comment: "Ailemle birlikte muhteşem bir gün geçirdik. Cumalıkızık'ta öğle yemeği önerisi mükemmeldi!"
    },
    {
      name: "Elena Rossi",
      country: "İtalya",
      rating: 5,
      comment: "Professional and passionate guide! The historical details about Ottoman architecture were fascinating."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Guide Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl mb-4 text-primary">
                Hüsamettin Kaplan
              </h2>
              <p className="text-xl text-secondary mb-6">
                Profesyonel Turizm Rehberi
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                15 yılı aşkın deneyimim ile Bursa'nın tarihi ve kültürel zenginliklerini 
                sizlerle paylaşmaktan gurur duyuyorum. Osmanlı tarihinden modern Bursa'ya 
                kadar her dönemin izlerini birlikte keşfedelim.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-secondary" />
                  <span>+90 532 797 0203</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-secondary" />
                  <span>husamettin@tarihibursa.com</span>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-muted/50 rounded-lg">
                    <IconComponent className="h-6 w-6 text-secondary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">{achievement.text}</p>
                      <p className="text-xs text-muted-foreground">{achievement.year}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Languages */}
            <div className="space-y-3">
              <h4 className="font-medium text-primary">Konuşulan Diller:</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-secondary text-secondary-foreground">Türkçe</Badge>
                <Badge variant="secondary" className="bg-secondary text-secondary-foreground">İngilizce</Badge>
                <Badge variant="secondary" className="bg-secondary text-secondary-foreground">Almanca</Badge>
                <Badge variant="outline">Arapça (Temel)</Badge>
              </div>
            </div>
          </div>

          {/* Guide Photo */}
          <div className="space-y-8">
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1659100939687-a7c10b4d5841?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0b3VyJTIwZ3VpZGUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTYwNzg1MTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Hüsamettin Kaplan - Turizm Rehberi"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute bottom-4 left-4">
                <Badge className="bg-primary text-primary-foreground">
                  <Star className="h-4 w-4 mr-1" />
                  4.9/5 Puan
                </Badge>
              </div>
            </div>

            {/* Reservation Form */}
            <Card className="bg-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium text-primary mb-4">
                  Rehberlik için İletişime Geçin
                </h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Ad Soyad</Label>
                      <Input id="name" placeholder="Ad Soyad" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Telefon</Label>
                      <Input id="phone" placeholder="+90 532 797 0203" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">E-posta</Label>
                    <Input id="email" type="email" placeholder="ornek@email.com" />
                  </div>
                  <div>
                    <Label htmlFor="date">Tercih Edilen Tarih</Label>
                    <Input id="date" type="date" />
                  </div>
                  <div>
                    <Label htmlFor="message">Mesajınız</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Hangi yerleri gezmek istediğinizi ve grup büyüklüğünüzü belirtiniz..."
                      rows={3}
                    />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    Rezervasyon Yap
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <h3 className="text-2xl text-center text-primary mb-12">
            Ziyaretçi Yorumları
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-muted/30">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-muted-foreground">
                      {testimonial.rating}/5
                    </span>
                  </div>
                  <Quote className="h-6 w-6 text-secondary mb-3" />
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.comment}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.country}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}