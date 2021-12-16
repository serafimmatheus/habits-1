import CreateGoal from "../../Components/CreateGoal";
import SearchGoals from "../../Components/SearchGoals";
import Header from "../../Components/Header";
import { CssBaseline } from "@mui/material";

const Goals = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <CreateGoal />
      <SearchGoals />
    </>
  );
};
export default Goals;
