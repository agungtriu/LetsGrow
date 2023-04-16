/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addTutorial } from "../../axios/tutorialAxios";
import { getPlants } from "../../axios/plantAxios";
import Swal from "sweetalert2";
import Select from "react-select";

const AddTutorial = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    image: "",
    plantId: 0,
    plant: "",
  });

  const [file, setFile] = useState(null);
  const navigation = useNavigate();
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    getPlants((result) => setPlants(result));
  }, []);

  let plantOptions = [];

  plants?.map((plant) => {
    plantOptions.push({
      value: plant.id,
      label: plant.name,
    });
    return plant;
  });

  const submitHandler = () => {
    if (file !== null) {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("description", form.description);
      formData.append("image", file);
      formData.append("plantId", form.plantId);

      addTutorial(formData, (status) => {
        if (status) {
          navigation(`/users/detail/`);
        }
      });
    } else {
      Swal.fire("Add Tutorial", "file cannot be empty", "error");
    }
  };
  return (
    <>
      <div className="row my-5">
        <div className="w-100 text-center">
          <h5>Add Tutorial</h5>
        </div>
        <div className="w-50 mx-auto">
          <hr />
          <div className="form-floating mb-3">
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              type="text"
              className="form-control"
              id="floatingName"
            />
            <label htmlFor="floatingName">Name</label>
          </div>
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
          <div className="mb-3">
            <label>Plant</label>
            <Select
              value={{ value: form.plantId, label: form.userName }}
              options={plantOptions}
              onChange={(e) => {
                setForm({ ...form, userId: +e.value, userName: e.label });
              }}
            />
          </div>

          <div className="mb-3 text-center">
            <button
              onClick={() => submitHandler()}
              className="btn btn-block btn-primary"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTutorial;
