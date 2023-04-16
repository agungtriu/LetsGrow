import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import { deleteSteps } from "../../axios/stepAxios";
import { imageUrl } from "../../config/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Steps = (props) => {
  const navigation = useNavigate();
  const deleteHandler = (id) => {
    deleteSteps(id, (status) => {
      if (status) {
        navigation("/tutorials/detail/" + props.tutorialId);
      }
    });
  };
  return (
    <>
      {props.steps.length > 0
        ? props.steps.map((step, index) => {
            return (
              <div key={step.id}>
                <div className="card mb-2 position-relative">
                  <div className="row g-0">
                    <div className="col-md-4">
                        <img
                        src={imageUrl + step.image}
                        className="img-fluid rounded-start"
                        alt={step.image}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <p className="card-text">
                          {index + 1 + ". " + step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  {+props.userId === +localStorage.id ? (
                    <span className="position-absolute top-0 end-0">
                      <div className="dropdown m-2">
                        <BsInfoCircleFill />
                        <ul className="dropdown-menu">
                          <li>
                            <Link
                              className="dropdown-item "
                              onClick={() => deleteHandler(+step.id)}
                            >
                              <AiFillDelete />
                              <span className="m-3">Delete</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to={`/steps/edit/${step.id}`}
                            >
                              <AiFillEdit />
                              <span className="ms-3">Edit</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </span>
                  ) : null}
                </div>
              </div>
            );
          })
        : null}
      {+props.userId === +localStorage.id ? (
        <div className="mx-auto row">
          <Link
            className="btn btn-outline-dark"
            to={`/steps/add/${props.tutorialId}`}
          >
            Add Step <FontAwesomeIcon icon={faPlus} />
          </Link>
          <div className="mx-auto row"></div>
        </div>
      ) : null}
    </>
  );
};

export default Steps;
