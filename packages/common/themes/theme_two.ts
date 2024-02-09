import type { Components, Theme, ThemeOptions } from "@mui/material/styles";
import { CSSProperties } from "react";

const commonPalette = {
  primary: {
    light: "#4f92ee",
    main: "#3A5CB4",
    dark: "#03387a",
  },
  secondary: {
    light: "#f5f8fa",
    main: "#F1F9FF",
    dark: "#E8EDF5",
  },
  error: {
    light: "#f72b2b",
    main: "#c50e1f",
    dark: "#a80f22",
  },
  warning: {
    light: "#fcd37a",
    main: "#ffcc66",
    dark: "#ffbc27",
  },
  info: {
    light: "#DDF1FF",
    main: "#096BDE",
    dark: "#0066cc",
  },
  success: {
    light: "#4caf50",
    main: "#2e7d32",
    dark: "#1b5e20",
  },
  common: {
    black: "#000",
    white: "#fff",
  },
};

const breakpoints = {
  values: {
    xs: 0,
    sm: 480,
    md: 810,
    lg: 1050,
    xl: 1400,
  },
};

type Mode = "light" | "dark";
const getStyleOverrides = (
  mode: Mode = "light"
): Components<Omit<Theme, "components">> => {
  let scrollbarColor;
  let scrollbarBackgroundColor;
  let scrollbarOnInteractionBackgroundColor;

  if (mode === "dark") {
    scrollbarColor = "#6b6b6b";
    scrollbarBackgroundColor = "#2b2b2b";
    scrollbarOnInteractionBackgroundColor = "#959595";
  } else {
    scrollbarColor = "#b2b1af";
    scrollbarBackgroundColor = "#f1efef";
    scrollbarOnInteractionBackgroundColor = "#959595";
  }

  return {
    MuiSkeleton: {
      defaultProps: {
        animation: "wave" as const,
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: `${scrollbarColor} ${scrollbarBackgroundColor}`,
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: scrollbarBackgroundColor,
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 8,
            backgroundColor: scrollbarColor,
            minHeight: 24,
            border: `2px solid ${scrollbarBackgroundColor}`,
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
            {
              backgroundColor: scrollbarOnInteractionBackgroundColor,
            },
          "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
            {
              backgroundColor: scrollbarOnInteractionBackgroundColor,
            },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
            {
              backgroundColor: scrollbarOnInteractionBackgroundColor,
            },
          "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
            backgroundColor: scrollbarBackgroundColor,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: mode === "light" ? "#f7f7f7" : "",
          transition: "background-color, box-shadow",
          borderRadius: "20px",
          "&:hover": {
            backgroundColor: (theme: Theme): CSSProperties["backgroundColor"] =>
              theme.palette.action.hover,
            boxShadow: (theme: Theme): CSSProperties["boxShadow"] =>
              theme.shadows[4],
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "initial",
          borderRadius: "25px",
          fontSize: "0.88rem",
          fontWeight: 400,
          paddingRight: "30px;",
          paddingLeft: "30px;",
        },
      },
    },
  };
};

const typography = {
  fontFamily: "FontUp",
};

const shape = {
  borderRadius: 5,
};

export const themeLight: ThemeOptions = {
  palette: {
    mode: "light",
    background: {
      default: "#F7F7f8",
      paper: "#FEFEFE",
    },
    ...commonPalette,
    text: {
      primary: "#262626", // Dark gray
      secondary: "#757575", // Gray
      disabled: "#999", // Light gray
    },
  },
  components: getStyleOverrides("light"),
  typography,
  shape,
  breakpoints,
};

export const themeDark: ThemeOptions = {
  palette: {
    mode: "dark",
    background: {
      paper: "#262626;",
    },
    ...commonPalette,
  },
  components: getStyleOverrides("dark"),
  typography,
  shape,
  breakpoints,
};

export const getSecondaryBgColor = (theme: Theme): string => {
  return theme.palette.mode === "dark" ? "#353535" : "#EEEFF0";
};
