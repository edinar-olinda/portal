import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
  };

  return (
    <section className="py-16 bg-primary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-text mb-12">
          Entre em Contato
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-text" />
              <div>
                <h3 className="font-semibold text-text">Telefone</h3>
                <p className="text-text-light">(88) 99334-5397</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-text" />
              <div>
                <h3 className="font-semibold text-text">Email</h3>
                <p className="text-text-light">contato@mariasilva.com.br</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="h-6 w-6 text-text" />
              <div>
                <h3 className="font-semibold text-text">Endereço</h3>
                <p className="text-text-light">
                  Rua Example, 123 - São Paulo, SP
                </p>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input placeholder="Nome" required />
            <Input type="email" placeholder="Email" required />
            <Textarea placeholder="Mensagem" className="min-h-[120px]" required />
            <Button type="submit" className="w-full bg-text text-white hover:bg-text/90">
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;