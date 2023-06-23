import {
  AppBar,
  Box,
  Button,
  IconButton,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import "../App.css";
import NightModeToggle from "./nightModeToggle";
import MenuIcon from "@mui/icons-material/Menu";

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
            <IconButton color="inherit" aria-label="open drawer" edge="start">
              <MenuIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1, ml: 4 }}>
              <Typography fontWeight={800}>Rodi Gemici</Typography>
            </Box>
            <NightModeToggle />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </Box>
  );
};

export default navbar;
