import { FooterHome, MainHome } from "./style";
import { Container } from "../../Styles/Container";
import { Button } from "../../Components/Button/index";
import { useHistory } from "react-router-dom";

export const Home = () => {
  const history = useHistory();
  return (
    <>
      <MainHome>
        <Container>
          <div className="main-home__title">
            <h1>habits</h1>
            <h1>change</h1>
          </div>

          <div className="main-home__buttons">
            <Button onClick={() => history.push("/register")} whiteSchema>
              Cadastre-se
            </Button>
            <Button onClick={() => history.push("/login")}>Login</Button>
          </div>

          <span className="main-home__span">
            “Se você acredita que pode mudar – se faz disso um hábito -, a
            mudança se torna real. Este é o verdadeiro poder do hábito.”
            <em> Charles Duhigg</em>
          </span>
        </Container>
      </MainHome>

      <FooterHome>
        <h2>Equipe</h2>
        <ul>
          <li>
            <figure>
              <img
                src="https://ca.slack-edge.com/TQZR39SET-U026CAZ930X-5a167a39d01e-512"
                alt="Perfil Matheus"
              />
            </figure>
            <h2>Matheus Serafim</h2>
            <p>Tech Leader</p>
          </li>

          <li>
            <figure>
              <img
                src="https://ca.slack-edge.com/TQZR39SET-U02238SA57T-b0ce27e1280c-512"
                alt="Samuel Manga"
              />
            </figure>
            <h2>Samuel Manga</h2>
            <p>Scrum Master</p>
          </li>

          <li>
            <figure>
              <img
                src="https://ca.slack-edge.com/TQZR39SET-U026WBF8WJZ-6d6fdb6b3df6-512"
                alt="Caio Clavico"
              />
            </figure>
            <h2>Caio Clavico</h2>
            <p>Product Owner</p>
          </li>

          <li>
            <figure>
              <img
                src="https://ca.slack-edge.com/TQZR39SET-U025R1QC6HY-f5f3584c7726-512"
                alt="Leandro Medeiros"
              />
            </figure>
            <h2>Leandro Medeiros</h2>
            <p>Quality Assurance</p>
          </li>

          <li>
            <figure>
              <img
                src="https://ca.slack-edge.com/TQZR39SET-U0248D5N77Z-19d92cc5508a-512"
                alt="Miguel Leite"
              />
            </figure>
            <h2>Miguel Leite</h2>
            <p>Quality Assurance</p>
          </li>

          <li>
            <figure>
              <img
                src="https://ca.slack-edge.com/TQZR39SET-U027W2FL4UE-862744f4f701-512"
                alt="Davi Raquel"
              />
            </figure>
            <h2>Davi Raquel</h2>
            <p>Quality Assurance</p>
          </li>
        </ul>
      </FooterHome>
    </>
  );
};
