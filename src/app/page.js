"use client";
import { useState, useEffect} from "react";
import TaskInput from "@/components/TaskInput";
import TaskList from "@/components/TaskList";
import FilterBar from '@/components/Filterbar';
import DarkModeToggle from '@/components/DarkModeToggle';
import Footer from '@/components/Footer';



export default function HomePage() {
  const [filter, setFilter] = useState("all"); // ✅ filter state
  const [tasks, setTasks] = useState([]);



  useEffect(() => {
    const stored = localStorage.getItem("tasks");
    if (stored) {
      setTasks(JSON.parse(stored));
    }
  }, []);

  // 💾 Save tasks to localStorage every time they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title: title,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };

  const toggleTask = (id) => {
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updated);
  };

  const deleteTask = (id) => {
    const filtered = tasks.filter((task) => task.id !== id);
    setTasks(filtered);
  };
  const getFilteredTasks = () => {
  if (filter === "done") return tasks.filter((t) => t.completed);
  if (filter === "pending") return tasks.filter((t) => !t.completed);
  return tasks;
};

  return (
      <>
      <main className="flex-grow w-full max-w-4xl mx-auto p-4 mt-10">
      <DarkModeToggle/>
      <h1 className="text-2xl font-bold mb-6 text-center">Task Manager</h1>
      <TaskInput onAdd={addTask} />
      <FilterBar current={filter} onChange={setFilter} />
      <TaskList 
      tasks={getFilteredTasks()} onToggle={toggleTask} onDelete={deleteTask} 
      />
    </main>
    <Footer/>
    </>
  );
}
