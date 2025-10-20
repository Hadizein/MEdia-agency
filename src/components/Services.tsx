import { Card } from "@/components/ui/card";
import { 
  Palette, 
  Target, 
  Code, 
  Megaphone, 
  Camera, 
  Layers,
  TrendingUp,
  Smartphone
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Branding & Identity",
    description: "Create memorable brands that resonate with your audience and stand the test of time.",
    color: "from-primary/20 to-primary/5"
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web apps built with cutting-edge technology and pixel-perfect design.",
    color: "from-primary/15 to-primary/5"
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies that amplify your reach and drive conversions.",
    color: "from-primary/20 to-primary/5"
  },
  {
    icon: Target,
    title: "Strategy & Consulting",
    description: "Expert guidance to position your brand for maximum impact and sustainable growth.",
    color: "from-primary/15 to-primary/5"
  },
  {
    icon: Camera,
    title: "Content Creation",
    description: "Engaging visuals and compelling copy that tell your story and captivate audiences.",
    color: "from-primary/20 to-primary/5"
  },
  {
    icon: Smartphone,
    title: "Social Media",
    description: "Build communities and foster engagement across all major social platforms.",
    color: "from-primary/15 to-primary/5"
  },
  {
    icon: Layers,
    title: "Graphic Design",
    description: "From logos to complete design systems, we craft visuals that make an impact.",
    color: "from-primary/20 to-primary/5"
  },
  {
    icon: TrendingUp,
    title: "Growth Marketing",
    description: "Scalable strategies and tactics to accelerate your business growth exponentially.",
    color: "from-primary/15 to-primary/5"
  }
];

export const Services = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden" id="services">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-primary font-bold text-sm uppercase tracking-wider mb-4 block">What We Do</span>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Full-Service
            <br />
            <span className="text-primary">Creative Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive suite of services designed to elevate your brand and drive meaningful results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 group cursor-pointer bg-card"
              >
                <div className={`inline-flex p-4 bg-gradient-to-br ${service.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
