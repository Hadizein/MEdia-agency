import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Trophy, Users, Briefcase, Star } from "lucide-react";

const statistics = [
  {
    icon: Users,
    number: "200+",
    label: "Happy Clients",
    description: "Brands we've helped grow and succeed across industries",
  },
  {
    icon: Briefcase,
    number: "500+",
    label: "Projects Delivered",
    description: "Successful campaigns, websites, and creative solutions launched",
  },
  {
    icon: Trophy,
    number: "15+",
    label: "Industry Awards",
    description: "Recognition for excellence in design and marketing",
  },
  {
    icon: Star,
    number: "98%",
    label: "Client Satisfaction",
    description: "Of clients rate our work as excellent or outstanding",
  },
];

export const DataCarousel = () => {
  return (
    <section className="py-32 bg-secondary text-secondary-foreground relative overflow-hidden" id="data">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-white/80 font-bold text-sm uppercase tracking-wider mb-4 block">By The Numbers</span>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Proven Track Record
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Numbers that speak to our commitment to excellence and client success
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {statistics.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <CarouselItem key={index} className="md:basis-1/2">
                    <div className="p-2">
                      <Card className="p-10 h-full bg-white hover:shadow-2xl transition-all duration-300 border-0 group cursor-pointer">
                        <div className="inline-flex p-5 bg-primary rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <div className="text-6xl font-black mb-3 text-primary">
                          {stat.number}
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-foreground">
                          {stat.label}
                        </h3>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                          {stat.description}
                        </p>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex border-white text-white hover:bg-white hover:text-secondary" />
            <CarouselNext className="hidden md:flex border-white text-white hover:bg-white hover:text-secondary" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
