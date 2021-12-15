import styled from "styled-components";

export const Header = styled.header`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: row;
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
    background-color: #bdb491;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    position: relative;
    left: 70px;
    width: calc(100% - 70px);
    height: 100px;
    border-radius: 10px;
    background-color: #bdb491;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    position: relative;
    left: 120px;
    width: calc(100% - 120px);
    height: 100px;
    border-radius: 10px;
    background-color: #bdb491;
  }
`;

export const BoxHeaderDashboard = styled.div`
  @media screen and (min-width: 320px) {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
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
