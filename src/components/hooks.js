import { useContext } from "react";
import Contex from "../contex";

const useAppContext = () => {
  return useContext(Contex);
};

export default useAppContext;
