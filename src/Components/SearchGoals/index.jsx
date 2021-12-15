import {
  Box,
  IconButton,
  Container,
  Grid,
  Typography,
  Fab,
} from "@material-ui/core";
import { useContext } from "react";
import { GoalsContext } from "../../Providers/Goals";
import {
  MdAddchart,
  MdCheckCircleOutline,
  MdDangerous,
  MdEditNote,
  MdOutlineDelete,
} from "react-icons/md";
import EditGoal from "../EditGoal";
import { Card } from "@mui/material";
import "./style.css";

const SearchGoals = () => {
  const {
    goals,
    removeGoal,
    handleOpenEditModal,
    groupId,
    handleOpenGoalModal,
  } = useContext(GoalsContext);

  const ordem = (a, b) => {
    if (a.id > b.id) {
      return 1;
    }
    if (a.id < b.id) {
      return -1;
    }
    return 0;
  };

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Metas do Grupo
        </Typography>
        <Fab size="small" color="secondary" onClick={handleOpenGoalModal}>
          <MdAddchart />
        </Fab>
      </Box>
      <Grid container spacing={4}>
        {goals.length > 0 ? (
          goals.sort(ordem).map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4}>
              <Card
                class={
                  item.achieved ? "post-it-note-completed" : "post-it-note"
                }
              >
                <Card variant="centerCard">
                  {item.achieved ? (
                    <Typography variant="h6">Concluido</Typography>
                  ) : (
                    <Typography variant="h6">Em Andamento</Typography>
                  )}
                </Card>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2">
                  Dificuldade: {item.difficulty}
                </Typography>
                <Box>
                  <Typography variant="body2">Progresso:</Typography>

                  <Card variant="centerCard">
                    <progress value={item.how_much_achieved} max="100">
                      {item.how_much_achieved}%
                    </progress>

                    {item.achieved ? (
                      <MdCheckCircleOutline
                        style={{ color: "green", fontSize: "1.5em" }}
                      />
                    ) : (
                      <MdDangerous
                        style={{ color: "red", fontSize: "1.5em" }}
                      />
                    )}
                  </Card>
                </Box>

                <IconButton
                  size="small"
                  onClick={() => removeGoal(item.id, groupId)}
                >
                  <MdOutlineDelete />
                </IconButton>
                <IconButton
                  size="small"
                  onClick={() => handleOpenEditModal(item)}
                >
                  <MdEditNote />
                </IconButton>
                <EditGoal groupId={groupId} goalId={item.id} />
              </Card>
            </Grid>
          ))
        ) : (
          <Container
            sx={{
              py: 8,
              display: "flex",
              justifyContent: "center",
            }}
            maxWidth="md"
          >
            <Card variant="empty">
              <Typography component="h2" variant="h5">
                Nenhuma meta nesse grupo, adicione algumas
              </Typography>
            </Card>
          </Container>
        )}
      </Grid>
    </Container>
  );
};
export default SearchGoals;
