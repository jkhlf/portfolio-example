'use client';
import { ThemeProvider, useTheme } from "next-themes";

export default function provider({children} : {children: React.ReactNode}) {
  return (
    <ThemeProvider attribute="class" enableSystem defaultTheme="system" disableTransitionOnChange>
        {children}
    </ThemeProvider>
  )
}
