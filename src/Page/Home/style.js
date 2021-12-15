import styled from "styled-components";

export const MainHome = styled.main`
  @media screen and (min-width: 320px) {
    width: 100%;
    height: 100vh;

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
        text-shadow: 0.1em 0.1em 0.2em var(--log-cabin);
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
        width: 27%;
        margin: 0 10px;
        height: 50px;
        &:hover {
          transition: 1s; 
        }
      }
    }

    .main-home__span {
      display: flex;
      flex-direction: column;
      width: 670px;
      line-height: 1.2;
      text-align: center;
      position: relative;
      left: 50%;
      transform: translateX(-50%);

      em {
        position: absolute;
        right: 20px;
        top: 44px;
        font-style: italic;
      }
    }
  }
`;
