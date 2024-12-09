import React from "react";
import NavBar from "./components/Navbar";
import Filter from "./components/Filter ";
import NoteCardContainer from "./components/NoteCardContainer";

const App = () => {
  return (
    <>
      <NavBar />
      <Filter />
      <NoteCardContainer />
    </>
  );
};

export default App;
