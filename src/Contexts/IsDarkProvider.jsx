import React, { createContext, useEffect, useState } from "react";

export const IsDarkContext = createContext();

const IsDarkProvider = ({ children }) => {
  let localData = localStorage.getItem("isDark");
  localData = localData ? JSON.parse(localData) : false;
  const [isDark, setIsDark] = useState(localData);

  useEffect(() => {
    localStorage.setItem("isDark", JSON.stringify(isDark));
  }, [isDark]);
  return (
    <IsDarkContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </IsDarkContext.Provider>
  );
};

export default IsDarkProvider;
