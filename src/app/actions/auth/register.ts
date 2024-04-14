"use server";
import { createServerClient } from "@/app/utils";

export const register = async (email: string, password: string) => {
  const supabase = createServerClient();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: "https://example.com/welcome",
    },
  });
  console.log("error =>", error);
  console.log("data =>", data);
};
