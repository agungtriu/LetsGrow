import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getTutorials } from '../../axios/tutorialAxios'
import Loading from '../Loading'
// import { imageUrl } from '../../config/config'

const Tutorial = () => {
  const [tutorials, setTutorials] = useState([])

  useEffect(() => {
    getTutorials(result => setTutorials(result))
  }, [])

  return (
    <>

      <h4 className=' bg-dark text-white text-center'>Tutorial</h4>
      {
        tutorials.length > 0 ?
          tutorials.map((tutorial) => {
            return (
              <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                  <div className="card h-100">
                    <img src={tutorial.image} className="card-img-top" alt="" />
                    <div className="card-body">
                      <Link to='steps/:stepId'>
                        <h5 className="card-title">{tutorial.name}</h5>
                      </Link>
                      <p className="card-text">{tutorial.description}</p>
                      <p className="card-text">
                        <small className="text-muted">{tutorial.userId}</small>
                      </p>
                      <p className="card-text">
                        <small className="text-muted">{tutorial.plantId}</small>
                      </p>
                    </div>
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