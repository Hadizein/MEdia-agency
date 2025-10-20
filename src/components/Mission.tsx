import { Target, Heart, Users, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To empower young people with the knowledge, skills, and confidence they need to reach their full potential and become leaders in their communities.",
  },
  {
    icon: Heart,
    title: "Compassionate Support",
    description:
      "We believe in creating safe, inclusive spaces where every youth feels heard, valued, and supported on their journey to success.",
  },
  {
    icon: Users,
    title: "Community Focus",
    description:
      "Building strong connections between youth, families, and community partners to create lasting positive change.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Using creative approaches and proven methods to inspire growth, learning, and personal development.",
  },
];

export const Mission = () => {
  return (
    <section className="py-20 bg-muted" id="mission">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Do</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dedicated to making a meaningful difference in the lives of young
            people
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-lg">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
