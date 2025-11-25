"use client";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";


const queryClient = new QueryClient()
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <QueryClientProvider client={queryClient}>
            {/* <Navbar /> */}
            {children}
          </QueryClientProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
