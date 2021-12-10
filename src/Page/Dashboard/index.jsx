import {
  HeaderDashboard,
  BoxHeaderDashboard,
  Header,
  NavBar,
  Habitos,
  BoxHabits,
  Main,
} from "./style";

import { FiMenu, FiPlusSquare } from "react-icons/fi";
import { CardsHabits } from "../../Components/CardsHabits";
import { HeaderDash } from "../../Components/HeaderDash";

export const Dashboar = () => {
  const token = localStorage.getItem("@Habits:token");

  console.log(token);
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

          <BoxHabits>
            <CardsHabits />
            <CardsHabits />
            <CardsHabits />
            <CardsHabits />
            <CardsHabits />
          </BoxHabits>
        </div>
      </Main>
    </>
  );
};
