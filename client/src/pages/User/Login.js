import React, { useState } from "react";
import { images } from "../../images";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../axios/userAxios";

const Login = (props) => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const { loginCbHandler } = props;
  const loginHandler = () => {
    loginCbHandler(true);
  };
  const navigation = useNavigate();
  const submitHandler = () => {
    loginUser(form, (status) => {
      if (status) {
        loginHandler();
        navigation("/");
      }
    });
  };
  return (
    <>
      <div className="position-absolute top-50 start-50 translate-middle">
        <div className="card mb-3">
          <div className="row g-0 m-3">
            <div className="col-md-4">
              <img
                src={images.Home2}
                className="img-fluid rounded-start"
                alt=""
              />
            </div>
            <div className="col-md-8">
              <div className="form-floating mb-1">
                <input
                  value={form.username}
                  onChange={(e) =>
                    setForm({ ...form, username: e.target.value })
                  }
                  type="text"
                  className="form-control"
                  id="floatingUsename"
                />
                <label htmlFor="floatingUsename">Username</label>
              </div>
              <div className="form-floating">
                <input
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="text-center mt-3 mb-5">
                <button
                  onClick={() => submitHandler()}
                  className=" btn btn-outline-primary"
                  type="submit"
                >
                  Login
                </button>
              </div>
              <p className="text-center">
                Don't have Account?
                <Link
                  className="link-primary text-decoration-none ms-2"
                  to="/users/register"
                >
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
