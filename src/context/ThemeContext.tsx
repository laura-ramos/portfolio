import React, { useState } from "react";

interface ThemeContextType {
  currentTheme: string;
  toggleTheme: () => void;
}

export const ThemeContext = React.createContext<ThemeContextType>({
  currentTheme: "light",
  toggleTheme: () => {},
});

interface props {
  children: JSX.Element | JSX.Element[];
}

export const ThemeProvider = ({ children } : props) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "violet");

  const toggleTheme = () => {
    setTheme(theme === "violet" ? "dark" : "violet");
    localStorage.setItem("theme", theme === "violet" ? "dark" : "violet");
  }

  return (
    <ThemeContext.Provider value={{ currentTheme: theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
