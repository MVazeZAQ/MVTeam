import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AddNotes from "./pages/AddNotes";
import NotePage from "./pages/NotePage";
import EditNotes from "./pages/EditNotePage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/add-notes" element={<AddNotes />} />
        <Route path="/notes-detail" element={<NotePage />} />
        <Route path="/edit-note" element={<EditNotes />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
