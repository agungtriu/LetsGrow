/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editTutorial, getTutorialById } from "../../axios/tutorialAxios";
import { getPlants } from "../../axios/plantAxios";
import Swal from "sweetalert2";
import Select from "react-select";

const EditTutorial = () => {
  const [form, setForm] = useState({
    id: 0,
    name: "",
    description: "",
    image: "",
    plantId: 0,
    plantName: "",
  });

  const [file, setFile] = useState(null);
  const params = useParams();
  const navigation = useNavigate();
  const getTutorial = () => {
    const id = params.tutorialId;
    getTutorialById(id, (result) => {
      setForm({
        id: result.id,
        name: result.name,
        description: result.description,
        image: result.image,
        plantId: result.plantId,
        plantName: result.plantName,
      });
    });
  };
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    getTutorial();
    getPlants((result) => setPlants(result));
  }, []);

  let plantOptions = [];

  plants?.forEach((plant) => {
    plantOptions.push({
      value: plant.id,
      label: plant.name,
    });
  });

  const submitHandler = () => {
    if (file !== null) {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("description", form.description);
      formData.append("image", file);
      formData.append("plantId", form.plantId);

      editTutorial(form.id, formData, (status) => {
        if (status) {
          navigation(`/tutorials/detail/${form.id}`);
        }
      });
    } else {
      Swal.fire("Edit Tutorial", "file cannot be empty", "error");
    }
  };
  return (
    <>
      <div className="row my-5">
        <div className="w-100 text-center">
          <h5>Edit Tutorial</h5>
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
            <textarea
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              type="text"
              className="form-control"
              id="floatingDescription"
            />
            <label htmlFor="floatingDescription">Description</label>
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
              value={{ value: form.plantId, label: form.plantName }}
              options={plantOptions}
              onChange={(e) => {
                setForm({ ...form, plantId: +e.value, plantName: e.label });
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

export default EditTutorial;
