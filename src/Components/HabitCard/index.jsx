import { useContext, useState } from "react";
import { HabitsContext } from "../../Providers/habits";

import { HabitCardContainer } from "../../Styles/global";

import EditHabitsModal from "../EditHabitsModal";

const HabitCard = ({ habit }) => {
  const { deleteHabits, isAchieved } = useContext(HabitsContext);

  const token = localStorage.getItem("@Habits:token");

  const [modalEdit, setModalEdit] = useState(false);

  return (
    <HabitCardContainer isAchieved={isAchieved}>
      <h3>Nome: {habit.title}</h3>
      <h4>Dificuldade: {habit.difficulty}</h4>
      <h4>
        Finalizado? {habit.achieved ? <span>Sim</span> : <span>Não</span>}
      </h4>
      <h4>Progresso: {JSON.stringify(habit.how_much_achieved)}</h4>
      <button onClick={() => deleteHabits(habit.id, token)}>
        Remover hábito
      </button>
      <button onClick={() => setModalEdit(true)}>Editar hábito</button>
      <EditHabitsModal
        habit_id={habit.id}
        token={token}
        setModalEdit={setModalEdit}
        modalEdit={modalEdit}
      />
    </HabitCardContainer>
  );
};

export default HabitCard;
