import { useEffect, useState } from "react";
import { editAvatar } from "../../axios/userAxios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const EditAvatar = () => {
  const [avatar, setAvatar] = useState();
  const [file, setFile] = useState(null);
  useEffect(() => {
    setAvatar(localStorage.avatar);
  }, []);

  const navigation = useNavigate();

  const submitHandler = () => {
    if (file !== null) {
      const fromData = new FormData();
      fromData.append("avatar", file);
      editAvatar(fromData, (status, avatar) => {
        if (status) {
          setAvatar(avatar);
          navigation("/users/detail");
        }
      });
    } else {
      Swal.fire("Edit Avatar", "file cannot be empty", "error");
    }
  };
  return (
    <>
      <div className="row my-5">
        <div className="w-100 text-center">
          <h5>Edit Avatar</h5>
        </div>
        <div className="w-50 mx-auto">
          <hr />
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Upload Image: {avatar}
            </label>
            <input
              className="form-control"
              name="image"
              type="file"
              onChange={(e) => {
                setFile(e.target.files[0]);
                setAvatar(e.target.files[0].name);
              }}
            />
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

export default EditAvatar;
