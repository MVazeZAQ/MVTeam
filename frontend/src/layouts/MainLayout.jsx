import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
const MainLayout = () => {
  return (
    <>
      <NavBar />
      <ToastContainer />
      <Outlet />
    </>
  );
};

export default MainLayout;
