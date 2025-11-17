"use client";

import { useEffect, useState } from "react";

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Initialize theme from localStorage and system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const shouldBeDark = savedTheme === "dark" || (savedTheme === null && prefersDark);
    setIsDark(shouldBeDark);
    applyTheme(shouldBeDark);
    setIsMounted(true);
  }, []);

  const applyTheme = (dark) => {
    const html = document.documentElement;
    if (dark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  };

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  if (!isMounted) {
    return children;
  }

  return (
    <div data-theme-provider>
      {children}
      <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
    </div>
  );
}

function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="fixed bottom-6 right-6 p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-lg hover:shadow-xl transition-all hover:scale-110 z-40"
      aria-label="Toggle dark mode"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        // Sun icon
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 1.78a1 1 0 011.41 0l.707.707a1 1 0 01-1.41 1.41l-.707-.707a1 1 0 010-1.41zm2.828 2.828a1 1 0 011.41 0l.707.707a1 1 0 01-1.41 1.41l-.707-.707a1 1 0 010-1.41zm2.828 2.829a1 1 0 011.41 0l.707.707a1 1 0 01-1.41 1.41l-.707-.707a1 1 0 010-1.41zM10 7a3 3 0 100 6 3 3 0 000-6zm.22-8.22a1 1 0 00-1.41 0l-.707.707a1 1 0 000 1.41l.707.707a1 1 0 001.41-1.41L10.22.78zm2.828 2.829a1 1 0 00-1.41 0l-.707.707a1 1 0 001.41 1.41l.707-.707a1 1 0 000-1.41zm2.828 2.828a1 1 0 00-1.41 0l-.707.707a1 1 0 001.41 1.41l.707-.707a1 1 0 000-1.41zM10 13a1 1 0 110 2 1 1 0 010-2z"
            clipRule="evenodd"
          ></path>
        </svg>
      ) : (
        // Moon icon
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
        </svg>
      )}
    </button>
  );
}
