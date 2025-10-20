import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white" id="contact">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">YouthGuide</h3>
            <p className="text-white/90 mb-4">
              Empowering young people to reach their full potential through
              guidance, support, and community.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/YouthGuide1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#team" className="hover:text-secondary transition-colors">
                  Meet the Team
                </a>
              </li>
              <li>
                <a href="#mission" className="hover:text-secondary transition-colors">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#data" className="hover:text-secondary transition-colors">
                  Our Impact
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-secondary transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@youthguide.org" className="hover:text-secondary transition-colors">
                  info@youthguide.org
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-secondary transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>123 Community St, Your City, ST 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/80">
          <p>&copy; {new Date().getFullYear()} YouthGuide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
