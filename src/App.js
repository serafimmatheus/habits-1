import { ThemeProvider } from "@mui/material";
import { Routes } from "./Routes/index";
import { theme } from "./Styles/theme";

const App = () => (
  <ThemeProvider theme={theme}>
    <Routes />
  </ThemeProvider>
);

export default App;
