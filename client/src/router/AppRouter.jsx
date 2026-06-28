import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout.jsx";
import About from "../pages/About.jsx";
import Home from "../pages/Home.jsx";
import MessageScanner from "../pages/MessageScanner.jsx";
import NotFound from "../pages/NotFound.jsx";
import PrivacyPolicy from "../pages/PrivacyPolicy.jsx";
import UrlScanner from "../pages/UrlScanner.jsx";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "url-scanner", element: <UrlScanner /> },
      { path: "message-scanner", element: <MessageScanner /> },
      { path: "about", element: <About /> },
      { path: "privacy", element: <PrivacyPolicy /> },
      { path: "*", element: <NotFound /> }
    ]
  }
]);
