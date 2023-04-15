import React from "react";
import { Link } from "react-router-dom";
import { FiLogOut, FiUser } from "react-icons/fi";
import { imageUrl } from "../config/config";

const BarMenu = (props) => {
  const { loginStatus, loginCbHandler } = props;

  const avatar = localStorage.getItem("avatar");
  const avatarUrl = `${imageUrl}${avatar}`;
  const role = localStorage.getItem("role");
  const logoutHandler = () => {
    localStorage.clear();
    loginCbHandler(false);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Lets Grow 🌱
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <ul className="navbar-nav mb-2 mb-lg-0">
              {role === "admin" ? (
                <li className="nav-item">
                  <Link className="nav-link active" to="/plants">
                    Plants
                  </Link>
                </li>
              ) : null}
              <li className="nav-item">
                <Link className="nav-link active" to="/tutorials">
                  All Tutorial
                </Link>
              </li>
              <li className="nav-item">
                {loginStatus ? (
                  <div className="dropdown m-1">
                    <img
                      className="rounded-circle avatar-mini"
                      src={avatarUrl}
                      alt=""
                    />
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item " to={`/users`}>
                          {" "}
                          <FiUser /> <span className="m-3">Profile</span>{" "}
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={() => logoutHandler()}
                          className="dropdown-item"
                          to={"/"}
                        >
                          {" "}
                          <FiLogOut /> <span className="ms-3">Logout</span>{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <Link className="nav-link active" to="/users/login">
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default BarMenu;
