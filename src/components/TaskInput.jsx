"use client";
import { useState } from "react";

export default function TaskInput({ onAdd }) {
  const [text, setText] = useState("");

  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a task..."
        className="flex-grow border px-4 py-2 rounded bg-white text-black dark:bg-gray-800 dark:text-white placeholder-gray-400"
      />
      <button
      onClick={() => {
      onAdd(text.trim());
      setText("");
      }}
      disabled={text.trim() === ""}
      className={`px-4 py-2 rounded text-white transition
      ${text.trim() === "" 
      ? "bg-gray-400 cursor-not-allowed" 
      : "bg-blue-500 hover:bg-blue-600"}
      `}
      >
      Add
      </button>
</div>
  );
}
