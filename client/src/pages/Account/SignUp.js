import React from 'react'
import { images } from '../../images'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <>
            <div className="position-absolute top-50 start-50 translate-middle">
                <div class="card mb-3">
                    <div class="row g-0" >
                        <div class="col-md-4">
                            <img src={images.Home1} class="img-fluid rounded-start" />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body mx-auto">
                                <h5 class="card-title text-center">Sign Up</h5>
                                <div class="form-floating mb-1">
                                    <input type="text" class="form-control" id="floatingInput"/>
                                    <label for="floatingInput">username</label>
                                </div>
                                <div class="form-floating mb-1">
                                    <input type="text" class="form-control" id="floatingInput"/>
                                    <label for="floatingInput">email</label>
                                </div>
                                <div class="form-floating mb-1">
                                    <input type="password" class="form-control" id="floatingInput"/>
                                    <label for="floatingInput">password</label>
                                </div>
                                <div class="form-floating mb-1">
                                    <input type="password" class="form-control" id="floatingInput"/>
                                    <label for="floatingInput">confirm</label>
                                </div>
                                <div className='mb-3 text-center'>
                                    <button class=" btn btn-sm btn-outline-warning text-center" type="submit">SignUp</button>
                                </div>
                            </div>
                            <p className='text-center'>
                                Already have Account? : <Link className='' to='/users/login'>Login</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp