import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTutorials } from "../../axios/tutorialAxios";
import Loading from "../Loading";
import { imageUrl } from "../../config/config";

const Tutorials = () => {
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    getTutorials((result) => setTutorials(result));
  }, []);
  const navigation = useNavigate();
  const clickHandler = (id) => {
    navigation(`/tutorials/detail/${id}`);
  };
  return (
    <>
      <div className="container mt-3 mb-3">
        <div className="row">
          {tutorials.length > 0 ? (
            tutorials.map((tutorial) => {
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

export default Tutorials;
