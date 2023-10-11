import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "../../pages/HomeScreen/HomeScreen";
import RepositoryScreen from "../../pages/RepositoryScreen/RepositoryScreen";

export const router = createBrowserRouter([
  { path: "/", element: <HomeScreen /> },
  { path: "/repository", element: <RepositoryScreen /> },
]);
