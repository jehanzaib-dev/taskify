"use client";
export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className="flex items-center justify-between  p-3 rounded shadow bg-gray-100 dark:bg-gray-800">
      <div className="flex justify-between items-center p-3 rounded bg-gray-100 dark:bg-gray-800">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="h-5 w-5 mr-3"
        />
        <span
          className={`text-black dark:text-white ${task.completed ? "line-through" : ""}`}>
          {task.title}
        </span>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="text-red-500 hover:text-red-700 font-semibold"
      >
        🗑
      </button>
    </div>
  );
}
