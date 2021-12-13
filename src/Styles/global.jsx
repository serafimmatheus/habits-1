import styled from "styled-components";

export const HabitPageContainer = styled.div`
  @media only screen and (min-width: 700px) {
    margin: 0 0 0 78px;
  }
`;

export const HabitListContainer = styled.ul`
  margin: 0 auto;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
`;

export const HabitCardContainer = styled.li`
  display: flex;
  flex-direction: column;
  width: 300px;
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
    padding: 15px 40px;
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
  position: absolute;
  left: 50%;
  transform: translate(-50%, -25%);
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 182px auto 0;
  min-width: 394px;
  max-width: min(90%, 500px);
  background: #bdb491;
  border: none;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 20px;
  h3,
  h4 {
    margin: 0;
    text-align: center;
  }

  button {
    font-family: PT Serif;
    font-size: 16px;
    background: #03031b;
    color: #ffffff;
    transition: 0.3s;
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
  }
  button:hover {
    cursor: pointer;
    background: #ffffff;
    color: #03031b;
  }
`;
