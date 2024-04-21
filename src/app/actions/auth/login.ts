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
    console.log("signInError =>", signInError);
    if (signInError) return;

    const { access_token, refresh_token } = data.session;
    console.log("access_token, refresh_token =>", access_token, refresh_token);
    const {
      data: { user },
    } = await supabase.auth.setSession({
      access_token,
      refresh_token,
    });
    console.log("user =>", user);
  } catch {
    console.error("Error logging in1");
  }
};
