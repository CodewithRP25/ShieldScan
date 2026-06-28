import { RouterProvider } from "react-router-dom";
import { AppProvider } from "./context/AppContext.jsx";
import { appRouter } from "./router/AppRouter.jsx";

export default function App() {
  return (
    <AppProvider>
      <RouterProvider router={appRouter} />
    </AppProvider>
  );
}
