import styled from "styled-components";

export const Header = styled.header`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: row;
    margin-bottom: 50px;
  }
`;

export const HeaderDashboard = styled.section`
  @media screen and (min-width: 320px) {
    display: flex;
    justify-content: space-between;
    left: 10px;
    width: 100%;
    height: 100px;
    border-radius: 10px;
    background-color: var(--log-cabin);
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;

    width: 100%;
    height: 100px;
    border-radius: 10px;
    background-color: var(--log-cabin);
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;

    width: 100%;
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
      width: 100%;
      display: flex;
      position: relative;
      justify-content: space-around;

      .bars {
        position: relative;
        top: 0;
        display: flex;
      }

      .modal {
        position: fixed;
        width: 100%;
        height: 100px;
        display: ${({ isTrueMobile }) => (isTrueMobile ? "flex" : "none")};
        justify-content: center;
        flex-direction: column;
        align-items: center;
        border-radius: 10px;
        background-color: black;
        top: 100px;
        left: 0;
        z-index: 1;
        ul {
          li {
            width: 100%;
            height: 30px;
            background-color: black;
            color: white;
          }

          .link {
            li {
              display: flex;
              align-items: center;

              p {
                display: flex;
                align-items: center;
                margin: 0 2px;
              }
            }
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

        .link {
          li {
            display: flex;
            align-items: center;

            p {
              display: flex;
              align-items: center;
              margin: 0 2px;
            }
          }
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
  }
`;
