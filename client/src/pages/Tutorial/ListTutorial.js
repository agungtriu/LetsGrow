import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Loading from "../Loading";
import { imageUrl } from "../../config/config";

const ListTutorial = (props) => {
  const navigation = useNavigate();
  const clickHandler = (id) => {
    navigation(`/tutorials/detail/${id}`);
  };
  return (
    <>
      <div className="mx-auto row">
        <Link className="btn btn-outline-dark" to="/tutorials/add">
          Add Tutorial <FontAwesomeIcon icon={faPlus} />
        </Link>
      </div>
      <div className="mt-3 mb-3">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {props.tutorials.length > 0 ? (
            props.tutorials.map((tutorial) => {
              const truncatedDesc =
                tutorial.description.length > 100
                  ? tutorial.description.substring(0, 100) + "..."
                  : tutorial.description;
              return (
                <div
                  onClick={() => clickHandler(tutorial.id)}
                  className="col mb-4"
                  key={tutorial.id}
                >
                  <div className="card h-100 border-0">
                    <img
                      className="card-img-top h-75"
                      src={`${imageUrl}${tutorial.image}`}
                      alt={tutorial.image}
                    />
                    <div className="card-body">
                      <h6 className="card-title">{tutorial.name}</h6>
                      <p className="card-text">{truncatedDesc}</p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <Loading></Loading>
          )}
        </div>
      </div>

    </>
  );
};

export default ListTutorial;
