import { useState } from "react";
import { createContext } from "react/cjs/react.development";
import { api } from "../../Services";

export const GoalsContext = createContext();

export const GoalsProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const handleOpenGoalModal = () => setOpen(true);
  const handleCloseGoalModal = () => setOpen(false);

  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM5MTY2MzcyLCJqdGkiOiI4ZWE2ZjJiMWQwZGU0NDJmYTQ1NTBhMDZjZGJlMGRmMCIsInVzZXJfaWQiOjE5fQ.UCTZiSdcxlyNhjqlGhCDann5MmF1taQqqSajKGc-i8A";

  const addGoal = (data) => {
    api
      .post("/goals/", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };
  return (
    <GoalsContext.Provider
      value={{ addGoal, open, handleCloseGoalModal, handleOpenGoalModal }}
    >
      {children}
    </GoalsContext.Provider>
  );
};
