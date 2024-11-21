import type { Metadata } from "next";
import "./globals.css";
import Provider from "@/app/content/provider";
import Footer from "@/app/components/footer";
import { Navbar } from "@/app/components/nav";


export const metadata: Metadata = {
  title: {
    default: 'Khlf Blog',
    template: '%s | Khlhf Blog',
  },
  description: 'Todos os meus links importantes em um só lugar. Engenheiro de Software, estudante da Fatec e apaixonado por tecnologia.',
  openGraph: {
    title: 'Khlf Blog',
    description: 'Encontre todos os meus links e redes sociais em um só lugar',
    siteName: 'Khlf Blog',
    locale: 'pt_BR',
    type: 'website',
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
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