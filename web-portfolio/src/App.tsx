import useTheme from "@mui/material/styles/useTheme";
import Navbar from "./navigation-bar/navigationBar";
import HomePage from "./pages/homePage";
import React from "react";
import { CssBaseline, IconButton, ThemeProvider } from "@mui/material";

import WorkPage from "./pages/workPage";
import AboutPage from "./pages/aboutPage";
import theme from "./theme/theme";
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Navbar />
        <HomePage />
        {/* <WorkPage /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
