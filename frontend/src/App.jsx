import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AddNotePage from "./pages/AddOrDeleteNotePage/AddNotePage";
import EditNotePage from "./pages/AddOrDeleteNotePage/EditNotePage";
import NoteDetailPage from "./pages/NoteDetailPage/NoteDetailPage";
import axios from "axios";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [shouldFetch, setShouldFetch] = useState(false); // New state to track re-fetch

  const handleFilterText = (val) => {
    setFilterText(val);
  };

  const handelSearchText = (val) => {
    setSearchText(val);
  };

  const filteredNotes =
    filterText === "BUSINESS"
      ? notes.filter((note) => note.category === "BUSINESS")
      : filterText === "PERSONAL"
      ? notes.filter((note) => note.category === "PERSONAL")
      : filterText === "IMPORTANT"
      ? notes.filter((note) => note.category === "IMPORTANT")
      : notes;

  // Fetch notes when the search text changes
  useEffect(() => {
    if (searchText.length === 0) {
      // If searchText is empty, fetch all notes
      axios
        .get("http://127.0.0.1:8008/notes/")
        .then((res) => {
          setNotes(res.data);
        })
        .catch((err) => console.log(err.message));
      return;
    }

    if (searchText.length >= 3) {
      // If searchText is 3 or more characters, perform the search
      axios
        .get(`http://127.0.0.1:8008/notes-search/?search=${searchText}`)
        .then((res) => {
          console.log(res.data);
          setNotes(res.data);
        })
        .catch((err) => console.log(err.message));
    }
  }, [searchText]);

  // Fetch notes when the component mounts or shouldFetch changes
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
        setIsLoading(false);
      });
  }, [shouldFetch]); // Re-fetch when shouldFetch changes

  const addNote = (data) => {
    axios
      .post("http://127.0.0.1:8008/notes/", data)
      .then((res) => {
        setShouldFetch((prev) => !prev); // Trigger re-fetch
        toast.success("A new note has been added");
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const updateNote = (data, slug) => {
    axios
      .put(`http://127.0.0.1:8008/notes/${slug}/`, data)
      .then((res) => {
        setShouldFetch((prev) => !prev); // Trigger re-fetch
        toast.success("Note updated successfully");
        console.log(res.data);
      })
      .catch((err) => console.log(err.message));
  };

  const deleteNote = (slug) => {
    axios
      .delete(`http://127.0.0.1:8008/notes/${slug}`)
      .then(() => {
        setShouldFetch((prev) => !prev); // Trigger re-fetch
        toast.success("Note deleted successfully");
      })
      .catch((err) => console.log(err.message));
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <MainLayout
            searchText={searchText}
            handelSearchText={handelSearchText}
          />
        }
      >
        <Route
          index
          element={
            <HomePage
              notes={filteredNotes}
              loading={isLoading}
              handleFilterText={handleFilterText}
            />
          }
        />
        <Route path="/add-note" element={<AddNotePage addNote={addNote} />} />
        <Route
          path="/notes/:slug"
          element={<NoteDetailPage deleteNote={deleteNote} />}
        />
        <Route
          path="/edit-note/:slug"
          element={<EditNotePage updateNote={updateNote} />}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
