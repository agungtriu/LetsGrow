import React from 'react'
import { Link } from 'react-router-dom'
// import { images } from '../images'

const BarMenu = () => {
  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/"><img src={images.logo} className='d-inline-block align-top' style={{width: "", height: "30"}} alt=''></img></Link> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/plants">Plants</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/users">Profile</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/tutorials">All Tutorial</Link>
            </li>
          </ul>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="btn btn-sm btn-outline-dark" to="/users/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default BarMenu