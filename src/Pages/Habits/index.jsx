import { useState, useEffect, useContext } from "react";

import { HabitsContext } from "../../Providers/habits";

import HabitList from "../../Components/HabitList";
import AddHabitsModal from "../../Components/AddHabitsModal";
import { HeaderDash } from "../../Components/HeaderDash";

const Habits = () => {
  const { habits, getHabits } = useContext(HabitsContext);

  const [token] = useState(JSON.parse(localStorage.getItem("@Habits:token")));
  const [rendered, setRendered] = useState(false);
  const [modalHabits, setModalHabits] = useState(false);

  useEffect(() => {
    getHabits(token);
    setRendered(true);
  }, [token]);

  const handleClickAdd = () => {
    setModalHabits(true);
  };

  return (
    <div>
      <h3>HABITS</h3>
      <button onClick={() => handleClickAdd()}>Adcione um novo hábito</button>
      <div>
        <h3>Seus hábitos:</h3>
        {rendered ? (
          habits.length > 0 ? (
            <>
              <HabitList />
            </>
          ) : (
            <h2>Adicione Hábitos</h2>
          )
        ) : null}
      </div>
      <AddHabitsModal
        modalHabits={modalHabits}
        setModalHabits={setModalHabits}
        token={token}
      />
    </div>
  );
};

export default Habits;
