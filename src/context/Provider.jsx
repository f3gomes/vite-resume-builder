import React, { createContext, useState } from "react";

export const MyContext = createContext();

export default function Provider({ children }) {
  const [resumeState, setResumeState] = useState({});

  const contextValue = {
    resumeState,
    setResumeState,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
}
