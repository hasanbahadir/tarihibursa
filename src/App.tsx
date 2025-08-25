import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { FeatureCards } from "./components/FeatureCards";
import { GuideSection } from "./components/GuideSection";
import { BlogSection } from "./components/BlogSection";
import { GallerySection } from "./components/GallerySection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeatureCards />
        <GuideSection />
        <BlogSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}