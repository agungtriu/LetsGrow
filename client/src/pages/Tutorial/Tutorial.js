import React from 'react'
import { images } from '../../images'
import { Link } from 'react-router-dom'

const Tutorial = () => {
  return (
    <>
      <h4 className=' bg-dark text-white text-center'>Tutorial</h4>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <img src={images.Corn} className="card-img-top" alt="Corn" />
            <div className="card-body">
              <Link to='steps/:stepId'>
                <h5 className="card-title">Name</h5>
              </Link>
              <p className="card-text">Description</p>
              <p className="card-text">
                <small className="text-muted">Username</small>
              </p>
              <p className="card-text">
                <small className="text-muted">Plant Name</small>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={images.Melati} className="card-img-top" alt="Sunflower" />
            <div className="card-body">
              <h5 className="card-title">Name</h5>
              <p className="card-text">Description</p>
              <p className="card-text">
                <small className="text-muted">Username</small>
              </p>
              <p className="card-text">
                <small className="text-muted">Plant Name</small>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={images.anggrek} className="card-img-top" alt="Rose" />
            <div className="card-body">
              <h5 className="card-title">Name</h5>
              <p className="card-text">Description</p>
              <p className="card-text">
                <small className="text-muted">Username</small>
              </p>
              <p className="card-text">
                <small className="text-muted">Plant Name</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Tutorial