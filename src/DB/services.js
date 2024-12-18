import { supabase } from "./Supabase";

export const signInWithGoogle = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });
  if (error) {
    console.error("Error signing in with Google:", error.message);
  } else {
    return data;
  }
};
