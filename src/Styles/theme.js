import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#403caa",
    },
    secondary: {
      main: "#11995e",
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
  components: {
    // Name of the component
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
