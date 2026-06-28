import { useContext } from "react";
import { AppContext } from "./appContext.js";

export function useAppContext() {
  return useContext(AppContext);
}
