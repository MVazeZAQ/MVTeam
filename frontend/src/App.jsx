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
import axios from "axios";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
const App = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8008/notes")
      .then((res) => {
        console.log(res.data);
        setNotes(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage notes={notes} />} />
        <Route path="/add-notes" element={<AddNotes />} />
        <Route path="/notes-detail" element={<NotePage />} />
        <Route path="/edit-note" element={<EditNotes />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
