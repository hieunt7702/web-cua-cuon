"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="text-on-surface-variant hover:text-primary-container transition-colors mr-2">
        <span className="material-symbols-outlined text-2xl">light_mode</span>
      </button>
    );
  }

  const currentTheme = theme === 'system' ? resolvedTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="text-on-surface-variant hover:text-primary-container transition-colors mr-2"
      aria-label="Toggle Theme"
    >
      <span className="material-symbols-outlined text-2xl">
        {currentTheme === "dark" ? "light_mode" : "dark_mode"}
      </span>
    </button>
  );
}
