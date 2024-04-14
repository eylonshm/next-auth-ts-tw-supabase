"use server";
import { createServerClient } from "@/app/utils";

export const login = async (email: string, password: string) => {
  const supabase = createServerClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  console.log("error =>", error);
  console.log("data =>", data);
  if (!error) {
  }
};
