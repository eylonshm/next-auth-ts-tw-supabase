import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import clsx from "clsx";
import { NavBar } from "./components/organisms";
import { createServerClient } from "./utils";
import { AuthProvider } from "./HOC";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next-Auth TS Supabase",
  description: "Built by Eylon Shmilovch",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createServerClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="en">
      <body className={clsx(inter.className, "flex min-h-screen flex-col")}>
        <NavBar />
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
