import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTutorials } from "../../axios/tutorialAxios";
import Loading from "../Loading";
import { imageUrl } from "../../config/config";
import { motion } from "framer-motion";

const Tutorials = () => {
  const [tutorials, setTutorials] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [tutorialPerPage] = useState(3);

  useEffect(() => {
    getTutorials((result) => setTutorials(result));
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

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <div className="container mt-2 mb-2">
        <motion.div
          className="row row-cols-2 row-cols-md-3 g-4"
          key={tutorials.id}
          animate={{ x: [null, 100, 0] }}
          transition={{ ease: "easeOut", duration: 2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
          }}
        >
          {currentTutorials.length > 0 ? (
            currentTutorials.map((tutorial) => {
              const truncatedDesc =
                tutorial.description.length > 100
                  ? tutorial.description.substring(0, 100) + "..."
                  : tutorial.description;
              return (
                <motion.div
                  onClick={() => clickHandler(tutorial.id)}
                  className="col"
                  variants={variants}
                  key={tutorial.id}
                >
                  <motion.div
                    className="card h-100"
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.img
                      className="card-img-top"
                      src={`${imageUrl}${tutorial.image}`}
                      alt={tutorial.image}
                      initial={{ opacity: 1 }}
                      animate={{ y: [null, 100, 0] }}
                      transition={{ duration: 1 }}
                    />
                    <div className="card-body">
                      <motion.h6 className="card-title" variants={variants}>
                        {tutorial.name}
                      </motion.h6>
                      <motion.p className="card-text" variants={variants}>
                        {truncatedDesc}
                      </motion.p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })
          ) : (
            <Loading/>
          )}
        </motion.div>
        <div className=" d-flex justify-content-center">
          <nav aria-label="Page navigation example">
            <motion.ul 
            className="pagination"
            whileHover={{ scale: 1.2}}
            >
              {
                Array.from({ length: Math.ceil(tutorials.length / tutorialPerPage) }, (_, index) => {
                  const pageNumber = index + 1
                  return (
                    <>
                      <li key={pageNumber} className="page-item"><button 
                      onClick={() => paginate(pageNumber)} 
                      className="page-link">{pageNumber}</button></li>
                    </>
                  )
                })
              }
            </motion.ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Tutorials;
