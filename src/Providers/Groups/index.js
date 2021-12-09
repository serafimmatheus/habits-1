import { createContext, useEffect, useState } from "react";
import { api } from "../../Services";
export const GroupContext = createContext();

export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);
  const [input, setInput] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [responses, setResponse] = useState([]);
  const [subs, setSubs] = useState([]);
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM5NDg2MTMxLCJqdGkiOiI5ZWI0MjRhMjNhYWI0NTUwYmVhY2Y4ZGUxZjUyZGQ4ZiIsInVzZXJfaWQiOjk1fQ.ghNkwRw4jpobDI0FrB-CSDNG3R3_eYR2IC8CxcdhrLo";
  const request = () => {
    api
      .get(`/groups/?search=${input}`, {
        headers: { Authorization: `Bearer: ${token}` },
      })
      .then((response) => {
        setGroups(response.data.results);
      });
  };
  const requestSub = (groupId) => {
    api
      .post(`/groups/${groupId}/subscribe/`, {
        headers: { Authorization: `Bearer: ${token}` },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };
  const subscribe = () => {
    api
      .get("/groups/subscriptions/", {
        headers: { Authorization: `Bearer: ${token}` },
      })
      .then((response) => console.log(response.data));
  };
  const addRequest = () => {
    api
      .post(
        "/groups",
        {
          name: "Grupinho Testando123",
          description: "aisodhjaioj ",
          category: "categoryaskdmal",
        },
        {
          headers: { Authorization: `Bearer: ${token}` },
        }
      )
      .then((response) => console.log(response));
  };
  useEffect(() => {
    request();
  });
  return (
    <GroupContext.Provider
      value={{
        groups,
        request,
        setInput,
        requestSub,
        subscribe,
      }}
    >
      {children}
    </GroupContext.Provider>
  );
};
