import CreateGoal from "../../Components/CreateGoal";
import SearchGoals from "../../Components/SearchGoals";
import { HeaderDash } from "../../Components/HeaderDash";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../Styles/theme";

const Goals = () => {
  return (
    <ThemeProvider theme={theme}>
      <HeaderDash />

      <CreateGoal />

      <SearchGoals />
    </ThemeProvider>
  );
};
export default Goals;
