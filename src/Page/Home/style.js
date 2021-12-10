import styled from "styled-components";

export const MainHome = styled.main`
  @media screen and (min-width: 320px) {
    width: 100%;
    height: 100vh;

    background-color: #c9c9c9c9;

    display: flex;
    justify-content: center;
    align-items: center;

    .main-home__title {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-left: -10%;
      h1 {
        font-size: 60px;
      }

      h1:nth-child(2) {
        position: relative;
        left: 150px;
      }
    }

    .main-home__buttons {
      display: flex;
      margin: 50px 0;
      justify-content: center;

      button {
        width: 150px;
        margin: 0 10px;
        height: 40px;
        &:hover {
          background-color: #ccc;
          border: none;
          transition: 1s;
        }
      }
    }

    .main-home__span {
      display: flex;
      flex-direction: column;
      width: 520px;
      position: relative;
      left: 50%;
      transform: translateX(-50%);

      em {
        position: absolute;
        right: 20px;
        top: 30px;
        font-style: italic;
      }
    }
  }
`;
