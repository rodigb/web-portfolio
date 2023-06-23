import {
  AppBar,
  Box,
  Button,
  Slide,
  Toolbar,
  useScrollTrigger,
} from "@mui/material";
import "../App.css";
import NightModeToggle from "./nightModeToggle";

export const navbar = () => {
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

  return (
    <Box sx={{ flexGrow: 1 }}>
      <HideOnScroll>
        <AppBar>
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
      </HideOnScroll>
    </Box>
  );
};

export default navbar;
