import { useState, useEffect, useContext } from "react";

import { HabitsContext } from "../../Providers/habits";

import HabitList from "../../Components/HabitList";
import AddHabitsModal from "../../Components/AddHabitsModal";

import {
  HabitPageContainer,
  SectionTitle,
  PageTitle,
  ButtonAdd,
  AddIcon,
} from "../../Styles/global";

import PlussIcon from "../../assets/img/plus-icon.png";

const Habits = () => {
  const { habits, getHabits } = useContext(HabitsContext);

  const [token] = useState(localStorage.getItem("@Habits:token"));
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
      <PageTitle>HABITS (adicionar HEADER)</PageTitle>
      <HabitPageContainer>
        <SectionTitle>
          Meus hábitos:
          <ButtonAdd onClick={() => handleClickAdd()}>
            <AddIcon src={PlussIcon} alt="Adicione um novo hábito" />
          </ButtonAdd>
        </SectionTitle>
        {rendered ? (
          habits.length > 0 ? (
            <HabitList />
          ) : (
            <h2>Adicione Hábitos</h2>
          )
        ) : null}
      </HabitPageContainer>
      <AddHabitsModal
        modalHabits={modalHabits}
        setModalHabits={setModalHabits}
        token={token}
      />
    </div>
  );
};

export default Habits;
