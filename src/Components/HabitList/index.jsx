import { useContext } from "react";
import { HabitsContext } from "../../Providers/habits";

import HabitCard from "../HabitCard";

import { Grid } from "@mui/material";

const HabitList = ({ isAchieved }) => {
  const { habits } = useContext(HabitsContext);

  return (
    <Grid container spacing={4}>
      {habits.map((item, index) => (
        <HabitCard key={index} habit={item} />
      ))}
    </Grid>
  );
};

export default HabitList;
