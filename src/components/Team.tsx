import { Card } from "@/components/ui/card";
import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";
import teamMember3 from "@/assets/team-member-3.jpg";
import teamMember4 from "@/assets/team-member-4.jpg";
import { Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Director & Lead Mentor",
    image: teamMember1,
    bio: "With over 10 years of experience in youth development, Sarah leads our team with passion and dedication to empowering the next generation.",
    email: "sarah@youthguide.org",
    linkedin: "#",
  },
  {
    name: "Michael Chen",
    role: "Youth Counselor",
    image: teamMember2,
    bio: "Michael specializes in career guidance and personal development, helping young people discover their strengths and pursue their dreams.",
    email: "michael@youthguide.org",
    linkedin: "#",
  },
  {
    name: "Amara Williams",
    role: "Program Coordinator",
    image: teamMember3,
    bio: "Amara designs and oversees our educational programs, ensuring every youth has access to quality learning opportunities.",
    email: "amara@youthguide.org",
    linkedin: "#",
  },
  {
    name: "David Martinez",
    role: "Community Outreach Specialist",
    image: teamMember4,
    bio: "David builds bridges between our organization and the community, creating partnerships that amplify our impact.",
    email: "david@youthguide.org",
    linkedin: "#",
  },
];

export const Team = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden" id="team">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-primary font-bold text-sm uppercase tracking-wider mb-4 block">The Dream Team</span>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Meet the <span className="text-primary">Creators</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Talented individuals united by passion for creative excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <Card className="overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-2xl bg-card">
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Social links overlay */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                    <a
                      href={`mailto:${member.email}`}
                      className="p-3 bg-white hover:bg-primary rounded-full transition-all shadow-lg"
                    >
                      <Mail className="h-4 w-4 text-foreground hover:text-primary-foreground" />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white hover:bg-primary rounded-full transition-all shadow-lg"
                    >
                      <Linkedin className="h-4 w-4 text-foreground hover:text-primary-foreground" />
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                  <p className="text-primary font-semibold mb-3 text-sm uppercase tracking-wide">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
