import React from "react";
import { FaSquarePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NavBar = ({ searchText, handelSearchText }) => {
  const navigate = useNavigate();
  return (
    <nav className="navbar bg-body-tertiary py-50" style={{ padding: "20px" }}>
      <div className="container d-flex justify-content-around">
        <Link className="navbar-brand" to="/">
          <span
            onClick={() => {
              navigate(`/`);
            }}
          >
            <h4 style={{ fontWeight: "bold" }}>iNotes</h4>
          </span>
        </Link>
        <div className="d-flex">
          <div
            className="input-group input-group-sm"
            style={{ width: "500px", height: "40px" }}
          >
            <input
              className="form-control"
              placeholder="Search"
              value={searchText}
              onChange={(e) => handelSearchText(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </div>
        </div>

        <Link to="/add-note" style={{ textDecoration: "none" }}>
          <button className="btn btn-outline-primary btn-md" type="button">
            <FaSquarePlus className="me-2 fs-6" /> Add Notes
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
