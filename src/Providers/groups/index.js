import { createContext, useState } from "react";
import api from "../../Services";
import { toast } from "react-toastify";

export const GroupsContext = createContext([]);

export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);
  const [useSub, setUseSub] = useState(false);
  const [myGroups, setMyGroups] = useState([]);
  const [grouT, setGroupT] = useState(true);
  const [getUser, setGetUser] = useState("");
  const [token] = useState(
    JSON.parse(localStorage.getItem("@Habits:token")) || ""
  );

  const handleUser = (id) => {
    api.get(`/users/${id}/`).then((response) => {
      setGetUser(response.data.username);
    });
  };

  const getUserGroups = () => {
    api
      .get("/groups/subscriptions/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setMyGroups(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const searchGroups = (input) => {
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

  const editGroups = (id, name, category, description, reset) => {
    api
      .patch(
        `groups/${id}/`,
        { category, name, description },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        getUserGroups(token);
        toast.success("Grupo editado");
        console.log(response.data);
        reset();
      })
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
        toast.success("Grupo criado com sucesso!");
        getUserGroups(token);
        reset();
      })
      .then(closeModal())
      .catch((err) => {
        toast.error("Erro ao criar grupo");
        console.log(err);
      });
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
        toast.success("Inscrição concluída!");
        console.log(response);
        getUserGroups(token);
      })
      .catch((err) => {
        toast.error("Você já é inscrito!");
        console.log(err);
      });
  };

  const unsubscribeGroups = (id) => {
    api
      .delete(`/groups/${id}/unsubscribe/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("Desinscrição concluída!");
        getUserGroups(token);
        setUseSub(false);
      })
      .catch((err) => {
        toast.error("Você não faz parte desse grupo!");
        console.log(err);
      });
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
        handleUser,
        getUser,
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
};
