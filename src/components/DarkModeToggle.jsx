"use client";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (dark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="flex justify-center mb-4">
      <button
        onClick={() => setDark(!dark)}
        className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-sm dark:text-white"
      >
        {dark ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  );
}
