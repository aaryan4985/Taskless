import React, { useState } from "react";

function App() {
  const [taskText, setTaskText] = useState("");

  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (taskText.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    setTasks([...tasks, newTask]);

    setTaskText("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Taskless 📝</h1>

        <div className="flex gap-2">
          <input
            type="text"
            value={taskText} // controlled input
            onChange={(e) => setTaskText(e.target.value)} // updates state
            placeholder="Enter a task..."
            className="flex-1 border border-gray-300 p-2 rounded"
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
                  onChange={() =>
                    setTasks(
                      tasks.map((t) =>
                        t.id === task.id ? { ...t, completed: !t.completed } : t
                      )
                    )
                  }
                />
                <span
                  className={task.completed ? "line-through text-gray-500" : ""}
                >
                  {task.text}
                </span>
              </div>
              <button
                onClick={() => setTasks(tasks.filter((t) => t.id !== task.id))}
                className="text-red-600 hover:text-red-800 text-sm"
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
