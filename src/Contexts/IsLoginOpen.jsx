import React, { createContext, useState } from "react";

export const IsLoginOpenContext = createContext();

const IsLoginOpenProvider = ({ children }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  return (
    <IsLoginOpenContext.Provider value={{ isLoginOpen, setIsLoginOpen }}>
      {children}
    </IsLoginOpenContext.Provider>
  );
};

export default IsLoginOpenProvider;
