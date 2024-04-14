"use server";
import { createServerClient } from "@/app/utils";

export const logout = async () => {
  const supabase = createServerClient();
  const { error } = await supabase.auth.signOut();
  console.log("error =>", error);
  if (!error) {
  }
};
