import {Card, CardContent} from "@/components/ui/card";
import {Star} from "lucide-react";
import {useState} from "react";
import {supabase} from "@/integrations/supabase/client";
import {useToast} from "@/components/ui/use-toast";
import {Button} from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";

// Static testimonials data
const staticTestimonials = [
    {
        id: "1",
        name: "Alexandra",
        rating: 5,
        comment: "Não encontrei profissional como você e nem um atendimento top como o seu.",
    },
    {
        id: "2",
        name: "Felipe",
        rating: 5,
        comment: "Obrigado por todo cuidado, atendimento, acompanhamento, tratamento e recuperação excelentes.",
    },
];

const Testimonials = () => {
    const [name, setName] = useState("");
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const {toast} = useToast();

    const handleSubmitReview = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const {error} = await supabase.from("reviews").insert([
                {
                    name,
                    rating,
                    comment,
                },
            ]);

            if (error) throw error;

            toast({
                title: "Avaliação enviada!",
                description: "Obrigado por compartilhar sua experiência.",
            });

            // Reset form and close dialog
            setName("");
            setComment("");
            setRating(5);
            setIsOpen(false);

        } catch (error) {
            console.error("Error submitting review:", error);
            toast({
                title: "Erro ao enviar avaliação",
                description: "Por favor, tente novamente mais tarde.",
                variant: "destructive",
            });
        }
    };

    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-3xl font-bold text-text">Depoimentos</h2>
                    <Dialog open={isOpen} onOpenChange={setIsOpen}>
                        <DialogTrigger asChild>
                            <Button>Deixe sua Avaliação</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Compartilhe sua Experiência</DialogTitle>
                            </DialogHeader>
                            <form onSubmit={handleSubmitReview} className="space-y-4">
                                <div>
                                    <Input
                                        placeholder="Seu nome"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <div className="flex gap-2 mb-2">
                                        {[1, 2, 3, 4, 5].map((value) => (
                                            <button
                                                key={value}
                                                type="button"
                                                onClick={() => setRating(value)}
                                                className="focus:outline-none"
                                            >
                                                <Star
                                                    className={`h-6 w-6 ${
                                                        value <= rating
                                                            ? "fill-yellow-400 text-yellow-400"
                                                            : "fill-none text-gray-300"
                                                    }`}
                                                />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <Textarea
                                        placeholder="Seu comentário"
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                        required
                                    />
                                </div>
                                <Button type="submit" className="w-full">
                                    Enviar Avaliação
                                </Button>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {staticTestimonials.map((review) => (
                        <Card key={review.id} className="bg-white hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6">
                                <div className="flex justify-center mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-5 w-5 ${
                                                i < review.rating
                                                    ? "fill-yellow-400 text-yellow-400"
                                                    : "fill-none text-gray-300"
                                            }`}
                                        />
                                    ))}
                                </div>
                                <p className="text-text-light text-center mb-4">{review.comment}</p>
                                <p className="text-text font-semibold text-center">{review.name}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
