import { Box, IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useThemeContext } from "../theme/ThemeContextProvider";

const NightModeToggle = () => {
  const { mode, toggleColorMode } = useThemeContext();

  return (
    <IconButton sx={{}} onClick={toggleColorMode} color="inherit">
      {mode === "dark" ? (
        <Brightness7Icon sx={{ color: "yellow" }} />
      ) : (
        <Brightness4Icon sx={{ color: "black" }} />
      )}
    </IconButton>
  );
};

export default NightModeToggle;
