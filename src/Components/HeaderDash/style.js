import styled from "styled-components";

export const Header = styled.header`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: row;

    margin-bottom: 50px;
  }
`;

export const NavBar = styled.div`
  @media screen and (min-width: 320px) {
    position: fixed;
    width: 10px;
    height: 100vh;
    background-color: #03031b;
    border-radius: 10px;
  }

  @media screen and (min-width: 768px) {
    width: 70px;
  }

  @media screen and (min-width: 1024px) {
    width: 120px;
  }
`;

export const HeaderDashboard = styled.section`
  @media screen and (min-width: 320px) {
    display: flex;
    justify-content: space-between;
    position: relative;
    left: 10px;
    width: calc(100% - 10px);
    height: 100px;
    border-radius: 10px;
    background-color: var(--log-cabin);
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    position: relative;
    left: 70px;
    width: calc(100% - 70px);
    height: 100px;
    border-radius: 10px;
    background-color: var(--log-cabin);
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    position: relative;
    left: 120px;
    width: calc(100% - 120px);
    height: 100px;
    border-radius: 10px;
    background-color: var(--log-cabin);
  }
`;

export const BoxHeaderDashboard = styled.div`
  @media screen and (min-width: 320px) {
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    .mobile {
      display: flex;
      position: relative;

      .bars {
        position: relative;
        top: 0;
        display: flex;
      }

      .modal {
        position: fixed;
        width: calc(100% - 10px);
        height: 100px;
        display: ${({ isTrueMobile }) => (isTrueMobile ? "flex" : "none")};
        justify-content: center;
        flex-direction: column;
        align-items: center;
        border-radius: 10px;
        background-color: black;
        left: 10px;
        top: 100px;
        z-index: 1;
        ul {
          li {
            width: 100%;
            height: 30px;
            background-color: black;
            color: white;
          }
        }

        div.input {
          position: relative;
          input {
            position: relative;
          }
          button {
            top: 0;
            right: 0;
            width: 100px;
            height: 30px;
            position: absolute;
          }
        }
      }
    }

    .desktop {
      display: none;
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;

    .mobile {
      display: none;
    }

    .desktop {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: row;
      width: 100%;

      ul {
        display: flex;
        padding: 10px 0;

        li {
          margin: 0 10px;
        }
      }
    }

    .link {
      text-decoration: none;
      color: black;

      :hover {
        color: white;
        text-decoration: underline;
      }
    }
  }
`;

export const Habitos = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    justify-content: center;

    h2 {
      font-size: 25px;
      margin-right: 10px;
    }

    span {
      font-size: 25px;
    }
  }
`;

export const BoxHabits = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Main = styled.main`
  @media screen and (min-width: 320px) {
    width: calc(100% - 10px);
    position: relative;
    left: 10px;
  }

  @media screen and (min-width: 768px) {
    width: calc(100% - 70px);
    position: relative;
    left: 70px;
  }

  @media screen and (min-width: 1024px) {
    width: calc(100% - 120px);
    position: relative;
    left: 120px;
  }
`;
