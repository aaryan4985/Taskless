// src/App.js
import React, { useState, useEffect } from "react";

function App() {
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("taskless-tasks");
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("taskless-tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!taskText.trim()) return;
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTaskText("");
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Taskless 📝</h1>

        <div className="flex gap-2">
          <input
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder="Enter a task..."
            className="flex-1 border p-2 rounded"
          />
          <button
            onClick={addTask}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add
          </button>
        </div>

        <ul className="mt-6 space-y-2">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="bg-gray-100 border p-2 rounded flex justify-between items-center"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleComplete(task.id)}
                />
                <span
                  className={task.completed ? "line-through text-gray-500" : ""}
                >
                  {task.text}
                </span>
              </div>
              <button
                onClick={() => deleteTask(task.id)}
                className="text-red-500 hover:text-red-700 text-sm"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
