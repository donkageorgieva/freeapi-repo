import { RouterProvider } from "react-router-dom";
import { router } from "./utils/router/router";
import { store } from "./services/state/store/store";
import { Provider } from "react-redux/es/exports";
function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
