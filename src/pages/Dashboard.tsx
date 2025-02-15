import { Card } from "@/components/ui/card";
import { StarFilledIcon } from "@radix-ui/react-icons";
import Navbar from "@/components/Navbar";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export default function Dashboard() {
  const { isAuthenticated, logout } = useAuth();
  const { data: reviews, isLoading } = useQuery({
    queryKey: ['reviews'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <Navbar />
      <div className="container max-w-6xl mx-auto py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Avaliações Recentes</h1>
          <Button variant="outline" onClick={logout}>
            <LogOut className="h-4 w-4 mr-2" />
            Sair
          </Button>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        ) : (
          <div className="grid gap-6">
            {reviews?.map((review) => (
              <Card key={review.id} className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{review.name}</h3>
                    <div className="flex items-center gap-1 mt-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <StarFilledIcon key={i} className="h-4 w-4 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <time className="text-sm text-muted-foreground">
                    {new Date(review.created_at).toLocaleDateString()}
                  </time>
                </div>
                <p className="mt-4 text-muted-foreground">{review.comment}</p>
              </Card>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
