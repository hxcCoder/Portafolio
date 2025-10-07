'use client';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-gray-100 dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <span className="text-2xl font-bold">Benjamin</span>
      <ThemeToggle />
    </nav>
  );
}
