import { RouterProvider } from "react-router-dom";
import { router } from "./utils/router/router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
