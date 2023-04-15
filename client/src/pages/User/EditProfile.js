import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { editProfile, getUserByUsername } from "../../axios/userAxios";

const EditProfile = () => {
  const [form, setForm] = useState({
    username: "",
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const navigation = useNavigate();
  const getProfile = () => {
    const username = localStorage.username;
    getUserByUsername(username, (result) => {
      setForm({
        username: result.username,
        name: result.name,
        email: result.email,
        phone: result.profile.phone,
        address: result.profile.address,
      });
    });
  };

  useEffect(() => {
    getProfile();
  }, []);
  const submitHandler = () => {
    editProfile(form, (status) => {
      if (status) {
        navigation("/users/detail");
      }
    });
  };
  return (
    <>
      <div className="row my-5">
        <div className="w-100 text-center">
          <h5>Edit Profile</h5>
        </div>
        <div className="w-50 mx-auto">
          <hr />
          <div className="form-floating mb-3">
            <input
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              type="text"
              className="form-control"
              id="floatingUsername"
            ></input>
            <label htmlFor="floatingUsername">Username </label>
          </div>

          <div className="form-floating mb-3">
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              type="text"
              className="form-control"
              id="floatingName"
            ></input>
            <label htmlFor="floatingName">Name: </label>
          </div>

          <div className="form-floating mb-3">
            <input
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              type="email"
              className="form-control"
              id="floatingEmail"
            ></input>
            <label htmlFor="floatingEmal">Email: </label>
          </div>

          <div className="form-floating mb-3">
            <input
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              type="tel"
              className="form-control"
              id="floatingPhone"
            ></input>
            <label htmlFor="floatingPhone">Phone: </label>
          </div>

          <div className="form-floating mb-3">
            <input
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              type="tel"
              className="form-control"
              id="floatingAddress"
            ></input>
            <label htmlFor="floatingAddress">Address: </label>
          </div>

          <div className="mb-3 text-center">
            <button
              onClick={() => submitHandler()}
              className="btn btn-block btn-primary"
            >
              Submit Changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
