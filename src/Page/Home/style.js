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

export const FooterHome = styled.footer`
  @media screen and (min-width: 320px) {
    > h2 {
      font-size: 55px;
      margin: 0 0 20px 0;
    }

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1024px;
    margin: 0 auto 80px auto;

    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      width: 100%;
      li {
        display: flex;
        width: 250px;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin: 10px 10px;
        padding: 10px;
        border: 5px solid var(--black-russian);
        border-radius: 20px;

        h2 {
          margin: 10px 0;
        }

        figure {
          display: flex;
          justify-content: center;
          width: 200px;
          height: 200px;
          border-radius: 100%;

          img {
            display: flex;
            justify-content: center;
            border: 5px solid var(--black-russian);
            width: 100%;
            object-fit: fill;
            border-radius: 100%;
          }
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    ul {
      justify-content: center;
    }
  }
`;
