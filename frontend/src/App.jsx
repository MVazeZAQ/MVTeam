import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(<Route index element={<HomePage />} />)
  );

  return <RouterProvider router={router} />;
};

export default App;
