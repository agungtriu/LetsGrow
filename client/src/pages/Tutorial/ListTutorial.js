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
        <div className="row">
          {props.tutorials.length > 0 ? (
            props.tutorials.map((tutorial) => {
              const truncatedDesc =
                tutorial.description.length > 100
                  ? tutorial.description.substring(0, 100) + "..."
                  : tutorial.description;
              return (
                <div
                  onClick={() => clickHandler(tutorial.id)}
                  className="col-md-4 mb-4"
                  style={{ width: "20%" }}
                  key={tutorial.id}
                >
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={`${imageUrl}${tutorial.image}`}
                      alt={tutorial.image}
                    />
                    <div className="card-body">
                      <h6>{tutorial.name}</h6>
                      <small>{truncatedDesc}</small>
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
