import React from "react";
import NoteCardContainer from "../components/NoteCardContainer";

const HomePage = ({ notes, loading }) => {
  return (
    <>
      <NoteCardContainer notes={notes} loading={loading} />
    </>
  );
};

export default HomePage;
