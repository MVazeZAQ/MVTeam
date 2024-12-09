import Filter from "../components/Filter ";
import NoteCardContainer from "../components/NoteCardContainer";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Filter />
      <NoteCardContainer />
    </>
  );
};

export default HomePage;
