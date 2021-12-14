import { createContext, useState } from "react";
import api from "../../Services";
export const GroupsContext = createContext([]);

export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);
  const [useSub, setUseSub] = useState(false);
  const [myGroups, setMyGroups] = useState([]);
  const [grouT, setGroupT] = useState(true);
  const [token] = useState(
    JSON.parse(localStorage.getItem("@Habits:token")) || ""
  );

  const getUserGroups = () => {
    api
      .get(
        "/groups/subscriptions/",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setMyGroups(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const searchGroups = (input, token) => {
    api
      .get(
        `/groups/?search=${input}`,
        { null: null },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
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
      .catch((err) => {
        console.log(err);
      });
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

  const subscribeGroups = (id) => {
    api
      .post(
        `groups/${id}/subscribe/`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  const unsubscribeGroups = (id, token) => {
    api
      .delete(
        `/groups/${id}/unsubscribe/`,
        { null: null },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        getUserGroups(token);
        setUseSub(false);
      })
      .catch((err) => console.log(err));
  };

  const addActivity = (data, token, reset, closeModal) => {
    api
      .post(`/activities/`, data, {
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

  const searchActivity = () => {};

  const editActivity = (id, data, token, reset, closeModal) => {
    api
      .patch(`/activities/${id}/`, data, {
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

  const removeActivity = (id, token) => {
    api
      .delete(
        `/activities/${id}/`,
        { null: null },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        getUserGroups(token);
      })
      .catch((err) => console.log(err));
  };

  return (
    <GroupsContext.Provider
      value={{
        groups,
        myGroups,
        getUserGroups,
        searchGroups,
        editGroups,
        createGroups,
        subscribeGroups,
        unsubscribeGroups,
        useSub,
        setUseSub,
        grouT,
        setGroupT,
        addActivity,
        searchActivity,
        editActivity,
        removeActivity,
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
};
