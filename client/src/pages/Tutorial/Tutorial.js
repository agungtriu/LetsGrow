/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import ListComment from "../Comment/ListComment";
import { deleteTutorial, getTutorialById } from "../../axios/tutorialAxios";
import { imageUrl } from "../../config/config";
import Steps from "../Step/Steps";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import { addComment } from "../../axios/commentAxios";

const Tutorial = () => {
  const [tutorial, setTutorial] = useState({
    id: 0,
    name: "",
    image: "",
    description: "",
    steps: [],
    comments: [],
    userId: 0,
  });
  const [comment, setComment] = useState({
    text: "",
    tutorialId: 0,
  });

  const params = useParams();
  const getTutorial = () => {
    const { tutorialId } = params;
    getTutorialById(tutorialId, (result) => {
      setTutorial({
        id: result.id,
        name: result.name,
        image: result.image,
        description: result.description,
        steps: result.steps,
        comments: result.comments,
        userId: result.userId,
      });
      setComment({
        ...comment,
        tutorialId: result.id,
      });
    });
  };

  const navigation = useNavigate();
  const location = useLocation();

  const deleteHandler = (id) => {
    deleteTutorial(id, (status) => {
      if (status) {
        navigation("/");
      }
    });
  };

  const submitHandler = () => {
    setComment({ ...comment, tutorialId: tutorial.id });
    addComment(comment, (status) => {
      if (status) {
        setComment({ text: "", tutorialId: 0 });
        navigation(`/tutorials/detail/${tutorial.id}`);
      }
    });
  };

  useEffect(() => {
    getTutorial();
  }, [location.key]);

  return (
    <>
      <div className="container">
        <div className="card mx-auto mt-3" style={{ width: "30%" }}>
          <img
            src={imageUrl + tutorial.image}
            className="card-img "
            alt={tutorial.image}
          />
        </div>
        <div className="mt-3 position-relative">
          <h5 className="text-center mt-3">{tutorial.name}</h5>
          <p className="m-3">{tutorial.description}</p>

          {+tutorial.userId === +localStorage.id ? (
            <span className="position-absolute top-0 end-0">
              <div className="dropdown m-2">
                <BsInfoCircleFill />
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item "
                      onClick={() => deleteHandler(+tutorial.id)}
                    >
                      <AiFillDelete />
                      <span className="m-3">Delete</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to={`/tutorials/edit/${tutorial.id}`}
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
        <div className="mt-5">
          <Steps
            steps={tutorial.steps}
            userId={tutorial.userId}
            tutorialId={tutorial.id}
          ></Steps>
        </div>
        <div
          className="scrollspy-example bg-black bg-opacity-10 p-4 my-2 rounded-2 mt-5"
          tabIndex="0"
        >
          <h5>Comments</h5>
          <ListComment
            comments={tutorial.comments}
            userId={tutorial.userId}
            tutorialId={tutorial.id}
          ></ListComment>
          {localStorage.length > 0 ? (
            <div>
              <textarea
                value={comment.text}
                onChange={(e) =>
                  setComment({ ...comment, text: e.target.value })
                }
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Add your comments"
              ></textarea>
              <button
                onClick={() => submitHandler()}
                type="submit"
                className="btn btn-warning mb-3 my-2"
              >
                Submit
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Tutorial;
