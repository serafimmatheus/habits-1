import { MainHome } from "./style";
import { Container } from "../../Styles/Container";
import { Button } from "../../Components/Button/index";
import { useHistory } from "react-router-dom";

export const Home = () => {
  const history = useHistory();
  return (
    <MainHome>
      <Container>
        <div className="main-home__title">
          <h1>Good</h1>
          <h1>Habits</h1>
        </div>

        <div className="main-home__buttons">
          <Button onClick={() => history.push("/register")} whiteSchema>
            Cadastre-se
          </Button>
          <Button onClick={() => history.push("/login")}>Login</Button>
        </div>

        <span className="main-home__span">
          “Se você acredita que pode mudar – se faz disso um hábito -, a mudança
          se torna real. Este é o verdadeiro poder do hábito.”
          <em> Charles Duhigg</em>
        </span>
      </Container>
    </MainHome>
  );
};
