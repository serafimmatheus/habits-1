import { FormLabel, Box, IconButton, Slider } from "@material-ui/core";
import { useContext } from "react";
import { GoalsContext } from "../../Providers/Goals";
import {
  MdCheckCircleOutline,
  MdDangerous,
  MdEditNote,
  MdOutlineDelete,
} from "react-icons/md";
import EditGoal from "../EditGoal";

const SearchGoals = () => {
  const { goals, removeGoal, handleOpenEditModal, groupId } =
    useContext(GoalsContext);

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
    <div>
      <ul>
        {goals.sort(ordem).map((item) => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>Dificuldade: {item.difficulty}</p>
            <Box>
              <FormLabel component="legend">Progresso atual:</FormLabel>

              <Slider
                key={`slider-${item.how_much_achieved}`}
                defaultValue={item.how_much_achieved}
                step={10}
                marks
                min={0}
                max={100}
                disabled
              />
            </Box>
            {item.achieved ? <MdCheckCircleOutline /> : <MdDangerous />}
            <IconButton
              size="small"
              onClick={() => removeGoal(item.id, groupId)}
            >
              <MdOutlineDelete />
            </IconButton>
            <IconButton size="small" onClick={() => handleOpenEditModal(item)}>
              <MdEditNote />
            </IconButton>
            <EditGoal groupId={groupId} goalId={item.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SearchGoals;
