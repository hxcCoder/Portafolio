'use client';
import { useState } from 'react';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-500 transition-colors"
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}
