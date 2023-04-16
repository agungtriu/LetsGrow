import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTutorials } from "../../axios/tutorialAxios";
import Loading from "../Loading";
import { imageUrl } from "../../config/config";

const Tutorials = () => {
  const [tutorials, setTutorials] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  const [tutorialPerPage] = useState(3)

  useEffect(() => {
    getTutorials((result) => setTutorials(result));
  }, []);
  const navigation = useNavigate();
  const clickHandler = (id) => {
    navigation(`/tutorials/detail/${id}`);
  };
  const indexOfLastTutorial = currentPage * tutorialPerPage
  const indexOfFirstTutorial = indexOfLastTutorial - tutorialPerPage
  const currentTutorials = tutorials.slice(indexOfFirstTutorial, indexOfLastTutorial)
  const paginate = (num) => setCurrentPage(num)
  return (
    <>
      <div className="container mt-2 mb-2">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {currentTutorials.length > 0 ? (
            currentTutorials.map((tutorial) => {
              const truncatedDesc =
                tutorial.description.length > 100
                  ? tutorial.description.substring(0, 100) + "..."
                  : tutorial.description;
              return (
                <div
                  onClick={() => clickHandler(tutorial.id)}
                  className="col"
                  key={tutorial.id}
                >
                  <div className="card h-100">
                    <img
                      className="card-img-top"
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
            <Loading />
          )}
        </div>
        <div className="d-flex justify-content-center">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              {
                Array.from({ length: Math.ceil(tutorials.length / tutorialPerPage) }, (_, index) => {
                  const pageNumber = index + 1
                  return (
                    <>
                      {/* <li className="page-item"><a className="page-link">Previous</a></li> */}
                      <li key={pageNumber} className="page-item"><button onClick={() => paginate(pageNumber)} className="page-link">{pageNumber}</button></li>
                      {/* <li className="page-item" href=''><a className="page-link">Next</a></li> */}
                    </>
                  )
                })
              }
            </ul>
          </nav>
        </div>
      </div>

    </>
  );
};

export default Tutorials;
