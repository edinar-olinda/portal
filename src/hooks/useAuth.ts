import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

export function useAuth() {
  const navigate = useNavigate();

  const { data: session, isLoading } = useQuery({
    queryKey: ['auth-session'],
    queryFn: async () => {
      const { data: { session } } = await supabase.auth.getSession();
      return session;
    },
  });

  const login = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (!error) navigate('/dashboard');
    return { error };
  };

  const logout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  return {
    session,
    isLoading,
    login,
    logout,
    isAuthenticated: !!session,
  };
}
