import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Provider from "@/components/provider";
import Header from "@/components/header";
import { cn } from "@/lib/utils";
import Footer from "@/components/footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Khlf Blog",
  description: "Personal Blog/Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
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
