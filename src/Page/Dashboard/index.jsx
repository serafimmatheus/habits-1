import { Habitos, BoxHabits, Main } from "./style";
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
