import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import { deletePlant, getPlants } from "../../axios/plantAxios";
import Loading from "../dataEmpty";
import { imageUrl } from "../../config/config";
import { formatDate } from "../../helpers/timeSince";
import ReactLoading from "react-loading";

const ListPlant = () => {
  const [plants, setPlants] = useState([]);
  const [done, setDone] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [plantsPerPage] = useState(3);
  const location = useLocation();

  const getAll = () => {
    getPlants((result) => {
      setPlants(
        result.map((plant) => ({
          id: +plant.id,
          name: plant.name,
          description: plant.description,
          image: `${imageUrl}${plant.image}`,
          type: plant.type,
          updatedAt: formatDate(plant.updatedAt),
        }))
      );
      setDone(true);
    });
  };

  useEffect(() => {
    getAll();
  }, [location.key]);

  const navigate = useNavigate();

  const deleteHandler = (id) => {
    deletePlant(id, (status) => {
      if (status) {
        if (plants.length === indexOfFirstPlant + 1) {
          setCurrentPage(currentPage - 1);
        }
        navigate("/plants");
      }
    });
  };

  const indexOfLastPlant = currentPage * plantsPerPage;
  const indexOfFirstPlant = indexOfLastPlant - plantsPerPage;
  const currentPlants = plants.slice(indexOfFirstPlant, indexOfLastPlant);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="container">
        <div className="mx-auto row mt-3">
          <Link className="btn btn-outline-dark" to="/plants/add">
            Add Plant <FontAwesomeIcon icon={faPlus} />
          </Link>
        </div>
        {!done ? (
          <ReactLoading
            className="position-absolute top-50 start-50 translate-middle"
            type={"spin"}
            color={"#000000"}
            height={100}
            width={100}
          />
        ) : (
          <div className="row row-cols-3 my-2">
            {currentPlants.length > 0 ? (
              currentPlants.map((plant) => {
                const truncatedDesc =
                  plant.description.length > 100
                    ? plant.description.substring(0, 100) + "..."
                    : plant.description;
                return (
                  <div className="card-fit" key={plant.id}>
                    <div className="card my-2">
                      <img
                        src={plant.image}
                        className="card-img-top object-fit-cover"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">{plant.name}</h5>
                        <p className="card-text">{truncatedDesc}</p>
                        <p className="card-text">
                          <small className="text-body-secondary">
                            {plant.updatedAt}
                          </small>
                        </p>
                        <div className="d-flex justify-content-center">
                          <div className="p-1">
                            <button
                              className="btn btn-outline-dark"
                              onClick={() => deleteHandler(+plant.id)}
                            >
                              <FontAwesomeIcon
                                icon={faTrash}
                                style={{ color: "#ba1c1c" }}
                              />
                            </button>
                          </div>
                          <div className="p-1">
                            <Link
                              className="btn btn-outline-dark"
                              to={`edit/${plant.id}`}
                            >
                              <FontAwesomeIcon icon={faPen} />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <Loading></Loading>
            )}
          </div>
        )}
      </div>

      <div className="d-flex justify-content-center my-2">
        <nav>
          <ul className="pagination">
            {Array.from(
              { length: Math.ceil(plants.length / plantsPerPage) },
              (_, index) => {
                const pageNumber = index + 1;
                return (
                  <li key={pageNumber} className="page-item">
                    <button
                      onClick={() => paginate(pageNumber)}
                      className="page-link"
                    >
                      {pageNumber}
                    </button>
                  </li>
                );
              }
            )}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default ListPlant;
