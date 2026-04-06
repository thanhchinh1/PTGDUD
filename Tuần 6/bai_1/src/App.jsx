import React, { createContext, useContext, useState } from 'react';
import './App.css';

// Create context for global counter
const CounterContext = createContext(null);

// Provider that holds the global count state
function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  const value = {
    count,
    increment: () => setCount(c => c + 1),
    decrement: () => setCount(c => c - 1),
  };

  return (
    <CounterContext.Provider value={value}>
      {children}
    </CounterContext.Provider>
  );
}

// Component A: display count
function ComponentA() {
  const { count } = useContext(CounterContext);
  return (
    <div className="card">
      <h2>Component A</h2>
      <p>Count: <strong>{count}</strong></p>
    </div>
  );
}

// Component B: increment / decrement
function ComponentB() {
  const { increment, decrement } = useContext(CounterContext);
  return (
    <div className="card">
      <h2>Component B</h2>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default function App() {
  return (
    <CounterProvider>
      <div className="app-root">
        <h1>Counter Global (Simple Context)</h1>
        <div className="components-row">
          <ComponentA />
          <ComponentB />
        </div>
      </div>
    </CounterProvider>
  );
}
