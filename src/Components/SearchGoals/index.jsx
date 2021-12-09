import { Button, FormLabel, Rating, Box } from "@material-ui/core";
import { useContext } from "react";
import { GoalsContext } from "../../Providers/Goals";
import { MdCheckCircleOutline, MdDangerous } from "react-icons/md";

const SearchGoals = () => {
  const { goals, searchGoals } = useContext(GoalsContext);
  return (
    <div>
      <Button onClick={() => searchGoals(4)}>buscar metas</Button>
      <ul>
        {goals.map((item, index) => (
          <li key={index}>
            <h2>{item.title}</h2>
            <p>Dificuldade: {item.difficulty}</p>
            <Box>
              <FormLabel component="legend">Progresso atual:</FormLabel>
              <Rating
                name="simple-controlled"
                value={item.how_much_achieved}
                readOnly
              />
            </Box>
            {item.achieved ? <MdCheckCircleOutline /> : <MdDangerous />}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SearchGoals;
