import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar, Users } from "lucide-react";

export function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      details: ["+90 555 123 4567", "7/24 WhatsApp"],
      color: "text-green-600"
    },
    {
      icon: Mail,
      title: "E-posta",
      details: ["husamettin@tarihibursa.com", "info@tarihibursa.com"],
      color: "text-blue-600"
    },
    {
      icon: MapPin,
      title: "Lokasyon",
      details: ["Osmangazi, Bursa", "Buluşma noktaları esnek"],
      color: "text-red-600"
    },
    {
      icon: Clock,
      title: "Çalışma Saatleri",
      details: ["Pazartesi - Pazar", "08:00 - 20:00"],
      color: "text-orange-600"
    }
  ];

  const tourPackages = [
    "Şehir Merkezi Turu (4 saat)",
    "Cumalıkızık Köyü Turu (6 saat)",
    "Uludağ Doğa Turu (8 saat)",
    "Tam Gün Kapsamlı Tur (10 saat)",
    "2 Günlük Bursa Keşif Turu",
    "Özel Tema Turu (isteğe göre)"
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-primary">
            İletişim & Rezervasyon
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bursa'da unutulmaz bir deneyim için bizimle iletişime geçin. 
            Size özel tur planları hazırlayalım.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="bg-card hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-full bg-muted ${info.color}`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg text-primary mb-2">
                          {info.title}
                        </h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* WhatsApp Quick Contact */}
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-medium text-lg text-green-800 mb-2">
                  Hızlı WhatsApp İletişim
                </h3>
                <p className="text-green-700 text-sm mb-4">
                  Anında yanıt için WhatsApp'tan yazın
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  WhatsApp'ta Mesaj Gönder
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  Tur Planlama Formu
                </CardTitle>
                <p className="text-muted-foreground">
                  Size en uygun tur planını hazırlayabilmemiz için formu doldurun
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-6">
                  {/* Personal Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Ad Soyad *</Label>
                      <Input id="name" placeholder="Adınız ve soyadınız" required />
                    </div>
                    <div>
                      <Label htmlFor="phone">Telefon *</Label>
                      <Input id="phone" placeholder="+90 555 123 4567" required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">E-posta</Label>
                    <Input id="email" type="email" placeholder="ornek@email.com" />
                  </div>

                  {/* Tour Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="tour-type">Tur Türü</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Tur türü seçin" />
                        </SelectTrigger>
                        <SelectContent>
                          {tourPackages.map((pkg, index) => (
                            <SelectItem key={index} value={pkg.toLowerCase().replace(/ /g, '-')}>
                              {pkg}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="group-size">Grup Büyüklüğü</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Kişi sayısı" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Kişi</SelectItem>
                          <SelectItem value="2">2 Kişi</SelectItem>
                          <SelectItem value="3-5">3-5 Kişi</SelectItem>
                          <SelectItem value="6-10">6-10 Kişi</SelectItem>
                          <SelectItem value="10+">10+ Kişi</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="date">Tercih Edilen Tarih</Label>
                      <Input id="date" type="date" />
                    </div>
                    <div>
                      <Label htmlFor="language">Rehberlik Dili</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Dil seçin" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="turkish">Türkçe</SelectItem>
                          <SelectItem value="english">İngilizce</SelectItem>
                          <SelectItem value="german">Almanca</SelectItem>
                          <SelectItem value="arabic">Arapça (Temel)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Special Interests */}
                  <div>
                    <Label htmlFor="interests">Özel İlgi Alanları</Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
                      {[
                        "Tarih", "Mimari", "Gastronomi", "Fotoğrafçılık",
                        "Doğa", "Alışveriş", "Kültür", "Sanat"
                      ].map((interest) => (
                        <label key={interest} className="flex items-center space-x-2 text-sm">
                          <input type="checkbox" className="rounded" />
                          <span>{interest}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Özel İstekler / Notlar</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Özel istekleriniz, sağlık durumu, ulaşım tercihi vb. belirtiniz..."
                      rows={4}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      type="submit" 
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      Rezervasyon Talep Et
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      className="flex-1 border-green-600 text-green-600 hover:bg-green-50"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp'tan Sor
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle className="text-xl text-primary flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Buluşma Noktaları
              </CardTitle>
              <p className="text-muted-foreground">
                Bursa şehir merkezindeki uygun buluşma noktalarından turlarımızı başlatıyoruz
              </p>
            </CardHeader>
            <CardContent className="p-0">
              <div className="bg-muted/50 h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Google Maps Entegrasyonu
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Kent Meydanı, Koza Han, Ulucami çevresi ve daha fazlası...
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: Users, number: "1000+", label: "Memnun Ziyaretçi" },
            { icon: Calendar, number: "15+", label: "Yıl Deneyim" },
            { icon: MapPin, number: "50+", label: "Tur Lokasyonu" },
            { icon: MessageCircle, number: "4.9/5", label: "Müşteri Puanı" }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="text-center bg-card">
                <CardContent className="p-6">
                  <IconComponent className="h-8 w-8 text-secondary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}