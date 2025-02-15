import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  return (
    <Button
      className="fixed bottom-6 right-6 rounded-full w-16 h-16 bg-green-500 hover:bg-green-600 shadow-lg"
      onClick={() => window.open("https://wa.me/5588993345397", "_blank")}
    >
      <Phone className="h-8 w-8 text-white" />
    </Button>
  );
};

export default WhatsAppButton;