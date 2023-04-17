import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getPlantById, editPlant } from "../../axios/plantAxios";
import Swal from "sweetalert2";

const EditPlant = () => {
  let params = useParams();
  let id = params.plantId;

  const [form, setForm] = useState({
    id: "",
    name: "",
    description: "",
    type: "",
  });
  const [file, setFile] = useState(null);

  const navigate = useNavigate();
  useEffect(() => {
    getPlantById(id, (data) => {
      setForm({
        name: data.name,
        description: data.description,
        type: data.type,
      });
    });
  }, [id]);
  // console.log(id)

  const submitHandler = () => {
    if (file !== null) {
      const fromData = new FormData();
      fromData.append("name", form.name);
      fromData.append("description", form.description);
      fromData.append("image", file);
      fromData.append("type", form.type);

      editPlant(id, fromData, (status) => {
        if (status) {
          navigate(-1);
        }
      });
    } else {
      Swal.fire("Plant Image", "cannot be empty", "error");
    }
  };

  return (
    <>
      <div className="bg-dark bg-opacity-10">
        <h4 className=" bg-dark text-white text-center">Edit Plant</h4>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-6">
              <div className="bg-light p-3 rounded">
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      Description
                    </label>
                    <textarea
                      className="form-control"
                      id="description"
                      value={form.description}
                      onChange={(e) =>
                        setForm({ ...form, description: e.target.value })
                      }
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="image" className="form-label">
                      Image
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="image"
                      onChange={(e) => {
                        setFile(e.target.files[0]);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="type" className="form-label">
                      Type
                    </label>
                    <select
                      className="form-control"
                      id="type"
                      value={form.type}
                      onChange={(e) =>
                        setForm({ ...form, type: e.target.value })
                      }
                    >
                      <option value="type1">Indoor Plant</option>
                      <option value="type2">Outdoor Plant</option>
                      <option value="type3">Other</option>
                    </select>
                  </div>
                  <Link
                    type="submit"
                    className="btn btn-primary"
                    onClick={() => submitHandler()}
                  >
                    Submit
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPlant;
