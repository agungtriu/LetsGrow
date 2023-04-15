import React, { useState } from "react";
import { images } from "../../images";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../axios/userAxios";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigation = useNavigate();

  const submitHandler = () => {
    registerUser(form, (status) => {
      if (status) {
        navigation("/users/login");
      }
    });
  };
  return (
    <>
      <div className="position-absolute top-50 start-50 translate-middle">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={images.Home1}
                className="img-fluid rounded-start"
                alt=""
              />
            </div>
            <div className="col-md-8">
              <div className="card-body mx-auto">
                <h5 className="card-title text-center">Register</h5>
                <div className="form-floating mb-1">
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    type="text"
                    className="form-control"
                    id="floatingName"
                  />
                  <label htmlFor="floatingName">name</label>
                </div>
                <div className="form-floating mb-1">
                  <input
                    value={form.username}
                    onChange={(e) =>
                      setForm({ ...form, username: e.target.value })
                    }
                    type="text"
                    className="form-control"
                    id="floatingUsername"
                  />
                  <label htmlFor="floatingUsername">username</label>
                </div>
                <div className="form-floating mb-1">
                  <input
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    type="text"
                    className="form-control"
                    id="floatingEmail"
                  />
                  <label htmlFor="floatingEmail">email</label>
                </div>
                <div className="form-floating mb-1">
                  <input
                    value={form.password}
                    onChange={(e) =>
                      setForm({ ...form, password: e.target.value })
                    }
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                  />
                  <label htmlFor="floatingPassword">password</label>
                </div>
                <div className="form-floating mb-1">
                  <input
                    value={form.confirmPassword}
                    onChange={(e) =>
                      setForm({ ...form, confirmPassword: e.target.value })
                    }
                    type="password"
                    className="form-control"
                    id="floatingConfirm"
                  />
                  <label htmlFor="floatingConfirm">confirm</label>
                </div>
                <div className="mb-3 text-center mt-3">
                  <button
                    onClick={() => submitHandler()}
                    className=" btn btn-sm btn-outline-primary text-center"
                    type="submit"
                  >
                    Register
                  </button>
                </div>
              </div>
              <p className="text-center m-3">
                Already have Account?
                <Link
                  className="link-primary text-decoration-none ms-2"
                  to="/users/login"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
