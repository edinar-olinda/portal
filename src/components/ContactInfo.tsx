
import { Mail, Phone } from "lucide-react";

const ContactInfo = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-text mb-12">Entre em Contato</h2>
        <div className="max-w-2xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-4">
              <Phone className="h-6 w-6 text-primary" />
              <a href="tel:+5588993345397" className="text-lg hover:text-primary transition-colors">
                (88) 99334-5397
              </a>
            </div>
            <div className="flex items-center justify-center gap-4">
              <Mail className="h-6 w-6 text-primary" />
              <a href="mailto:edinaroliveira7@gmail.com" className="text-lg hover:text-primary transition-colors">
                edinaroliveira7@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
