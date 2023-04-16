/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editStep, getStepById } from "../../axios/stepAxios";
import Swal from "sweetalert2";

const EditStep = () => {
  const [form, setForm] = useState({
    id: "",
    description: "",
    image: "",
    tutorialId: "",
  });

  const [file, setFile] = useState(null);
  const params = useParams();
  const navigation = useNavigate();
  const getStep = () => {
    const id = params.stepId;
    getStepById(id, (result) => {
      setForm({
        id: result.id,
        description: result.description,
        image: result.image,
        tutorialId: result.tutorialId,
      });
    });
  };

  useEffect(() => {
    getStep();
  }, []);

  const submitHandler = () => {
    if (file !== null) {
      const formData = new FormData();
      formData.append("description", form.description);
      formData.append("image", file);

      editStep(form.id, formData, (status) => {
        if (status) {
          navigation(`/tutorials/detail/${form.tutorialId}`);
        }
      });
    } else {
      Swal.fire("Edit Step", "file cannot be empty", "error");
    }
  };
  return (
    <>
      <div className="row my-5">
        <div className="w-100 text-center">
          <h5>Edit Step</h5>
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

export default EditStep;
