import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/global.css";
import { SidebarProvider } from "@/contexts/shared/SidebarContext";
import { inter } from "@/font";

export const runtime = 'edge';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Likesub VIP",
  description: "Likesub VIP Frontend Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={inter.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider>
          {children}
        </SidebarProvider>
      </body>
    </html>
  );
}
