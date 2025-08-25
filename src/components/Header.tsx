import { Menu, Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import logoImage from "/logo.png";

export function Header() {
  const navigationItems = [
    { name: "Ana Sayfa", href: "#home" },
    { name: "Hakkımızda", href: "#about" },
    { name: "Tarihi Yerler", href: "#places" },
    { name: "Blog", href: "#blog" },
    { name: "Galeri", href: "#gallery" },
    { name: "İletişim", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img 
            src={logoImage} 
            alt="Tarihi Bursa" 
            className="h-10 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigationItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="transition-colors hover:text-secondary font-medium"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Contact Info & CTA */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Phone className="h-4 w-4 text-secondary" />
            <span>+90 532 797 0203</span>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Rezervasyon Yap
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col space-y-4 mt-6">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-2 py-2 text-lg font-medium transition-colors hover:text-secondary"
                >
                  {item.name}
                </a>
              ))}
              <div className="border-t pt-4 space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <Phone className="h-4 w-4 text-secondary" />
                  <span>+90 555 123 4567</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Mail className="h-4 w-4 text-secondary" />
                  <span>info@tarihibursa.com</span>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Rezervasyon Yap
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}