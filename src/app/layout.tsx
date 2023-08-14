import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import "@styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Thieves' Library",
  description: "The Book Thieves MEC book exchange.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className + "min-h-screen transition-colors"}>
        <Providers>
          <div className="main antialiased dark:bg-gray-800">
            <div className="gradient " />
          </div>

          <Navbar />
          <main className="app">{children}</main>
        </Providers>

        {/* Allow more height for mobile menu on mobile */}
        <div className="h-40 md:hidden" />
      </body>
    </html>
  );
}
