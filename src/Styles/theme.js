import { createTheme } from "@mui/material";
import SwingHappy from "../fonts/SwingHappy.otf";

export const theme = createTheme({
  root: {
    backgroundColor: "#fff",
  },
  palette: {
    primary: {
      main: "#413e35",
    },
    secondary: {
      main: "#11995e",
    },
    background: {
      default: "#fff",
    },
    neutral: {
      main: "#03031b",
      contrastText: "#fff",
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: `
          @font-face {
            font-family: 'SwingHappy';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: local('SwingHappy'), local('SwingHappy-Regular'), url(${SwingHappy}) format('woff2');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
        `,
    },

    MuiCard: {
      variants: [
        {
          props: { variant: "header" },
          style: {
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
            alignItems: "center",
            backgroundColor: "transparent",
          },
        },
        {
          props: { variant: "empty" },
          style: {
            height: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "transparent",
          },
        },
        {
          props: { variant: "centerCard" },
          style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            backgroundColor: "transparent",
          },
        },
        {
          props: { variant: "post-it" },
          style: {
            padding: "1.5em",
            background: "#4fc3f7",
            position: "relative",
            minHeight: "10em",
            marginBottom: "2em",
            borderRadius: 0,
            overflow: "inherit",
            "&::before": {
              content: '""',
              position: "absolute",
              bottom: "-2em",
              right: 0,
              borderWidth: "2em 2em 0 0",
              borderStyle: "solid",
              borderColor: "#4fc3f7 transparent",
              filter: "brightness(90%)",
            },
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: "-2em",
              left: 0,
              right: "2em",
              borderWidth: "1em",
              borderStyle: "solid",
              borderColor: "#4fc3f7",
            },
          },
        },
        {
          props: { variant: "post-it", color: "secondary" },
          style: {
            background: "#81c784",

            "&::before": {
              borderColor: "#81c784 transparent",
            },
            "&::after": {
              borderColor: "#81c784",
            },
          },
        },
      ],
    },
  },
});
