import { createContext, useEffect, useState } from "react";
import { api } from "../../Services";
export const GroupContext = createContext();

export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM5MTY2MzcyLCJqdGkiOiI4ZWE2ZjJiMWQwZGU0NDJmYTQ1NTBhMDZjZGJlMGRmMCIsInVzZXJfaWQiOjE5fQ.UCTZiSdcxlyNhjqlGhCDann5MmF1taQqqSajKGc-i8A";
  const request = () => {
    api
      .get("/groups", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setGroups(response.data);
      });
  };
  useEffect(() => {
    request();
  }, []);
  return (
    <GroupContext.Provider value={request}>{children}</GroupContext.Provider>
  );
};
