import { useEffect, useState } from "react";
import { BiSolidTrashAlt } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import "./NoteDetailPage.css";
import axios from "axios";
import { FormatDate } from "../components/FormatDate";
import Modal from "../components/Modal";

const NoteDetailPage = ({ deleteNote }) => {
  const [note, setNote] = useState({});
  const { slug } = useParams();
  const [isOpen, setIsOPen] = useState(false);

  const handleIsOpen = () => {
    setIsOPen(!isOpen);
  };

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8008/notes/${slug}`)
      .then((res) => {
        setNote(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [slug]);

  return (
    <>
      <div className="note-container">
        <h3 className="title">{note.title}</h3>
        <span className="d-flex justify-content-center">
          <p className="note-date font-12 text-muted me-5">
            {" "}
            created: {FormatDate(note.created)}
          </p>
          <p className="note-date font-12 text-muted me-5">
            last updated: {FormatDate(note.updated)}
          </p>
        </span>
        <span className="button-group">
          <Link to={`/edit-note/${slug}`}>
            <button className="btn btn-primary">
              <FiEdit />
              <span>Edit</span>
            </button>
          </Link>

          <button className="btn btn-danger" onClick={handleIsOpen}>
            <BiSolidTrashAlt />
            <span>Delete</span>
          </button>
        </span>
        <p className="description">{note.body}</p>
      </div>

      {isOpen && (
        <Modal
          handleIsOpen={handleIsOpen}
          deleteNote={() => deleteNote(slug)}
        />
      )}
    </>
  );
};

export default NoteDetailPage;
