import styled from "styled-components";

export const HabitListContainer = styled.ul`
  width: 40%;
  margin: 0 auto;
  list-style: none;
  padding: 20px;
  background-color: red;
`;

export const HabitCardContainer = styled.li`
  padding: 10px;
  background-color: green;
  h3 {
    margin: 0;
  }
`;

export const HabitsForm = styled.form`
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 182px auto 0;
  min-width: 394px;
  max-width: min(90%, 500px);
  background: #ffffff;
  border: 2px solid #f5f5f5;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 40px 20px 26px;
`;

export const GroupListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  list-style: none;
  padding: 20px;
  border: transparent;
  border-radius: 3px;
  div {
    display: flex;
    background-color: #bdb491;
    margin: 7px;
    padding: 3px;
    border: transparent;
    border-radius: 5px;
  }
`;

export const GroupCardContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  width: 300px;
  border: 1px solid transparent;
  background-color: white;
  border-radius: 6px;
  margin: 10px;
  align-items: end;

  div {
    display: flex;
    justify-content: center;
    background-color: white;

    button {
      margin: 20px 0 0 46px;
    }
  }
`;
export const GroupCardContainerSub = styled.li`
  padding: 10px;
  width: 300px;
  border: 1px solid transparent;
  background-color: white;
  border-radius: 6px;
  margin: 10px;
  div {
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }
`;
export const Button = styled.button`
  font-family: PT Serif;
  background: #03031b;
  color: #ffffff;
  transition: 0.3s;
  width: 180px;
  margin: 2px;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  padding: 15px 40px;
  :hover {
    cursor: pointer;
    background: #03031b11;
    color: #03031b;
  }
`;
export const ButtonSearch = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  input {
    height: 34px;
    border: 1px solid #03031b;
    border-left: none;
    border-top: none;
    border-right: none;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    outline: none;
    margin-left: 5px;
    :hover {
      border-color: #19acdd;
    }
  }
`;
export const ButtonSubs = styled.button`
  font-family: PT Serif;
  background: #03031b;
  color: #ffffff;
  transition: 0.3s;
  width: 180px;
  border: none;
  border-radius: 10px;
  padding: 15px 40px;
  :hover {
    cursor: pointer;
    background: red;
  }
`;
export const ButtonActives = styled.button`
  font-family: PT Serif;
  background: #03031b;
  color: #ffffff;
  transition: 0.3s;
  margin: 10px;
  border: none;
  border-radius: 10px;
  padding: 8px;
  :hover {
    cursor: pointer;
    background: #ffffff;
    color: #03031b;
  }
`;
export const GroupsForm = styled.form`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 182px auto 0;
  min-width: 394px;
  max-width: min(90%, 500px);
  background: #ffffff;
  border: transparent;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 40px 20px 26px;
  h1 {
    font-family: "Roboto", sans-serif;
  }
  input {
    outline: none;
    border: 1px solid black;
    border-left: transparent;
    border-top: transparent;
    border-right: transparent;
    :hover {
      border-color: #15b5eb;
    }
  }
  button {
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    height: 34px;
    border: 1px solid #03031b;
    border-left: none;
    border-top: none;
    border-right: none;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    outline: none;
    margin-left: 5px;
    :hover {
      border-color: #19acdd;
    }
`;
export const InfoGroupCont = styled.div`
  display: flex;
  justify-content: center;
`;
export const ContainerEdit = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ContainerRabbit = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`;

export const ContainerGroupCard = styled.div`
  display: flex;
  align-items: flex-start;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  margin: 0;
  h3 {
    display: flex;
    flex-wrap: wrap;
    color: #361313;
    font-family: "Roboto", sans-serif;
    span {
      color: black;
      font-family: "Oswald", sans-serif;
    }
  }
`;
export const ContainerCardsG = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
`;
export const ButtonModal = styled.button`
  border: 1px solid black;
  border-radius: 4px;
  background-color: white;
  height: 30px;
  font-family: "Roboto", sans-serif;
  :hover {
    border-color: #22acda;
    color: #22acda;
  }
`;
