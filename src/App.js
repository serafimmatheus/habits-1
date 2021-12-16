import { ThemeProvider, CssBaseline } from "@mui/material";
import { Routes } from "./Routes/index";
import { theme } from "./Styles/theme";

const App = () => (
  <ThemeProvider theme={theme}>
    <Routes />
    <CssBaseline />
  </ThemeProvider>
);

export default App;
