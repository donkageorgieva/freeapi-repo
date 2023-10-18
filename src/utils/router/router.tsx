import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomeScreen from "../../pages/HomeScreen/HomeScreen";
import RepositoryScreen from "../../pages/RepositoryScreen/RepositoryScreen";
import PageLayout from "../../components/layout/PageLayout/PageLayout";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<HomeScreen />} />
      <Route path="/" element={<PageLayout />}>
        <Route path="/repository" element={<RepositoryScreen />} />
      </Route>
    </Route>
  )
);
