import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { imageUrl } from "../../config/config";
import { Link } from "react-router-dom";
import { faKey, faPen, faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { getUserByUsername } from "../../axios/userAxios";
import ListTutorial from "../Tutorial/ListTutorial";
import ReactLoading from "react-loading";

const Profile = () => {
  const [done, setDone] = useState(undefined);
  const [user, setUser] = useState({
    username: "",
    name: "",
    email: "",
    avatar: "",
    phone: "",
    address: "",
    tutorials: [],
  });

  const getUser = () => {
    const username = localStorage.username;
    getUserByUsername(username, (result) => {
      setUser({
        username: result.username,
        name: result.name,
        email: result.email,
        avatar: `${imageUrl}${result.profile.avatar}`,
        phone: result.profile.phone,
        address: result.profile.address,
        tutorials: result.tutorials,
      });
      setDone(true);
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <div className="container">
        {!done ? (
          <ReactLoading
            className="position-absolute top-50 start-50 translate-middle"
            type={"spin"}
            color={"#000000"}
            height={100}
            width={100}
          />
        ) : (
          <div>
            <div className="card mb-3 mt-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <div className="card">
                    <img
                      src={user.avatar}
                      className="rounded-start ms-auto me-auto"
                      style={{ width: "50%" }}
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="text-center">{user.username}</h5>
                      <div className="row row-cols-auto d-flex justify-content-center">
                        <div className="col">
                          <div className="input-group flex-nowrap">
                            <Link
                              className="btn btn-outline-dark"
                              to="/users/edit/profile"
                            >
                              <FontAwesomeIcon
                                icon={faPen}
                                style={{ color: "#30c0af" }}
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="col">
                          <div className="input-group flex-nowrap">
                            <Link
                              className="btn btn-outline-dark"
                              to="/users/edit/password"
                            >
                              <FontAwesomeIcon icon={faKey} />
                            </Link>
                          </div>
                        </div>
                        <div className="col">
                          <div className="input-group flex-nowrap">
                            <Link
                              className="btn btn-outline-dark"
                              to="/users/edit/avatar"
                            >
                              <FontAwesomeIcon
                                icon={faUser}
                                style={{ color: "#ba1c1c" }}
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Information</h5>
                    <div className="container text center">
                      <div className="row row-cols-2">
                        {user.name !== null && user.name !== "" ? (
                          <div className="col my-3">
                            <label>Name</label>
                            <div className="input-group flex-nowrap">
                              {user.name}
                            </div>
                          </div>
                        ) : null}
                        {user.phone !== null && user.phone !== "" ? (
                          <div className="col my-3">
                            <label>Phone</label>
                            <div className="input-group flex-nowrap">
                              {user.phone}
                            </div>
                          </div>
                        ) : null}
                        {user.address !== null && user.address !== "" ? (
                          <div className="col my-3">
                            <label>Address</label>
                            <div className="input-group flex-nowrap">
                              {user.address}
                            </div>
                          </div>
                        ) : null}
                        {user.email !== null && user.email !== "" ? (
                          <div className="col my-3">
                            <label>Email</label>
                            <div className="input-group flex-nowrap">
                              {user.email}
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ListTutorial tutorials={user.tutorials}></ListTutorial>
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;
