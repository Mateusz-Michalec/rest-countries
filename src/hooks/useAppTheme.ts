import { useState } from "react";
import { Theme, darkTheme, lightTheme } from "../styles/Theme";

type UseAppTheme = {
  theme: string;
  toggleTheme: () => void;
  themeProperties: Theme;
};

export const useAppTheme = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme((theme) => (theme === "light" ? "dark" : "light"));

  const themeProperties = theme === "light" ? lightTheme : darkTheme;

  const Theme: UseAppTheme = {
    theme,
    toggleTheme,
    themeProperties,
  };

  return Theme;
};
