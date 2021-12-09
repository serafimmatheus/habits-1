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

export const Dashboar = () => {
  const token = localStorage.getItem("@Habits:token");

  console.log(token);
  return (
    <>
      <Header>
        <NavBar></NavBar>
        <HeaderDashboard>
          <BoxHeaderDashboard>
            <nav>
              <FiMenu />
            </nav>
            <h2>dashboard</h2>
          </BoxHeaderDashboard>
        </HeaderDashboard>
      </Header>

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
