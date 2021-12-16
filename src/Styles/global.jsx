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
`;

export const GroupCardContainer = styled.li`
  padding: 10px;
  width: 300px;
  border: 1px solid transparent;
  background-color: #bdb491;
  border-radius: 6px;
  margin: 10px;
  p {
    strong {
      font-weigth: 700;
      font-family: sans-serif;
    }
    font-size: 18px;
  }
  div {
    display: flex;
    justify-content: center;
  }
`;
export const GroupCardContainerSub = styled.li`
  padding: 10px;
  width: 300px;
  border: 1px solid transparent;
  background-color: #bdb491;
  border-radius: 6px;
  margin: 10px;
  p {
    strong {
      font-weigth: 200;
    }
    font-size: 18px;
  }
  div {
    display: flex;
    justify-content: center;
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
  padding: 15px 40px;
  :hover {
    cursor: pointer;
    background: #ffffff;
    color: #03031b;
  }
`;
export const ButtonSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    height: 64px;
    border: 1px solid #03031b;
    border-radius: 5px;
    outline: none;
    margin-left: 5px;
  }
`;
export const ButtonSubs = styled.button`
  font-family: PT Serif;
  background: #03031b;
  color: #ffffff;
  transition: 0.3s;
  width: 180px;
  margin: 10px;
  border: none;
  border-radius: 10px;
  padding: 15px 40px;
  :hover {
    cursor: pointer;
    background: #ffffff;
    color: #03031b;
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
  gap: 20px;
  margin: 182px auto 0;
  min-width: 394px;
  max-width: min(90%, 500px);
  background: #ffffff;
  border: 2px solid #f5f5f5;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 40px 20px 26px;
n`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const InfoGroupCont = styled.div`
  display: flex;
  justify-content: center;
`;
export const ContainerEdit = styled.div`
  display: flex;
  flex-direction: column;
`;
