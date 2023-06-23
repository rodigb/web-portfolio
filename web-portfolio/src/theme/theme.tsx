import { PaletteMode } from "@mui/material";
import { amber, deepOrange, grey, deepPurple } from "@mui/material/colors";

const theme = {
  palette: {
    primary: "#212121",
  },
};

export const getDesignTokens = (mode: PaletteMode) => {
  const primaryColor = mode === "light" ? grey[50] : grey[900];
  const dividerColor = grey[900];
  const textColor = mode === "light" ? grey[900] : "#fff";
  const secondaryTextColor = mode === "light" ? grey[900] : grey[500];
  const backgroundColor = mode === "light" ? undefined : grey[900];

  return {
    palette: {
      mode,
      primary: {
        main: primaryColor,
      },
      divider: dividerColor,
      text: {
        primary: textColor,
        secondary: secondaryTextColor,
      },
      background: {
        default: backgroundColor,
        paper: backgroundColor,
      },
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          body: {
            transition: "all 0.3s linear",
          },
        },
      },
    },
  };
};

export default theme;
