import React from 'react'
import { images } from '../../images'
import Tutorial from '../Tutorial/Tutorial'
import Information from './Information'

const HomePage = () => {
  return (
    <>
      <div className=" container-fluid">
        <img src={images.Home1} className="card-img " alt="..." style={{
          width: "100%",
          height: "600px",
        }} />
        <div className="card-img-overlay text-center" style={{
          position: "absolute",
          top: "45%", left: "50%",
          transform: "translate(-50%, -50%)"
        }}>
          <div className='container bg-black text-black bg-opacity-10'>
            <div className='badge bg-dark text-wrap bg-opacity-75' style={{ width: '15rem' }}>
              <h5>LetsGrow</h5>
            </div>
            <p className="card-text ">Identify your Favorite Plants</p>
            <input class="form-control pd-3 me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-light" type="submit">Search</button>
          </div>
        </div>
        <Tutorial></Tutorial>
        <Information></Information>
      </div>
    </>
  )
}

export default HomePage