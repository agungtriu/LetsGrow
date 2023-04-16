import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getTutorials } from '../../axios/tutorialAxios'
import Loading from '../Loading'
import { imageUrl } from '../../config/config'
// import { imageUrl } from '../../config/config'

const Tutorial = () => {
  const [tutorials, setTutorials] = useState([])

  const getAll = () => {
    getTutorials(result => {
      setTutorials(result.map(tutorial => ({
        id: tutorial.id,
        name: tutorial.name,
        description: tutorial.description,
        image: `${imageUrl}${tutorial.image}`,
        userId: tutorial.userId,
        plantId: tutorial.plantId
      })))
    })
  }

  useEffect(() => {
    getAll()
  }, [])

  return (
    <>

      <h4 className=' bg-dark text-white text-center'>Tutorial</h4>
      {
        tutorials.length > 0 ?
          tutorials.map((tutorial) => {
            const truncatedDesc = tutorial.description.length > 100 ? tutorial.description.substring(0, 100) + "..." : tutorial.description;
            return (
              <div className="col mb-4" key={tutorial.id}>
                <div className="card border-0 h-100">
                  <div className="position-relative">
                    <img src={tutorial.image} className="card-img-top rounded-top" alt="img" style={{ height: "12rem", objectFit: "cover" }} />
                    <div className="overlay rounded-top"></div>
                  </div>
                  <div className="card-body">
                    <Link to={`/steps/${tutorial.stepId}`}>
                      <h5 className="card-title">{tutorial.name}</h5>
                    </Link>
                    <p className="card-text">{truncatedDesc}</p>
                    {tutorial.description.length > 100 && (
                      <Link to={`/steps${tutorial.stepId}`}>
                        <button className="btn btn-sm btn-outline-secondary">Lihat Selengkapnya</button>
                      </Link>
                    )}
                    <p className="card-text">
                      <small className="text-muted">{tutorial.userId}</small>
                    </p>
                    <p className="card-text">
                      <small className="text-muted">{tutorial.plantId}</small>
                    </p>
                  </div>
                </div>
              </div>


            )
          }) : <Loading></Loading>
      }
    </>

  )
}

export default Tutorial