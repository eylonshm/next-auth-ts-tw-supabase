"use server";
import { createServerClient } from "@/app/utils/supabase/server";

export const isLoggedIn = async () => {
  const supabase = createServerClient();
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    return !!user;
  } catch (error) {
    console.error(error);
    return false;
  }
};
