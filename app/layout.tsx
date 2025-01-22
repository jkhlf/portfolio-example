import type { Metadata } from "next";
import "./globals.css";
import Provider from "@/app/content/provider";
import Footer from "@/app/components/footer";
import { Navbar } from "@/app/components/nav";

export const metadata: Metadata = {
  title: {
    default: 'Example Blog',
    template: '%s | Example Blog',
  },
  description: 'An example blog description.',
  openGraph: {
    title: 'Example Blog',
    description: 'Find all example links and social networks in one place.',
    siteName: 'Example Blog',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className='antialiased max-w-2xl mt-8 lg:mx-auto'>
        <Provider>
          <Navbar />
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
            {children}
          </main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}