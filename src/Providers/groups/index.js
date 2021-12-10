import { createContext, useState } from "react";

import api from "../../services/api";

export const GroupsContext = createContext([]);

export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);
  const [useSub, setUseSub] = useState(false);
  const [userId, setUserId] = useState();
  const [userGroupId, setUserGroupId] = useState([]);
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
      });
  };

  const editGroups = (id, data, token, reset, closeModal) => {
    api
      .patch(`groups/${id}/subscribe/`, data, {
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
        setUserGroupId(response.data.users_on_group);
        reset();
      })
      .then(closeModal())
      .catch((err) => console.log(err));
  };

  const subscribeGroups = (id, token) => {
    api
      .post(
        `groups/${id}/subscribe/`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        getUserGroups(token);
        setUserId(response.data.user.id);
      })
      .catch((err) => console.log(err));
  };
  console.log(useSub);
  const unsubscribeGroups = (id, token) => {
    api
      .delete(`/groups/${id}/unsubscribe/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        getUserGroups(token);
        setUseSub(false);
      })
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
        useSub,
        userId,
        userGroupId,
        setUseSub,
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
};
