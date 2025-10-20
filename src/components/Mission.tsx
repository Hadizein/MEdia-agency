import { Zap, Target, Rocket, Heart } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Bold & Fearless",
    description: "We push boundaries and challenge conventions to create work that stands out and makes waves.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every strategy, design, and campaign is crafted with measurable impact and ROI in mind.",
  },
  {
    icon: Rocket,
    title: "Innovation First",
    description: "We stay ahead of trends and leverage cutting-edge tools to keep your brand at the forefront.",
  },
  {
    icon: Heart,
    title: "Partnership",
    description: "Your success is our success. We collaborate closely to bring your vision to life.",
  },
];

export const Mission = () => {
  return (
    <section className="py-32 bg-muted relative overflow-hidden" id="mission">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-primary font-bold text-sm uppercase tracking-wider mb-4 block">Our Philosophy</span>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Why Choose <span className="text-primary">Us?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're not just another agency. We're a team of passionate creators, strategists, and innovators dedicated to building brands that leave a lasting impression.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="group">
                <div className="flex flex-col items-center text-center">
                  <div className="inline-flex p-6 bg-primary rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <Icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
