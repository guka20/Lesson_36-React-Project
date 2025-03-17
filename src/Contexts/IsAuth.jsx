import React, { createContext, useState } from "react";

export const IsAuthContext = createContext();

const IsAuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  return (
    <IsAuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </IsAuthContext.Provider>
  );
};

export default IsAuthProvider;
