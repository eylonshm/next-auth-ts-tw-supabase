"use client";
import { useEffect, ReactNode, use } from "react";
import { createClient } from "@/app/utils/supabase/client";
import { useRouter, usePathname } from "next/navigation";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const router = useRouter();
  const pathName = usePathname();
  const supabase = createClient();

  useEffect(() => {
    (async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user && !pathName.startsWith("/auth")) router.push("/auth/login");
      if (user && pathName === "/auth/login") router.push("/");
    })();
  });

  return children;
};
