import React from 'react'

const EditStep = () => {
  return (
    <>
      <div className='bg-dark bg-opacity-10'>
        <h4 className=' bg-dark text-white text-center'>Edit Steps</h4>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-6">
              <form style={{ background: '#f2f2f2', padding: '20px' }}>
                <div className="mb-3">
                  <label htmlFor="image">Image:</label>
                  <input type="file" className="form-control" id="image" />
                </div>
                <div className="mb-3">
                  <label htmlFor="description">Description:</label>
                  <textarea className="form-control" id="description" rows="3"></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="TutorialName">Tutorial Name:</label>
                  <input type="text" className="form-control" id="TutorialName" />
                </div>
                <div className="mb-3">
                  <label htmlFor="UserID">User ID:</label>
                  <input type="text" className="form-control" id="UserID" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditStep