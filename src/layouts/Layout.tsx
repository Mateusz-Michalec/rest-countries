import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../componetns/Header";
import GlobalStyle, { Main } from "../styles/Global";
import { useAppTheme } from "../hooks/useAppTheme";
import { ThemeProvider } from "styled-components";

const Layout = () => {
  const { theme, toggleTheme, themeProperties } = useAppTheme();

  return (
    <ThemeProvider theme={themeProperties}>
      <GlobalStyle />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Main>
        <Outlet />
      </Main>
    </ThemeProvider>
  );
};

export default Layout;
