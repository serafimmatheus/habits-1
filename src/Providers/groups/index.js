import { createContext, useState } from "react";

import api from "../../services/api";

export const GroupsContext = createContext([]);

export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);

  const getUserGroups = (token) => {
    api
      .get("/groups/subscriptions/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setGroups(response.data);
      })
      .catch((err) => console.log(err));
  };

  const searchGroups = (input, token) => {
    api
      .get(`/groups/?search=${input}`, {
        headers: { Authorization: `Bearer: ${token}` },
      })
      .then((response) => {
        setGroups(response.data.results);
        console.log(response);
      });
  };

  const editGroups = (id, data, token, reset, closeModal) => {
    api
      .patch(`/groups/${id}/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        getUserGroups(token);
        reset();
      })
      .then(closeModal())
      .catch((err) => console.log(err));
  };

  const createGroups = (data, token, reset, closeModal) => {
    api
      .post(`/groups/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        getUserGroups(token);
        reset();
      })
      .then(closeModal())
      .catch((err) => console.log(err));
  };

  const subscribeGroups = (id, token) => {
    api
      .post(`/groups/${id}/subscribe/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        getUserGroups(token);
      })
      .catch((err) => console.log(err));
  };

  const unsubscribeGroups = (id, token) => {
    api
      .delete(`/groups/${id}/unsubscribe/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => getUserGroups(token))
      .catch((err) => console.log(err));
  };

  return (
    <GroupsContext.Provider
      value={{
        groups,
        getUserGroups,
        searchGroups,
        editGroups,
        createGroups,
        subscribeGroups,
        unsubscribeGroups,
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
};
