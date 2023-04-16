import React from "react";
import { Link } from "react-router-dom";
import { FiLogOut, FiUser } from "react-icons/fi";
import { imageUrl } from "../config/config";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const BarMenu = (props) => {
  const { loginStatus, loginCbHandler } = props;
  const logoutHandler = () => {
    localStorage.clear();
    loginCbHandler({ status: false, data: {} });
    Swal.fire("Logout", "logout successful", "success");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <motion.h6
              className="text"
              animate={{
                scale: [1, 1, 1, 1, 1],
                rotate: [0, 0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 2
              }}
            >
              LetsGrow 🌱
            </motion.h6>
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
            <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
              <li>
                {/* <input
                  className="form-control mt-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                /> */}
              </li>
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0">
              {loginStatus.data.role === "admin" ? (
                <li className="nav-item">
                  <Link className="nav-link active" to="/plants">
                    Plants
                  </Link>
                </li>
              ) : null}
              <li className="nav-item">
                {loginStatus.status ? (
                  <div className="dropdown m-1">
                    <img
                      className="rounded-circle avatar-mini"
                      src={`${imageUrl}${loginStatus.data.image}`}
                      alt=""
                    />
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item " to={`/users/detail`}>
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
