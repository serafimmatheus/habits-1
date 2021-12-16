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
      ],
    },
  },
});
