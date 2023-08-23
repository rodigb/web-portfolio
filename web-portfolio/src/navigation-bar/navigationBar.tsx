import React, { useState } from "react";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import "../App.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SidebarContent from "./sidebarContent";

export const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  interface Props {
    children: React.ReactElement;
  }

  function HideOnScroll(props: Props) {
    const { children } = props;

    const trigger = useScrollTrigger();

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Box sx={{ flexGrow: 1, position: "fixed", width: "100vw" }}>
      <HideOnScroll>
        <AppBar>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1, ml: 4 }}>
              <Typography sx={{ fontWeight: "bold" }}>Rodi Gemici</Typography>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: "100%" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer}
            sx={{ m: 0 }}
          >
            <CloseIcon sx={{ color: "black" }} />
          </IconButton>
          <SidebarContent />
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;
