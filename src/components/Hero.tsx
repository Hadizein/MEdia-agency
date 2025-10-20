import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="YouthGuide Team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/75 to-secondary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Empowering Youth,
          <br />
          <span className="text-secondary-foreground bg-secondary/90 px-4 py-2 rounded-lg inline-block mt-2">
            Building Futures
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-2xl mx-auto">
          Guiding young minds toward success through mentorship, education, and
          community support
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => scrollToSection("team")}
            className="bg-white text-primary hover:bg-white/90 shadow-lg text-lg px-8"
          >
            Meet the Team
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8"
          >
            Get in Touch
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
};
