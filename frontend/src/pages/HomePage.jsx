import Filter from "../components/Filter";
import NoteCardContainer from "../components/NoteCardContainer";
import Navbar from "../components/Navbar";

const HomePage = ({ notes }) => {
  return (
    <>
      <Filter />
      <NoteCardContainer notes={notes} />
    </>
  );
};

export default HomePage;
