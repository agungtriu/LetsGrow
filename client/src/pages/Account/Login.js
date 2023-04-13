import React from 'react'
import { images } from '../../images'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <div className="position-absolute top-50 start-50 translate-middle">
        <div class="card mb-3">
          <div class="row g-0" >
            <div class="col-md-4">
              <img src={images.Home2} class="img-fluid rounded-start" />
            </div>
            <div class="col-md-8">
              <div class="form-floating mb-1">
                <input type="email" class="form-control" id="floatingInput" />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword"/>
                <label for="floatingPassword">Password</label>
              </div>
              <div className='mb-10 text-center'>
                <button class=" btn btn-outline-warning text-center" type="submit">Login</button>
              </div>
              <p className='text-center'>
                Don't have Account? : <Link className='' to='/users/register'>SignUp</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login