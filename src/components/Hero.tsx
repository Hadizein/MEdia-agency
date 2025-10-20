import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      
      {/* Dot Pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 opacity-20">
        <div className="grid grid-cols-8 gap-3 p-8">
          {[...Array(64)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: `${i * 0.05}s` }} />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-8 animate-fade-in">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-semibold">Creative Agency</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 animate-fade-in leading-tight">
            We Create
            <br />
            <span className="text-primary">Bold Brands</span>
            <br />
            That Matter
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl animate-fade-in">
            A creative powerhouse specializing in branding, digital marketing, web development, and design that drives real results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Button
              size="lg"
              onClick={() => scrollToSection("services")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg text-lg px-8 group"
            >
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8"
            >
              Let's Talk
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-muted-foreground font-medium">Scroll</span>
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};
