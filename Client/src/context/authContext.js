import axios from "axios";
import React from 'react';
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    console.log(inputs);
    const res = await axios.post("/api/Login", inputs);
    console.log(res);
     setCurrentUser(res);
  };

   const logout = async (inputs) => {
     await axios.post("/api/Logout");
     setCurrentUser(null);
   };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};