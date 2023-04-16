import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addStep } from "../../axios/stepAxios";
import Swal from "sweetalert2";

const AddStep = () => {
  const [form, setForm] = useState({
    description: "",
    image: "",
  });

  const [file, setFile] = useState();
  const params = useParams();
  const navigation = useNavigate();

  const submitHandler = () => {
    if (file !== null) {
      const formData = new FormData();
      formData.append("description", form.description);
      formData.append("image", file);
      formData.append("tutorialId", params.tutorialId);

      addStep(formData, (status) => {
        if (status) {
          navigation(`/tutorials/detail/${params.tutorialId}`);
        }
      });
    } else {
      Swal.fire("Add Step", "file cannot be empty", "error");
    }
  };
  return (
    <>
      <div className="row my-5">
        <div className="w-100 text-center">
          <h5>Add Step</h5>
        </div>
        <div className="w-50 mx-auto">
          <hr />
          <div className="form-floating mb-3">
            <input
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              type="text"
              className="form-control"
              id="floatingDescription"
            />
            <label htmlFor="floatingDescription">Caption</label>
          </div>

          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Upload Image: {form.image}
            </label>
            <input
              className="form-control"
              name="image"
              type="file"
              onChange={(e) => {
                setFile(e.target.files[0]);
                setForm({ ...form, image: e.target.files[0].name });
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

export default AddStep;
