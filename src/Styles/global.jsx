import styled from "styled-components";

export const HabitPageContainer = styled.div`
  @media only screen and (min-width: 700px) {
    margin: 50px 0 0 78px;
    h3 {
      display: flex;
      justify-content: center;
    }
  }
`;

export const HabitListContainer = styled.ul`
  margin: 0 auto;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
`;

export const HabitCardContainer = styled.li`
  display: flex;
  flex-direction: column;
  width: 250px;
  padding: 10px;
  background-color: #bdb491;
  border-radius: 8px;
  padding: 40px;
  gap: 20px;
  font-family: PT Serif;
  h3 {
    font-size: 25px;
    margin: 0;
  }
  h4 {
    font-size: 20px;
    margin: 0;
  }
  button {
    font-family: PT Serif;
    font-size: 25px;
    background: #03031b;
    color: #ffffff;
    transition: 0.3s;
    border: none;
    border-radius: 10px;
    padding: 8px;
  }
  button:hover {
    cursor: pointer;
    background: #ffffff;
    color: #03031b;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 25px;
  text-align: left;
  margin: 0 0 0 25px;
`;

export const PageTitle = styled.h2`
  font-size: 25px;
`;

export const ButtonAdd = styled.button`
  display: inline-block;
  background-color: transparent;
  padding: 0;
  border: 0;
  width: 25px;
  height: 25px;
  margin: 0 0 0 25px;
`;

export const AddIcon = styled.img`
  width: 25px;
  height: 25px;
  background-color: transparent;
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
`;

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
