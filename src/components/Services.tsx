import { Activity, Dumbbell, User, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: <Activity className="h-8 w-8" />,
    title: "Reabilitação Fisioterapêutica",
    description: "Tratamentos personalizados para dores e lesões ortopédicas.",
  },
  {
    icon: <Dumbbell className="h-8 w-8" />,
    title: "Pilates",
    description: "Aulas personalizadas de acordo com as necessidades de cada paciente.",
  },
  {
    icon: <User className="h-8 w-8" />,
    title: "Avaliação Postural",
    description: "Análise completa da sua postura e plano de correção.",
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-text mb-12">
          Nossos Serviços
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center text-text">
                  {service.icon}
                </div>
                <CardTitle className="text-center text-text">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-text-light">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;