import useTheme from "@mui/material/styles/useTheme";
import Navbar from "./navigation-bar/navigationBar";
import HomePage from "./pages/homePage";
import React from "react";
import { CssBaseline, IconButton, ThemeProvider } from "@mui/material";

import { useThemeContext } from "./theme/ThemeContextProvider";
import WorkPage from "./pages/workPage";
import AboutPage from "./pages/aboutPage";

function App() {
  const { theme } = useThemeContext();
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Navbar />
        <HomePage />
        <WorkPage />
        <AboutPage />
      </ThemeProvider>
    </>
  );
}

export default App;
