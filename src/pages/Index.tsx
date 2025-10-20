import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Mission } from "@/components/Mission";
import { Team } from "@/components/Team";
import { DataCarousel } from "@/components/DataCarousel";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Mission />
      <DataCarousel />
      <Team />
      <Footer />
    </div>
  );
};

export default Index;
