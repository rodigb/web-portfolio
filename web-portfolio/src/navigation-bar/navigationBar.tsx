import { AppBar, Box, Button, Grid, Toolbar } from "@mui/material";
import "../App.css";
import { createTheme, ThemeProvider } from "@mui/material";
import NightModeToggle from "./nightModeToggle";

export const navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Portfolio</Button>
            <Button color="inherit">Services</Button>
            <Button color="inherit">Contact</Button>
          </Box>
          <NightModeToggle />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default navbar;
