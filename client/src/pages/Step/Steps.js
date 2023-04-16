import React from 'react'
import { images } from '../../images'
import { Link } from 'react-router-dom'
import ListComment from '../Comment/ListComment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faTrash, faPen, faPlus } from '@fortawesome/free-solid-svg-icons'

const Steps = () => {
  return (
    <>
      <div className='container-fluid'>
        <Link className='btn btn-outline-dark mb-2' to='/steps/add'>Add Plant <FontAwesomeIcon icon={faPlus} /></Link>
      </div>
      <div className='container-sm '>
        <div className='row'>
          <div className='col card p-0'>
            <img src={images.Corn} className="rounded float-start" alt="..." style={{ width: "100%" }} />
          </div>
          <div className="card me-2" style={{ width: "36rem" }}>
            <div className='d-flex justify-content-end'>
              <Link className='btn btn-sm btn-outline-dark me-2' to='/steps/delete/:stepId'><FontAwesomeIcon icon={faTrash} style={{ color: "#e60505", }} /></Link>
              <Link className='btn btn-sm btn-outline-dark ' to='/steps/edit/:stepId'><FontAwesomeIcon icon={faPen} /></Link>
            </div>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <button className="btn btn-light"><FontAwesomeIcon icon={faHeart} style={{ color: "#e60505", }} /></button>
            </div>
          </div>
        </div>
        <ListComment></ListComment>
      </div>
    </>
  )
}

export default Steps