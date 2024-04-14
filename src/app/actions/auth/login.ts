"use server";
import { createServerClient } from "@/app/utils";

export const login = async (email: string, password: string) => {
  try {
    const supabase = createServerClient();
    const { data, error: signInError } = await supabase.auth.signInWithPassword(
      {
        email,
        password,
      }
    );
    if (signInError) return;

    const { access_token, refresh_token } = data.session;
    await supabase.auth.setSession({
      access_token,
      refresh_token,
    });
  } catch {
    console.error("Error logging in1");
  }
};
