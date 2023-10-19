import React from "react";
import { FixedTopHeader, ThemeToggler } from "./style";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";

type HeaderProps = {
  toggleTheme: () => void;
  theme: string;
};

const Header = ({ toggleTheme, theme }: HeaderProps) => {
  return (
    <FixedTopHeader>
      <h1>Where in the world?</h1>
      <ThemeToggler onClick={toggleTheme}>
        {theme === "light" ? <MoonIcon /> : <SunIcon />}
        <span>{theme === "light" ? "Dark mode" : "Light mode"}</span>
      </ThemeToggler>
    </FixedTopHeader>
  );
};

export default Header;
