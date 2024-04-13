import { createBrowserClient } from "@supabase/ssr";

export const createClient = () => {
  console.log(
    "process.env.NEXT_PUBLIC_SUPABASE_URL =>",
    process.env.NEXT_PUBLIC_SUPABASE_URL
  );
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
};
