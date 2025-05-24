import React, { useState } from 'react';

const CounterFunction = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 text-center">
      <h2 className="text-xl font-semibold mb-4">Functional Counter</h2>
      <p className="text-lg mb-2">Count: {count}</p>
      <button onClick={() => setCount(count - 1)} className="px-3 py-1 bg-red-500 text-white rounded mr-2">-</button>
      <button onClick={() => setCount(count + 1)} className="px-3 py-1 bg-green-500 text-white rounded">+</button>
    </div>
  );
};

export default CounterFunction;
