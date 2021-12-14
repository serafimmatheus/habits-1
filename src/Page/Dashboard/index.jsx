import { Habitos, BoxHabits, Main } from "./style";

import { FiPlusSquare } from "react-icons/fi";
import { CardsHabits } from "../../Components/CardsHabits";
import { HeaderDash } from "../../Components/HeaderDash";
import Habits from "../../Pages/Habits";

export const Dashboard = () => {
  return (
    <>
      <HeaderDash />
      <Main>
        <div>
          <Habitos>
            <Habits />
          </Habitos>
        </div>
      </Main>
    </>
  );
};
