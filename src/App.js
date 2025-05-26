import React from "react"; // This lets us use React features
import "./App.css"; // Optional: if you add custom styles

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Taskless 📝</h1>

        {/* Task Input */}
        <input
          type="text"
          placeholder="Enter a task..."
          className="w-full border border-gray-300 p-2 rounded mb-4"
        />
      </div>
    </div>
  );
}

export default App;
