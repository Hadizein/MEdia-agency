import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-20 relative overflow-hidden" id="contact">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Build Something <span className="text-primary">Amazing?</span>
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Let's turn your vision into reality. Get in touch and let's start creating.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-6 shadow-xl">
            Start Your Project
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-3xl font-black mb-4"><span className="text-primary">Creative</span>Agency</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              A bold creative agency specializing in branding, digital marketing, and design that drives real results.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/YouthGuide1" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 hover:bg-primary rounded-full transition-all hover:scale-110">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-3 bg-white/10 hover:bg-primary rounded-full transition-all hover:scale-110">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-3 bg-white/10 hover:bg-primary rounded-full transition-all hover:scale-110">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-white/80 hover:text-primary transition-colors text-lg">Services</a></li>
              <li><a href="#mission" className="text-white/80 hover:text-primary transition-colors text-lg">About Us</a></li>
              <li><a href="#team" className="text-white/80 hover:text-primary transition-colors text-lg">Our Team</a></li>
              <li><a href="#data" className="text-white/80 hover:text-primary transition-colors text-lg">Portfolio</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 uppercase tracking-wider">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="h-6 w-6 mt-1 flex-shrink-0 text-primary" />
                <a href="mailto:hello@creative-agency.com" className="text-white/80 hover:text-primary transition-colors text-lg">hello@creative-agency.com</a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-6 w-6 mt-1 flex-shrink-0 text-primary" />
                <a href="tel:+15551234567" className="text-white/80 hover:text-primary transition-colors text-lg">+1 (555) 123-4567</a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-6 w-6 mt-1 flex-shrink-0 text-primary" />
                <span className="text-white/80 text-lg">123 Creative Street<br />Innovation District, CA 90210</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60">© {new Date().getFullYear()} Creative Agency. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/60 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
