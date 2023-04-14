import React from 'react'
import { images } from '../../images'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons'

const ListPlant = () => {
  return (
    <>
      <div className='mx-auto row'>
        <Link className='btn btn-outline-dark' to='/plants/add'>Add Plant <FontAwesomeIcon icon={faPlus} /></Link>
      </div>
      <div className="card mb-3" >
        <div className="row g-0">
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src={images.Melati} className="card-img-top" alt="..." />
            </div>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
              <div className='row row-cols-auto d-flex justify-content-center'>
                <div className='col'>
                  <div className="input-group flex-nowrap">
                    <Link className='btn btn-outline-dark' to='/plants/delete/:plantId'><FontAwesomeIcon icon={faTrash} style={{ color: "#ba1c1c", }} /></Link>
                  </div>
                </div>
                <div className='col'>
                  <div className="input-group flex-nowrap">
                    <Link className='btn btn-outline-dark' to='/plants/edit/:plantId'><FontAwesomeIcon icon={faPen} /></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ListPlant