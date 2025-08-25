import { Button } from "./ui/button";
import { ArrowRight, MapPin, Clock, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1652868795643-20996bcc2c9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJzYSUyMHVsdWRhZyUyMG1vc3F1ZSUyMGhpc3RvcmljYWx8ZW58MXx8fHwxNzU2MTA2MjEwfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Bursa Historic View"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 font-serif text-white">
          Bursa'yı Keşfedin
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 font-serif text-white">
          Tarihi Dokuların İzinde
        </p>
        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto opacity-80 font-sans text-white">
          Osmanlı'nın ilk başkenti Bursa'da, deneyimli rehberimiz Hüsamettin Kaplan eşliğinde 
          tarihi ve kültürel zenginlikleri keşfedin. Ulucami'den Cumalıkızık'a, 
          her adımda tarihin izlerini yaşayın.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4"
          >
            Rehberlik Hizmeti Alın
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-white/20 border-white/30 text-white hover:bg-white/30 text-lg px-8 py-4"
          >
            Sanal Tur İzle
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="flex flex-col items-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mb-4">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">50+</h3>
            <p className="text-white/80">Tarihi Mekan</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mb-4">
              <Clock className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">15+</h3>
            <p className="text-white/80">Yıl Deneyim</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">1000+</h3>
            <p className="text-white/80">Memnun Ziyaretçi</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}