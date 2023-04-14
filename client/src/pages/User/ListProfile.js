import React from 'react'
import { images } from '../../images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faKey, faUser, faUserFriends, faPhone, faAddressBook,faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const ListProfile = () => {
  return (
    <>
      <div className='container'>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <div className="card">
                <img src={images.avatar} className="rounded-start" alt="..." />
                <div className="card-body">
                  <h5 className="text-center">Username</h5>
                  <div className='row row-cols-auto d-flex justify-content-center'>
                    <div className='col'>
                      <div class="input-group flex-nowrap">
                        <Link className='btn btn-outline-dark' to='/users/edit/profile'><FontAwesomeIcon icon={faPen} style={{ color: "#30c0af", }} /></Link>
                      </div>
                    </div>
                    <div className='col'>
                      <div class="input-group flex-nowrap">
                        <Link className='btn btn-outline-dark' to='/users/edit/password'><FontAwesomeIcon icon={faKey} /></Link>
                      </div>
                    </div>
                    <div className='col'>
                      <div class="input-group flex-nowrap">
                        <Link className='btn btn-outline-dark' to='/users/edit/avatar'><FontAwesomeIcon icon={faUser} style={{ color: "#ba1c1c", }} /></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Information</h5>
                <div className='container text center'>
                  <div className='row row-cols-2'>
                    <div className='col my-5'>
                      <label>Name</label>
                      <div class="input-group flex-nowrap">
                        <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faUserFriends} /></span>
                        <input type="text" class="form-control" placeholder="Name" />
                      </div>
                    </div>
                    <div className='col my-5'>
                      <label>Phone</label>
                      <div class="input-group flex-nowrap">
                        <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> </span>
                        <input type="text" class="form-control" placeholder="Phone" />
                      </div>
                    </div>
                    <div className='col my-5'>
                      <label>Address</label>
                      <div class="input-group flex-nowrap">
                        <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faAddressBook}></FontAwesomeIcon></span>
                        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
                      </div>
                    </div>
                    <div className='col my-5'>
                      <label>Email</label>
                      <div class="input-group flex-nowrap">
                        <span class="input-group-text" id="addon-wrapping"><FontAwesomeIcon icon={faMailBulk}></FontAwesomeIcon></span>
                        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
                      </div>
                    </div>
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

export default ListProfile