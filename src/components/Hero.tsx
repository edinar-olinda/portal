import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-primary/20">
      <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-text">
            Dra. Edinar Olinda
            <span className="block text-text-light mt-2">
              Fisioterapeuta e Instrutora de Pilates
            </span>
          </h1>
          <p className="text-lg text-text-light">
            Transformando vidas através da fisioterapia e do Pilates há mais de 5 anos.
            Especialista em Fisioterapia Traumato Ortopedia.
          </p>
          <Button 
            size="lg"
            className="bg-text text-white hover:bg-text/90"
            onClick={() => window.open("https://wa.me/5588993345397", "_blank")}
          >
            <Phone className="mr-2 h-5 w-5" />
            Agende sua Consulta
          </Button>
        </div>
        <div className="relative h-[600px] rounded-lg overflow-hidden shadow-xl animate-fadeIn">
          <img
            src="/img.jpeg"
            alt="Dra. Maria Silva em sessão de Pilates"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;