import './globals.css';
import { ReactNode } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'Portafolio Benjamin',
  description: 'Portafolio profesional de Benjamin Millalonco',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head />
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors">
        <Navbar />
        <main className="min-h-screen p-6 md:p-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
