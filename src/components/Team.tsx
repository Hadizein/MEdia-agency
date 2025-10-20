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
    <section className="py-20 bg-background" id="team">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate professionals dedicated to youth empowerment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4">
                  {member.bio}
                </p>
                <div className="flex gap-3">
                  <a
                    href={`mailto:${member.email}`}
                    className="p-2 bg-accent hover:bg-primary hover:text-white rounded-full transition-all"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-accent hover:bg-primary hover:text-white rounded-full transition-all"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
