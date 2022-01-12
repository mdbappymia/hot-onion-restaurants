import { useContext } from "react";
import { ContextApi } from "../components/ContextProvider/ContextProvider";

const useStore = () => {
  return useContext(ContextApi);
};

export default useStore;
