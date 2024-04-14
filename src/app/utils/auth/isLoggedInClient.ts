import { createClient } from "@/app/utils/supabase/client";

export const isLoggedInClient = async () => {
  ("use client");

  const supbase = createClient();
  try {
    const {
      data: { user },
    } = await supbase.auth.getUser();
    return !!user;
  } catch (error) {
    console.error(error);
    return false;
  }
};
