import React from 'react'
import { images } from '../../images'
import { Link } from 'react-router-dom'

const ListComment = () => {
  return (
    <>
      <div className="scrollspy-example bg-black bg-opacity-10 p-4 my-2 rounded-2" tabIndex="0">
        <div className="d-flex align-items-start">
          <img src={images.avatar} style={{ width: "5%", borderRadius: "50%" }} alt='' />
          <div className=" d-flex flex-grow-1 ">
            <h6 className='me-2'>UserName: </h6>
            <p>
              "Wow, tumbuhan-tumbuhan ini sangat menakjubkan! Mereka memberikan banyak manfaat bagi kita dan lingkungan kita. Mari kita jaga kelestariannya dengan baik."
            </p>
            <div className='col me-2'>
              <Link className='btn btn-sm btn-outline-warning' to='/comments/delete/:commentId'>Del</Link>
            </div>
            <div className='col me-1'>
              <Link className='btn btn-sm btn-outline-info' to='/comments/edit/commentId'>Edit</Link>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Add your comments'></textarea>
          <button type="submit" className="btn btn-warning mb-3 my-2">Submit</button>
        </div>
      </div>
    </>
  )
}

export default ListComment