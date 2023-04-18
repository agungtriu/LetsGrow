import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTutorials } from "../../axios/tutorialAxios";
import Loading from "../dataEmpty";
import { imageUrl } from "../../config/config";
import { motion } from "framer-motion";
import ReactLoading from "react-loading";

const Tutorials = () => {
  const [tutorials, setTutorials] = useState([]);
  const [done, setDone] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [tutorialPerPage] = useState(3);

  useEffect(() => {
    getTutorials((result) => {
      setTutorials(result);
      setDone(true);
    });
  }, []);
  const navigation = useNavigate();
  const clickHandler = (id) => {
    navigation(`/tutorials/detail/${id}`);
  };
  const indexOfLastTutorial = currentPage * tutorialPerPage;
  const indexOfFirstTutorial = indexOfLastTutorial - tutorialPerPage;
  const currentTutorials = tutorials.slice(
    indexOfFirstTutorial,
    indexOfLastTutorial
  );
  const paginate = (num) => setCurrentPage(num);

  return (
    <>
      <div className="container mt-3 mb-3">
        <div className="row row-cols-2 row-cols-md-3 g-4" key={tutorials.id}>
          {!done ? (
            <ReactLoading
              className="position-absolute top-50 start-50 translate-middle"
              type={"spin"}
              color={"#000000"}
              height={100}
              width={100}
            />
          ) : currentTutorials.length > 0 ? (
            currentTutorials.map((tutorial) => {
              const truncatedDesc =
                tutorial.description.length > 100
                  ? tutorial.description.substring(0, 100) + "..."
                  : tutorial.description;
              return (
                <motion.div
                  onClick={() => clickHandler(tutorial.id)}
                  className="col"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="card h-100"
                    initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8 }}
                  >
                    <img
                      className="card-img-top"
                      src={`${imageUrl}${tutorial.image}`}
                      alt={tutorial.image}
                    />
                    <div className="card-body">
                      <h6 className="card-title">{tutorial.name}</h6>
                      <p className="card-text">{truncatedDesc}</p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })
          ) : (
            <Loading />
          )}
        </div>
        <div className=" d-flex justify-content-center my-2">
          <nav aria-label="Page navigation example">
            <motion.ul className="pagination" whileHover={{ scale: 1.2 }}>
              {Array.from(
                { length: Math.ceil(tutorials.length / tutorialPerPage) },
                (_, index) => {
                  const pageNumber = index + 1;
                  return (
                    <>
                      <li key={pageNumber} className="page-item">
                        <button
                          onClick={() => paginate(pageNumber)}
                          className="page-link"
                        >
                          {pageNumber}
                        </button>
                      </li>
                    </>
                  );
                }
              )}
            </motion.ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Tutorials;
