import React from 'react'

const EditPlant = () => {
  return (
    <>
      <div className='bg-dark bg-opacity-10'>
        <h4 className=' bg-dark text-white text-center'>Edit Plant</h4>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-6">
              <div className="bg-light p-3 rounded">
                <form>
                  <div className="mb-3">
                    <label for="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" />
                  </div>
                  <div className="mb-3">
                    <label for="description" className="form-label">Description</label>
                    <textarea className="form-control" id="description"></textarea>
                  </div>
                  <div className="mb-3">
                    <label for="image" className="form-label">Image</label>
                    <input type="file" className="form-control" id="image" />
                  </div>
                  <div className="mb-3">
                    <label for="type" className="form-label">Type</label>
                    <select className="form-control" id="type">
                      <option value="type1">Type 1</option>
                      <option value="type2">Type 2</option>
                      <option value="type3">Type 3</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default EditPlant