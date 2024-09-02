import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Provider from "@/components/provider";
import Header from "@/components/header";
import { cn } from "@/lib/utils";
import Footer from "@/components/footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('flex min-h-screen flex-col font-sans antialiased', montserrat.className)}>
        <Provider>
        <Header />
        <main className="grow">
          {children}
        </main>
        <Footer />
        </Provider>
        </body>
    </html>
  );
}
