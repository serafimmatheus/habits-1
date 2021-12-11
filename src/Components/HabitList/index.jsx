import { useContext } from "react";
import { HabitsContext } from "../../Providers/habits";

import HabitCard from "../HabitCard";

import { HabitListContainer } from "../../Styles/global";

const HabitList = () => {
  const { habits } = useContext(HabitsContext);

  return (
    <HabitListContainer>
      {habits.map((item, index) => (
        <HabitCard key={index} habit={item} />
      ))}
    </HabitListContainer>
  );
};

export default HabitList;
