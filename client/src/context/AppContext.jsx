import { AppContext } from "./appContext.js";

export function AppProvider({ children }) {
  return <AppContext.Provider value={{ appName: "ShieldScan" }}>{children}</AppContext.Provider>;
}
