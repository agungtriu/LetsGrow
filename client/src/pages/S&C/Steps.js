import React from 'react'
import { images } from '../../images'
import { Link, Outlet } from 'react-router-dom'
import ListComment from './ListComment'

const Steps = () => {
  return (
    <>
      <div className='container-sm'>
        <div className='col-sm-6'>
          <img src={images.Corn} class="rounded float-start" alt="..." style={{ width: "62%" }} />
        </div>
          <div class="card me-2">
            <h5 class="card-header">Date</h5>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <button class="btn btn-warning">Like</button>
            </div>
          </div>
        <ListComment></ListComment>
      </div>
    </>
  )
}

export default Steps