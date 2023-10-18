import { Outlet } from "react-router-dom";
import AppNavigation from "../../ui/AppNavigation/AppNavigation";

const PageLayout = () => {
  return (
    <>
      <AppNavigation />
      <Outlet />
    </>
  );
};

export default PageLayout;
