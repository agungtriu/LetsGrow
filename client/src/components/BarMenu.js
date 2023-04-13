import React from 'react'
import { Link } from 'react-router-dom'

const BarMenu = () => {
  return (
    <>
      <nav className=" navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
              <Link className="nav-link active" to='/plants'>Plants</Link>
              <Link className="nav-link active" to='/users'>Profile</Link>
            </div>
          </div>
          <div className='d-flex'>
            <Link className='btn btn-outline-dark' to='/users/login'>Login</Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default BarMenu