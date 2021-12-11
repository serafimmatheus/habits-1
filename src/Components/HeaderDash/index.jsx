import { FiMenu } from "react-icons/fi";
import { HeaderDashboard, BoxHeaderDashboard, NavBar, Header } from "./style";
import { useState } from "react";
import { Button } from "../Button";

export const HeaderDash = () => {
  const [isTrueMobile, setIsTrueModal] = useState(false);

  let token = localStorage.getItem("@Habits:token");

  console.log(token);
  return (
    <>
      <Header>
        <NavBar></NavBar>
        <HeaderDashboard>
          <BoxHeaderDashboard isTrueMobile={isTrueMobile}>
            <nav className="mobile">
              <div
                className="bars"
                onClick={() => setIsTrueModal(!isTrueMobile)}
              >
                <FiMenu />
              </div>

              <div className="modal">
                <ul>
                  <li>Hábitos</li>
                  <li>Grupos</li>
                </ul>

                <div className="input">
                  <input placeholder="Pesquisar" />
                  <Button>Pesquisar</Button>
                </div>
              </div>
            </nav>

            <nav className="desktop">
              <ul>
                <li>Hábitos</li>
                <li>Grupos</li>
              </ul>

              <div className="input">
                <input placeholder="Pesquisar" />
                <Button>Pesquisar</Button>
              </div>
            </nav>
            <h2>Usuário</h2>
          </BoxHeaderDashboard>
        </HeaderDashboard>
      </Header>
    </>
  );
};
