import { Habitos, BoxHabits, Main } from "./style";

import { FiPlusSquare } from "react-icons/fi";
import { CardsHabits } from "../../Components/CardsHabits";
import { HeaderDash } from "../../Components/HeaderDash";

export const Dashboard = () => {
  return (
    <>
      <HeaderDash />
      <Main>
        <div>
          <Habitos>
            <h2>Meu Hábitos</h2>
            <span onClick={() => alert("modal")}>
              <FiPlusSquare />
            </span>
          </Habitos>
        </div>
      </Main>
    </>
  );
};
