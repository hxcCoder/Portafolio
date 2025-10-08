import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
      <h1 className="text-xl font-bold">Mi Portafolio</h1>
      <ThemeToggle />
    </nav>
  );
}
