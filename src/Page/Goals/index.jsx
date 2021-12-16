import CreateGoal from "../../Components/CreateGoal";
import SearchGoals from "../../Components/SearchGoals";
import { HeaderDash } from "../../Components/HeaderDash";
import { theme } from "../../Styles/theme";
import Header from "../../Components/Header";
import { CssBaseline, ThemeProvider } from "@mui/material";

const Goals = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />

      <CreateGoal />

      <SearchGoals />
    </ThemeProvider>
  );
};
export default Goals;
