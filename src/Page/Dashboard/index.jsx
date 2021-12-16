import { Habitos, Main } from "./style";

import Header from "../../Components/Header";
import Habits from "../../Pages/Habits";

export const Dashboard = () => {
  return (
    <>
      <Header />
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
