import { Typography, Box, Fab, Container, Button } from "@material-ui/core";
import { MdAddchart } from "react-icons/md";
import { useContext } from "react";
import CreateGoal from "../../Components/CreateGoal";
import { GoalsContext } from "../../Providers/Goals";
import SearchGoals from "../../Components/SearchGoals";
import { useHistory } from "react-router";

const Goals = () => {
  const { handleOpenGoalModal } = useContext(GoalsContext);
  const history = useHistory();
  return (
    <Container component="main" maxWidth="xs">
      <CreateGoal />
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
      <Button onClick={() => history.push("/dashboard")}>Voltar</Button>
    </Container>
  );
};
export default Goals;
