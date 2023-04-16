import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Loading from "../Loading";
import { imageUrl } from "../../config/config";
import { motion } from "framer-motion";

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
        <motion.div className="row row-cols-1 row-cols-md-3 g-4" drag="x" dragConstraints={{ left: -1000, right: 1000 }} dragElastic={0.5}>
          {props.tutorials.length > 0 ? (
            props.tutorials.map((tutorial) => {
              const truncatedDesc =
                tutorial.description.length > 100
                  ? tutorial.description.substring(0, 100) + "..."
                  : tutorial.description;
              return (
                <motion.div
                  onClick={() => clickHandler(tutorial.id)}
                  className="col mb-4"
                  key={tutorial.id}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="card h-100 border-0">
                    <motion.img
                      className="card-img-top h-75"
                      src={`${imageUrl}${tutorial.image}`}
                      alt={tutorial.image}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8 }}
                    />
                    <div className="card-body">
                      <h6 className="card-title">{tutorial.name}</h6>
                      <p className="card-text">{truncatedDesc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })
          ) : (
            <Loading></Loading>
          )}
        </motion.div>
      </div>
    </>
  );
};

export default ListTutorial;
