import React, { useState, useContext, createContext } from "react";
import { VizTheme } from "./VizTheme";

type ThemeContextType = { theme: VizTheme; toggle: () => void };

const ThemeContext = createContext<ThemeContextType>({
  theme: VizTheme.Dark,
  toggle: () => {}
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<VizTheme>(VizTheme.Dark);

  const toggle = () =>
    setTheme(prev =>
      prev === VizTheme.Dark ? VizTheme.Light : VizTheme.Dark
    );

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
