import ErrorIcon from "@mui/icons-material/Error";
import { Fade } from "@mui/material";
import { grey } from "@mui/material/colors";
import { alpha, createTheme, Palette } from "@mui/material/styles";
import createPalette from "@mui/material/styles/createPalette";
import { deepmerge } from "@mui/utils";

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    question: {
      main: string;
    };
  }
  interface PaletteOptions {
    question?: {
      main?: string;
    };
  }

  interface TypeBackground {
    mainScreenPaper: string;
    statusBar: string;
    headerBackground: string;
  }
  interface TypeBackgroundOptions {
    mainScreenPaper?: string;
    statusBar?: string;
    headerBackground?: string;
  }
}

const primaryHue = 220;
const secondaryHue = 216;
const border = "1px solid #000A";

const colorPalette: Palette = createPalette({
  mode: "dark",
  tonalOffset: 0.25,
  //action: { hover: `hsla(${primaryHue}, 100%, 47%, 0.1)` },
  primary: {
    main: `hsla(${primaryHue}, 100%, 47%, 1)`,
  },
  secondary: {
    main: "hsl(204, 50%, 15%)",
  },
  background: {
    default: grey[900],
    paper: `white`,
    mainScreenPaper: `hsla(210, 13%, 24%, 1)`,
    statusBar: `hsla(204, 22%, 13%, 1)`,
    headerBackground: `hsla(204, 22%, 13%, 1)`,
  },
  divider: "rgb(0,0,0)",
  error: {
    main: "hsla(360, 71%, 58%, 1)",
  },
  warning: {
    main: "hsla(43, 86%, 55%, 1)",
  },
  info: {
    main: "hsla(220, 100%, 47%, 1)",
  },
  success: {
    main: "hsla(161, 65%, 46%, 1)",
  },
  question: {
    main: "hsla(216, 100%, 68%, 1)",
  },
  text: {
    primary: "hsla(0, 0%, 90%, 1)",
    secondary: `hsla(${secondaryHue}, 13%, 56%, 1)`,
    disabled: `hsla(${secondaryHue}, 13%, 56%, 0.5)`,
  },
});

