import { authUserUsingToken } from "@/helper/api";
import React, { useState, useEffect, createContext } from "react";
export const AuthDataContext = createContext();
function getDataFromLocal() {
  let accessToken = localStorage.getItem("accessToken");
  if (accessToken === null) {
    return null;
  } else {
    return authUserUsingToken(accessToken);
  }
}
const AuthDataProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      const data = await getDataFromLocal();
      if (data) {
        setUserData(data); // Set userData with the fetched data
      }
    };

    fetchData();
  }, []);
  return (
    <AuthDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthDataContext.Provider>
  );
};

export default AuthDataProvider;
