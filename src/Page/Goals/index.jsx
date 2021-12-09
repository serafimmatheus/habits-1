import { Typography, Box, Fab, Container } from "@material-ui/core";
import { MdAddchart } from "react-icons/md";
import { useContext } from "react";
import CreateGoal from "../../Components/CreateGoal";
import { GoalsContext } from "../../Providers/Goals";
import SearchGoals from "../../Components/SearchGoals";

const Goals = () => {
  const { handleOpenGoalModal } = useContext(GoalsContext);
  return (
    <Container component="main" maxWidth="xs">
      <CreateGoal groupId="4" />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography component="h1" sx={{ fontSize: "24px", fontWeight: "700" }}>
          Metas do Grupo
        </Typography>
        <Fab size="small" color="secondary" onClick={handleOpenGoalModal}>
          <MdAddchart />
        </Fab>
      </Box>
      <SearchGoals />
    </Container>
  );
};
export default Goals;