let theme = createTheme({
  palette: colorPalette,
  spacing: 8,
  typography: {
    fontFamily: [
      '"Segoe UI"',
      "-apple-system",
      "BlinkMacSystemFont",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    button: { textTransform: "none" },
  },
  shape: { borderRadius: 2 },
});

theme = createTheme(
  deepmerge(theme, {
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            background: grey[300],
          },
          body: {
            background: "white",
            height: "100vh",
            width: "100vw",
            position: "relative",
            overflowX: "hidden",
          },
          main: { flexGrow: 1 },
          "#root": {
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
          },
        },
      },
      MuiAppBar: {
        defaultProps: {
          elevation: 0,
          position: "relative",
        },
        styleOverrides: {
          root: { background: theme.palette.background.default },
        },
      },
      MuiPaper: {
        defaultProps: { variant: "elevation", elevation: 0 },
        styleOverrides: {
          outlined: { borderColor: "black" },
          elevation: {
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "#0005",
            boxShadow: "none",
          },
          elevation1: { boxShadow: "none" },
          elevation2: { boxShadow: "none" },
          elevation3: { boxShadow: "none" },
          elevation4: { boxShadow: "none" },
          elevation5: { boxShadow: "none" },
        },
      },
      MuiAutocomplete: {
        styleOverrides: {
          paper: { backgroundColor: theme.palette.grey["A700"] },
        },
      },
      MuiBackdrop: {
        styleOverrides: {
          root: {
            backdropFilter: "blur(0.5px)",
            background: "#1119",
          },
          invisible: {
            background: "#1111",
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
          },
        },
      },
      MuiCardHeader: {
        defaultProps: {
          titleTypographyProps: {
            variant: "h6",
            fontSize: "0.9rem",
          },
        },
        styleOverrides: {
          root: {
            background: theme.palette.background.default,
          },
          action: { margin: 0 },
        },
      },
      MuiCardActions: {
        defaultProps: {},
        styleOverrides: {
          root: {
            background: theme.palette.background.default,
            justifyContent: "flex-end",
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            boxShadow: theme.shadows[20],
            border: border,
            background: theme.palette.background.paper,
          },
          arrow: {
            fontSize: 20,
            width: 21,
            "&::before": {
              border: border,
              backgroundColor: theme.palette.background.paper,
              boxSizing: "border-box",
            },
          },
        },
        defaultProps: {
          arrow: true,
          TransitionComponent: Fade,
          TransitionProps: {
            timeout: {
              enter: 100,
              exit: 100,
            },
          },
          enterNextDelay: 50,
          enterDelay: 100,
          leaveDelay: 50,
          componentsProps: {
            popper: { sx: { p: 0 } },
            tooltip: {
              sx: [
                {
                  maxWidth: "none",
                  fontWeight: 500,
                  fontSize: "12px",
                  px: 1.5,
                  py: 0.5,
                  color: colorPalette.text.secondary,
                  pointerEvents: "auto",
                },
              ],
            },
          },
        },
      },
      MuiLoadingButton: {
        defaultProps: {
          size: "large",
          variant: "contained",
          disableElevation: true,
        },
      },
      MuiButton: {
        defaultProps: {
          size: "large",
          variant: "contained",
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            textTransform: "none",
            borderRadius: 2,
          },
          contained: {
            border: border,
          },
          outlinedSecondary: {
            color: theme.palette.text.secondary,
            borderColor: theme.palette.text.secondary,
            "&:hover": {
              color: theme.palette.text.primary,
              borderColor: theme.palette.text.primary,
            },
          },
          textPrimary: {
            color: theme.palette.primary.light,
          },
          startIcon: { marginRight: "4px" },
        },
      },
      MuiToggleButton: {
        styleOverrides: {
          sizeSmall: { height: 35, paddingLeft: 18, paddingRight: 18 },
          sizeMedium: { height: 40 },
          root: {
            "&.MuiToggleButton-primary": {
              color: theme.palette.text.secondary,
              "&.Mui-selected": {
                color: theme.palette.text.primary,
              },
            },
            "&.MuiToggleButton-secondary": {
              borderColor: theme.palette.text.secondary,
              color: theme.palette.text.secondary,
              "&.Mui-selected": {
                color: theme.palette.secondary.dark,
                background: theme.palette.text.secondary,
              },
            },
          },
        },
      },
      MuiInputAdornment: {
        styleOverrides: {
          root: { "& .MuiTypography-root": { fontSize: 13, marginTop: "2px" } },
          positionEnd: { paddingRight: 5 },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            fontSize: "0.9rem",
            fontWeight: 500,
            lineHeight: "normal",
            paddingLeft: "10px",
            "& .MuiSvgIcon-root": { marginRight: "6px" },
            "& .MuiSvgIcon-fontSizeSmall": {
              fontSize: "25px",
              padding: "0.2rem",
            },
            "& .MuiSvgIcon-fontSizeMedium": {
              fontSize: "25px",
              padding: "0.2rem",
            },
          },
        },
      },
      MuiTextField: {
        defaultProps: {
          size: "small",
          fullWidth: true,
          variant: "outlined",
          spellCheck: "false",
          autoComplete: "off",
        },
        styleOverrides: {
          root: {},
        },
      },
      MuiSlider: {
        styleOverrides: {
          root: {
            paddingTop: 6,
            paddingBottom: 6,
            "&.Mui-disabled": { opacity: 0.2 },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-notchedOutline": { fontSize: "13px" },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: colorPalette.primary.light,
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            fontSize: "14px",
            "&.Mui-focused": {
              color: colorPalette.primary.light,
            },
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          input: { fontSize: "14px" },
        },
      },
      MuiSelect: {
        defaultProps: {
          size: "small",
          variant: "outlined",
        },
      },
      MuiCircularProgress: {
        defaultProps: {
          size: 20,
        },
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            backgroundImage: "none",
            borderRadius: 8,
            border: border,
            borderColor: colorPalette.background.paper,
          },
        },
      },
      MuiDialogContentText: {
        styleOverrides: {
          root: {
            textAlign: "center",
            // fontSize: '16px',
            fontWeight: 400,
            lineHeight: "24px",
          },
        },
      },
      MuiDialogContent: {
        styleOverrides: {
          root: {
            textAlign: "center",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "24px",
          },
        },
      },

      MuiTab: {
        styleOverrides: {
          root: { textTransform: "none", "&.Mui-selected": { color: "white" } },
        },
      },
      MuiTabs: {
        styleOverrides: {
          flexContainer: { position: "relative", zIndex: 1 },
          indicator: { height: "100%", zIndex: 0 },
          "& .Mui-selected": { color: "white" },
        },
      },
      MuiAccordion: {
        styleOverrides: {
          root: {
            marginBottom: 6,
          },
          content: { "&.Mui-expanded": { margin: "12px 0" } },
        },
      },
      MuiAccordionDetails: {
        styleOverrides: {
          root: {
            padding: theme.spacing(2),
          },
        },
      },
      MuiAccordionSummary: {
        defaultProps: { disableRipple: false },
        styleOverrides: {
          root: {
            backgroundColor: colorPalette.background.default,
            "&.Mui-expanded": { minHeight: "auto", height: "auto", margin: 0 },
          },
          content: { "&.Mui-expanded": { margin: "12px 0" } },
        },
      },
      MuiSwitch: {
        styleOverrides: {
          root: {
            width: 42,
            height: 26,
            padding: 0,
            "& .MuiSwitch-switchBase": {
              padding: 0,
              margin: 2,
              transitionDuration: "300ms",
              "&.Mui-checked": {
                transform: "translateX(16px)",
                color: "#fff",
                "& + .MuiSwitch-track": {
                  backgroundColor: colorPalette.secondary.light,
                  opacity: 1,
                  border: 0,
                },
                "&.Mui-disabled + .MuiSwitch-track": {
                  opacity: 0.5,
                },
              },
              "&.Mui-focusVisible .MuiSwitch-thumb": {
                color: "#33cf4d",
                border: "6px solid #fff",
              },
              "&.Mui-disabled .MuiSwitch-thumb": {
                color:
                  theme.palette.mode === "light"
                    ? theme.palette.grey[100]
                    : theme.palette.grey[600],
              },
              "&.Mui-disabled + .MuiSwitch-track": {
                opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
              },
            },
            "& .MuiSwitch-thumb": {
              boxSizing: "border-box",
              width: 22,
              height: 22,
            },
            "& .MuiSwitch-track": {
              borderRadius: 26 / 2,
              backgroundColor: colorPalette.secondary.dark,
              opacity: 1,
              transition: theme.transitions.create(["background-color"], {
                duration: 500,
              }),
            },
          },
        },
      },
      MuiDataGrid: {
        styleOverrides: {
          root: {
            border: "none",
            "div::selection": {
              backgroundColor: colorPalette.secondary.light,
              color: colorPalette.secondary.contrastText,
            },
          },
          columnSeparator: { display: "none" },
          footerContainer: {
            backgroundColor: colorPalette.background.default,
            borderTop: "none",
          },
          cell: {
            "&:focus": {
              outline: "none",
            },
            "&:focus-within": {
              outline: "none",
            },
            fontWeight: 400,
            color: colorPalette.text.secondary,
          },
          columnHeader: {
            "&:focus": {
              outline: "none",
            },
            "&:focus-within": {
              outline: "none",
            },
            fontWeight: 800,
            color: colorPalette.text.secondary,
          },
        },
      },
    },
  })
);

theme!.components!.MuiDialogContent = {
  styleOverrides: {
    root: {
      padding: `${theme.spacing(3)}!important`,
    },
  },
};

// console.log('Theme ======>', theme);

export default theme;
