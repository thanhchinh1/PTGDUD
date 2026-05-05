/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useContext } from "react";

const CountContext = createContext();

export const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increase = () => setCount((prev) => prev + 1);
  const decrease = () => setCount((prev) => prev - 1);

  return (
    <CountContext.Provider value={{ count, increase, decrease }}>
      {children}
    </CountContext.Provider>
  );
};

export const useCount = () => {
  return useContext(CountContext);
};
