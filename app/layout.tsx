import './globals.css';
import { ReactNode } from 'react';
import Navbar from './components/Navbar';
import ThemeProviderWrapper from './components/ThemeProviderWrapper';

export const metadata = {
  title: 'Portafolio',
  description: 'Mi portafolio con Next.js y Tailwind v4',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="bg-background text-foreground transition-colors duration-300">
        <ThemeProviderWrapper>
          <Navbar />
          {children}
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
