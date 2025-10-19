import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/navbar/app";
import { SideBar } from "@/components/sidebar/app";
import { SidebarProvider } from "@/components/ui/sidebar"
import { ThemeProvider } from "@/components/context/themeProvider";
import { ThemeSwitch } from "./themeSwitch";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Craft for your future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-100`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} storageKey="admin-dashboard-theme">
          <ThemeSwitch />
          <SidebarProvider>
            <SideBar />
            <div className="w-full">
              <NavBar />
              <div className="p-6 mt-16">
                {children}
              </div>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
