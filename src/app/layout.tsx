import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import clsx from "clsx";
import { NavBar } from "./components/organisms";
import { AuthProvider } from "./HOC";
import { ChatBubble } from "./components";

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
  return (
    <html lang="en">
      <ChatBubble />
      <body className={clsx(inter.className, "flex min-h-screen flex-col")}>
        <NavBar />
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
