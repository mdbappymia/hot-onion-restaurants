import React, { createContext } from "react";
import useFirebase from "../../hooks/useFirebase";
import useFoods from "../../hooks/useFoods";
export const ContextApi = createContext();
const ContextProvider = ({ children }) => {
  const foodContext = useFoods();
  const authContext = useFirebase();

  const allContext = { ...foodContext, ...authContext };
  return (
    <ContextApi.Provider value={allContext}>{children}</ContextApi.Provider>
  );
};

export default ContextProvider;
