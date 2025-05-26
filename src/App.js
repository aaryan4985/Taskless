import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Taskless 📝</h1>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter a task..."
            className="flex-1 border border-gray-300 p-2 rounded"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
