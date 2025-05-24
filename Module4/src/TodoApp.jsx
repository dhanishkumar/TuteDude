import React, { useState } from 'react';

export default function TodoApp() {
  const [title, setTitle] = useState('');
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState('');

  const handleAdd = () => {
    const trimmedTitle = title.trim();
    if (trimmedTitle === '') {
      setError('Task cannot be empty.');
      return;
    }

    setTodos([...todos, trimmedTitle]);
    setTitle('');
    setError('');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded">
      <h1 className="text-2xl font-bold mb-4 text-center">React To-Do App</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task"
          className="flex-grow border border-gray-300 rounded px-3 py-2"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

      <ul className="list-disc pl-5 space-y-1">
        {todos.map((task, index) => (
          <li key={index} className="text-gray-800">{task}</li>
        ))}
      </ul>
    </div>
  );
}
