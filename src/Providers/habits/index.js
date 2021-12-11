import { createContext, useState } from "react";

import api from "../../Services";

export const HabitsContext = createContext([]);

export const HabitsProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);

  const getHabits = (token) => {
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

  const addHabits = (data, token, reset, closeModal) => {
    api
      .post("/habits/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        getHabits(token);
        reset();
      })
      .then(closeModal())
      .catch((err) => console.log(err));
  };

  const editHabits = (id, data, token, reset, closeModal) => {
    api
      .patch(`/habits/${id}/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        getHabits(token);
        reset();
      })
      .then(closeModal())
      .catch((err) => console.log(err));
  };

  const deleteHabits = (id, token) => {
    api
      .delete(`/habits/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => getHabits(token))
      .catch((err) => console.log(err));
  };

  return (
    <HabitsContext.Provider
      value={{ habits, getHabits, addHabits, deleteHabits, editHabits }}
    >
      {children}
    </HabitsContext.Provider>
  );
};
