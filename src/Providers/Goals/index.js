import { useState } from "react";
import { createContext } from "react/cjs/react.development";
import api from "../../Services";

export const GoalsContext = createContext();

export const GoalsProvider = ({ children }) => {
  //funções para abrir o modal de Criar metas
  const [open, setOpen] = useState(false);
  const handleOpenGoalModal = () => setOpen(true);
  const handleCloseGoalModal = () => setOpen(false);

  //funções para abrir o modal de EDITAR metas
  const [openEdit, setOpenEdit] = useState(false);
  const handleOpenEditModal = (item) => {
    setOpenEdit(true);
    setItemEdit(item);
  };
  const handleCloseEditModal = () => {
    setOpenEdit(false);
    setItemEdit({});
  };

  //Salvar as metas dentro de um state
  const [goals, setGoals] = useState([]);
  const [groupId, setGroupId] = useState(0);

  const [itemEdit, setItemEdit] = useState({});

  const [token] = useState(
    JSON.parse(localStorage.getItem("@Habits:token")) || ""
  );

  const addGoal = (data, groupId) => {
    api
      .post("/goals/", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => searchGoals(groupId))
      .catch((err) => console.log(err));
  };

  const searchGoals = (groupId) => {
    api
      .get(`/goals/?group=${groupId}`)
      .then((response) => {
        setGoals(response.data.results);
        setGroupId(groupId);
      })
      .catch((err) => console.log(err));
  };

  const removeGoal = (goalId, groupId) => {
    api
      .delete(`/goals/${goalId}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        searchGoals(groupId);
      })
      .catch((err) => console.log(err));
  };

  const editGoal = (data, goalId, groupId) => {
    api
      .patch(`/goals/${goalId}/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        searchGoals(groupId);
      })
      .catch((err) => console.log(err));
  };

  return (
    <GoalsContext.Provider
      value={{
        goals,
        addGoal,
        open,
        handleCloseGoalModal,
        handleOpenGoalModal,
        searchGoals,
        removeGoal,
        editGoal,
        openEdit,
        handleOpenEditModal,
        handleCloseEditModal,
        itemEdit,
        groupId,
      }}
    >
      {children}
    </GoalsContext.Provider>
  );
};
