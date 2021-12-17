import { useContext, useState } from "react";
import { HabitsContext } from "../../Providers/habits";

import EditHabitsModal from "../EditHabitsModal";

import { Card, IconButton, Typography, Grid } from "@mui/material";
import {
  MdCheckCircleOutline,
  MdDangerous,
  MdEditNote,
  MdOutlineDelete,
} from "react-icons/md";
import { Box } from "@mui/system";

const HabitCard = ({ habit }) => {
  const { deleteHabits } = useContext(HabitsContext);

  const token = localStorage.getItem("@Habits:token");

  const [modalEdit, setModalEdit] = useState(false);

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card variant="post-it" color={habit.achieved ? "secondary" : "primary"}>
        <Card variant="centerCard">
          {habit.achieved ? (
            <Typography variant="h6">Concluido</Typography>
          ) : (
            <Typography variant="h6">Em Andamento</Typography>
          )}
        </Card>
        <Typography variant="h6">{habit.title}</Typography>
        <Typography variant="body2">Dificuldade: {habit.difficulty}</Typography>

        <Box>
          <Typography variant="body2">Progresso:</Typography>

          <Card variant="centerCard">
            <progress value={JSON.stringify(habit.how_much_achieved)} max="100">
              {JSON.stringify(habit.how_much_achieved)}%
            </progress>

            {habit.achieved ? (
              <MdCheckCircleOutline
                style={{ color: "green", fontSize: "1.5em" }}
              />
            ) : (
              <MdDangerous style={{ color: "red", fontSize: "1.5em" }} />
            )}
          </Card>
        </Box>
        <IconButton onClick={() => deleteHabits(habit.id, token)}>
          <MdOutlineDelete />
        </IconButton>
        <IconButton onClick={() => setModalEdit(true)}>
          <MdEditNote />
        </IconButton>
        <EditHabitsModal
          habit_id={habit.id}
          token={token}
          setModalEdit={setModalEdit}
          modalEdit={modalEdit}
        />
      </Card>
    </Grid>
  );
};

export default HabitCard;
