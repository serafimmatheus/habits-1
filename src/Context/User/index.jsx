import { createContext, useState } from "react";

export const UserContext = createContext([]);

export const UserProvider = ({ children }) => {
  const [token] = useState({});

  console.log(token);
  return (
    <UserContext.Provider value={{ token }}>{children}</UserContext.Provider>
  );
};
