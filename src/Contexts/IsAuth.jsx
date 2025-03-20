import { authUserUsingToken } from "@/helper/api";
import React, { createContext, useEffect, useState } from "react";

export const IsAuthContext = createContext();

const IsAuthProvider = ({ children }) => {
  let accessToken = localStorage.getItem("accessToken");
  const [isAuth, setIsAuth] = useState(accessToken !== null);
  return (
    <IsAuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </IsAuthContext.Provider>
  );
};

export default IsAuthProvider;
