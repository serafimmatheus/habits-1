import { FiMenu } from "react-icons/fi";
import { HeaderDashboard, BoxHeaderDashboard, NavBar, Header } from "./style";
import { useState } from "react";
import { Button } from "../Button";
import { Link } from "react-router-dom";

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
                <h2>Usuário</h2>
                <ul>
                  <Link className="link" to="/dashboard">
                    <li>Hábitos</li>
                  </Link>

                  <Link className="link" to="/dashboard/groups">
                    <li>Grupos</li>
                  </Link>
                </ul>

                <div className="input">
                  <input placeholder="Pesquisar" />
                  <button>Pesquisar</button>
                </div>
              </div>
            </nav>

            <nav className="desktop">
              <h2>Usuário</h2>
              <ul>
                <Link className="link" to="/dashboard">
                  <li>Hábitos</li>
                </Link>

                <Link className="link" to="/dashboard/groups">
                  <li>Grupos</li>
                </Link>
              </ul>

              <div className="input">
                <input placeholder="Pesquisar" />
                <button>Pesquisar</button>
              </div>
            </nav>
          </BoxHeaderDashboard>
        </HeaderDashboard>
      </Header>
    </>
  );
};
