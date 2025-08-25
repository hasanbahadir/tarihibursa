import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import logoImage from "figma:asset/01c320db4ac67de973751bbb564fc309b6023b7a.png";

export function Footer() {
  const quickLinks = [
    { name: "Ana Sayfa", href: "#home" },
    { name: "Hakkımızda", href: "#about" },
    { name: "Tarihi Yerler", href: "#places" },
    { name: "Blog", href: "#blog" },
    { name: "Galeri", href: "#gallery" },
    { name: "İletişim", href: "#contact" }
  ];

  const tourTypes = [
    "Şehir Merkezi Turu",
    "Cumalıkızık Köyü Turu",
    "Uludağ Doğa Turu",
    "Gastronomi Turu",
    "Kültür ve Sanat Turu",
    "Özel Tema Turları"
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:text-blue-600" },
    { icon: Instagram, href: "#", color: "hover:text-pink-600" },
    { icon: Twitter, href: "#", color: "hover:text-blue-400" },
    { icon: Youtube, href: "#", color: "hover:text-red-600" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={logoImage} 
                alt="Tarihi Bursa" 
                className="h-10 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Bursa'nın tarihi ve kültürel zenginliklerini 15 yılı aşkın deneyimimle 
              sizlerle paylaşıyor, unutulmaz anılar biriktirmenize yardımcı oluyorum.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-secondary" />
                <span>+90 555 123 4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-secondary" />
                <span>husamettin@tarihibursa.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-secondary" />
                <span>Osmangazi, Bursa</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Hızlı Linkler</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tour Types */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Tur Hizmetleri</h3>
            <ul className="space-y-2">
              {tourTypes.map((tour) => (
                <li key={tour}>
                  <span className="text-primary-foreground/80 text-sm hover:text-secondary transition-colors cursor-pointer">
                    {tour}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Bizi Takip Edin</h3>
            <p className="text-primary-foreground/80 text-sm">
              Bursa'daki yeni gezilecek yerler ve özel turlar hakkında güncel kalın.
            </p>
            
            {/* Newsletter */}
            <div className="space-y-2">
              <input 
                type="email" 
                placeholder="E-posta adresiniz"
                className="w-full px-3 py-2 text-sm bg-primary-foreground/10 border border-primary-foreground/20 rounded text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:border-secondary"
              />
              <Button 
                size="sm" 
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              >
                Abone Ol
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 pt-2">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`p-2 bg-primary-foreground/10 rounded-full transition-all duration-300 ${social.color}`}
                  >
                    <IconComponent className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-primary-foreground/80">
            © 2024 Tarihi Bursa - Hüsamettin Kaplan. Tüm hakları saklıdır.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
              Gizlilik Politikası
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
              Kullanım Şartları
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
              İptal ve İade
            </a>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <div className="text-center">
            <p className="text-sm text-primary-foreground/80 mb-4">
              Lisanslı Turizm Rehberi - Kültür ve Turizm Bakanlığı Sertifikalı
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-primary-foreground/60">
              <span>Rehberlik Ruhsatı: TR-2008-001234</span>
              <span>•</span>
              <span>TÜRREB Üyesi</span>
              <span>•</span>
              <span>İngilizce Sertifikalı</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}