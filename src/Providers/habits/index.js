import { createContext, useState } from "react";

import api from "../../Services";

export const HabitsContext = createContext([]);

export const HabitsProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);

  const [isAchieved, setIsAchieved] = useState(false);

  const [token] = useState(JSON.parse(localStorage.getItem("@Habits:token")));

  const getHabits = () => {
    api
      .get("/habits/personal/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setHabits(response.data);
      })
      .catch((err) => console.log(err));
  };

  const addHabits = (data, reset, closeModal) => {
    api
      .post("/habits/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setIsAchieved(response.data.achieved);
        getHabits();
        reset();
        closeModal();
      })
      .catch((err) => console.log(err));
  };

  const editHabits = (id, data, reset, closeModal) => {
    api
      .patch(`/habits/${id}/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        getHabits();
        reset();
      })
      .then(closeModal())
      .catch((err) => console.log(err));
  };

  const deleteHabits = (id) => {
    api
      .delete(`/habits/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        getHabits();
      })
      .catch((err) => console.log(err));
  };

  return (
    <HabitsContext.Provider
      value={{
        habits,
        getHabits,
        addHabits,
        deleteHabits,
        editHabits,
        isAchieved,
      }}
    >
      {children}
    </HabitsContext.Provider>
  );
};
