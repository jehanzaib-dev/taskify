"use client";
export default function FilterBar({ current, onChange }) {
  const filters = ["all", "done", "pending"];

  return (
    <div className="flex justify-center gap-4 mb-4">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => onChange(f)}
          className={`px-4 py-1 rounded capitalize ${
            current === f
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}