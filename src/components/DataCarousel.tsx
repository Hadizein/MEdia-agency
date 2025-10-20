import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Users, GraduationCap, Award, TrendingUp } from "lucide-react";

const statistics = [
  {
    icon: Users,
    number: "500+",
    label: "Youth Served",
    description: "Young people empowered through our programs annually",
    color: "from-primary to-primary/70",
  },
  {
    icon: GraduationCap,
    number: "95%",
    label: "Success Rate",
    description: "Of participants report improved confidence and skills",
    color: "from-secondary to-secondary/70",
  },
  {
    icon: Award,
    number: "50+",
    label: "Programs",
    description: "Educational and mentorship programs offered year-round",
    color: "from-primary to-secondary",
  },
  {
    icon: TrendingUp,
    number: "10 Years",
    label: "Experience",
    description: "Dedicated to youth development and community impact",
    color: "from-secondary to-primary",
  },
];

export const DataCarousel = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5" id="data">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Impact</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Making a real difference in our community
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
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
                      <Card className="p-8 h-full">
                        <div className={`inline-flex p-4 bg-gradient-to-br ${stat.color} rounded-2xl mb-6`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                          {stat.number}
                        </div>
                        <h3 className="text-2xl font-semibold mb-3">
                          {stat.label}
                        </h3>
                        <p className="text-muted-foreground">
                          {stat.description}
                        </p>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
