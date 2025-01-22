import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AddNotes from "./pages/AddNotes";
import NotePage from "./pages/NoteDetailPage";
import EditNotes from "./pages/EditNotePage";
import axios from "axios";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import NoteDetailPage from "./pages/NoteDetailPage";
const App = () => {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://127.0.0.1:8008/notes/")
      .then((res) => {
        console.log(res.data);
        setNotes(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage notes={notes} loading={isLoading} />} />
        <Route path="/add-notes" element={<AddNotes />} />
        <Route path="/notes/:slug" element={<NoteDetailPage />} />
        <Route path="/edit-note" element={<EditNotes />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
