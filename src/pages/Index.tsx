
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Services />
      <Testimonials />
      <WhatsAppButton />
      <Footer />
    </main>
  );
};

export default Index;
