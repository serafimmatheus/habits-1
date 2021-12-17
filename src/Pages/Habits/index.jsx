import { useState, useEffect, useContext } from "react";

import { HabitsContext } from "../../Providers/habits";

import HabitList from "../../Components/HabitList";
import AddHabitsModal from "../../Components/AddHabitsModal";

import Header from "../../Components/Header";
import { Container, Fab, Typography, Card } from "@mui/material";
import { Box } from "@mui/system";
import { MdAdd } from "react-icons/md";

const Habits = () => {
  const { habits, getHabits, isAchieved } = useContext(HabitsContext);

  const [token] = useState(JSON.parse(localStorage.getItem("@Habits:token")));
  const [rendered, setRendered] = useState(false);
  const [modalHabits, setModalHabits] = useState(false);

  useEffect(() => {
    getHabits();
    setRendered(true); // eslint-disable-next-line
  }, []);

  const handleClickAdd = () => {
    setModalHabits(true);
  };

  return (
    <>
      <Header />
      <Container sx={{ py: 4 }} maxWidth="md">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
            alignItems: "center",
            marginTop: "20px",
            border: "solid 4px #413e35",
            borderRadius: "30px",
            padding: "10px",
            boxShadow: "0px 4px 40px -10px rgba(0, 0, 0, 0.5)",
          }}
        >
          <Typography component="h1" variant="h5">
            Meus Hábitos
          </Typography>
          <Fab size="small" color="secondary" onClick={handleClickAdd}>
            <MdAdd />
          </Fab>
        </Box>

        {rendered ? (
          habits.length > 0 ? (
            <HabitList isAchieved={isAchieved} />
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
                  Você não possue nenhum hábito, adicione alguns
                </Typography>
              </Card>
            </Container>
          )
        ) : null}

        <AddHabitsModal
          modalHabits={modalHabits}
          setModalHabits={setModalHabits}
          token={token}
        />
      </Container>
    </>
  );
};

export default Habits;
