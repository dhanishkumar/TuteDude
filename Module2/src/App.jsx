import React from 'react';
import CounterClass from './CounterClass';
import CounterFunction from './CounterFunction';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <CounterClass />
      <div className="my-6" />
      <CounterFunction />
    </div>
  );
}

export default App;
