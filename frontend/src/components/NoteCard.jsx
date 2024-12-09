import { FaNoteSticky } from "react-icons/fa6";
import { FaBookOpenReader } from "react-icons/fa6";

import { MdMarkunread } from "react-icons/md";
import { Link } from "react-router-dom";

const NoteCard = ({ color }) => {
  return (
    <div className="col-md-4 single-note-item all-category">
      <div className="card card-body">
        <span className="side-stick" style={{ backgroundColor: color }}></span>
        <FaNoteSticky style={{ marginLeft: "auto", color: color }} />
        <h5
          className="note-title text-truncate w-75 mb-0"
          data-noteheading="Book a Ticket for Movie"
        >
          Read react.js docs{" "}
        </h5>
        <p className="note-date font-12 text-muted">11 March 2009</p>
        <div className="note-content">
          <p
            className="note-inner-content text-muted"
            data-notecontent="Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis."
          >
            Blandit tempus porttitor aasfs. Integer posuere erat a ante
            venenatis.
          </p>
        </div>
        <div className="d-flex align-items-center">
          <a to="/notes-detail">
            <span className="mr-1">
              <MdMarkunread
                style={{ fontSize: "25px", cursor: "pointer", color: color }}
              />
            </span>
          </a>

          <span className="mr-1">
            <i className="fa fa-trash remove-note"></i>
          </span>
          <div className="ml-auto">
            <div className="category-selector btn-group">
              <a
                className="nav-link dropdown-toggle category-dropdown label-group p-0"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="true"
              >
                <div className="category">
                  <div className="category-business"></div>
                  <div className="category-social"></div>
                  <div className="category-important"></div>
                  <span className="more-options text-dark">
                    <i className="icon-options-vertical"></i>
                  </span>
                </div>
              </a>
              <div className="dropdown-menu dropdown-menu-right category-menu">
                <a
                  className="note-business badge-group-item badge-business dropdown-item position-relative category-business text-success"
                  href="javascript:void(0);"
                >
                  <i className="mdi mdi-checkbox-blank-circle-outline mr-1"></i>
                  Business
                </a>
                <a
                  className="note-social badge-group-item badge-social dropdown-item position-relative category-social text-info"
                  href="javascript:void(0);"
                >
                  <i className="mdi mdi-checkbox-blank-circle-outline mr-1"></i>{" "}
                  Social
                </a>
                <a
                  className="note-important badge-group-item badge-important dropdown-item position-relative category-important text-danger"
                  href="javascript:void(0);"
                >
                  <i className="mdi mdi-checkbox-blank-circle-outline mr-1"></i>{" "}
                  Important
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
