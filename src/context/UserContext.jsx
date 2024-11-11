import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setToken(data.token);
        setEmail(data.email);
        return { success: true };
      } else {
        const errorData = await response.json();
        console.error("Login failed:", errorData);
        return {
          success: false,
          message: errorData.message || "Error en el inicio de sesión",
        };
      }
    } catch (error) {
      console.error("Error:", error);
      return { success: false, message: "Error de red o del servidor" };
    }
  };

  const register = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setToken(data.token);
        setEmail(data.email);
        return { success: true };
      } else {
        const errorData = await response.json();
        console.error("Registration failed:", errorData);
        return {
          success: false,
          message: errorData.message || "Error en el registro",
        };
      }
    } catch (error) {
      console.error("Error:", error);
      return { success: false, message: "Error de red o del servidor" };
    }
  };

  const logout = () => {
    setToken(null);
    setEmail(null);
  };

  return (
    <UserContext.Provider value={{ token, email, login, register, logout }}>
      {children}
    </UserContext.Provider>
  );
};
