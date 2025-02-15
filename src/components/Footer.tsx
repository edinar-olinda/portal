import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <footer className="relative mt-20 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-gradient-x -z-10" />
      
      {/* Glass effect container */}
      <div className="container mx-auto px-6 py-12 backdrop-blur-sm bg-white/10">
        <div className={`grid md:grid-cols-2 gap-8 transform transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}>
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-text">Contato</h3>
            <div className="space-y-2">
              <a href="tel:+5588993345397" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone size={20} />
                <span>(88) 99334-5397</span>
              </a>
              <a href="mailto:edinaroliveira7@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail size={20} />
                <span>edinaroliveira7@gmail.com</span>
              </a>
              <p className="flex items-center gap-2">
                <MapPin size={20} />
                <span>Iguatu, CE</span>
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-text">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/edinar_fisioterapeuta/"
                target={"_blank"}
                className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all hover:scale-110 hover:-rotate-6"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
          <Link
            to="/dashboard"
            className="inline-block mt-2 text-sm text-black/50 hover:text-black/75 transition-colors"
          >
            Admin
          </Link>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p>&copy; 2025. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
