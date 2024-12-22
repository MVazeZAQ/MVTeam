import React from "react";
import "./NotePage.css";
import { BiSolidTrashAlt } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import Modal from "../components/Modal";

const NotePage = () => {
  return (
    <>
      <div className="note-container">
        <h3 className="title">REACT PROJECT FOR BEGINNERS</h3>
        <span className="d-flex justify-content-center">
          <p className="note-date font-12 text-muted me-5">
            {" "}
            created: 11 March 2009
          </p>
          <p className="note-date font-12 text-muted me-5">
            last updated: 11 March 2009
          </p>
        </span>
        <span className="button-group">
          <button className="btn btn-primary">
            <FiEdit />
            <span>Edit</span>
          </button>
          <button className="btn btn-danger">
            <BiSolidTrashAlt />
            <span>Delete</span>
          </button>
        </span>
        <p className="description"></p>
      </div>
      <Modal />
    </>
  );
};

export default NotePage;
