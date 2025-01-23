import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = ({ searchText, handelSearchText }) => {
  return (
    <>
      <NavBar searchText={searchText} handelSearchText={handelSearchText} />
      <ToastContainer />
      <Outlet />
    </>
  );
};

export default MainLayout;
