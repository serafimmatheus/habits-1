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
  display: flex;
  width: 400px;
  flex-direction: column;
  align-items: flex-start;
  background-color: green;
  border: 1px solid transparent;
  border-radius: 6px;
  margin: 10px;
  div {
    display: flex;
  }
  p {
    strong {
      font-family: "Roboto", sans-serif;
      font-weight: 800;
      margin: 10px 10px 0px 0;
      color: #252542;
    }
    color: white;
    font-size: 25px;
  }
`;
export const Button = styled.button`
  font-family: PT Serif;
  display: flex;
  align-items: flex-start;
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
export const ButtonSubs = styled.button`
  font-family: PT Serif;
  display: flex;
  align-items: flex-start;
  background: #03031b;
  color: #ffffff;
  transition: 0.3s;
  width: 180px;
  margin-top: 10px;
  border: none;
  border-radius: 10px;
  padding: 15px 40px;
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
  margin-left: 25px;
  input {
    margin: 10px;
    height: 30px;
    outline: none;
    width: 150px;
    border: transparent;
    border-radius: 4px;
  }
`;
export const ButtonSearch = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 31px;
  input {
    margin: 10px 6px 10px 6px;
    outline: none;
    width: 180px;
    border: transparent;
    border-radius: 4px;
  }
`;
export const InfoGroupCont = styled.div`
  display: flex;
  justify-content: center;
`;
