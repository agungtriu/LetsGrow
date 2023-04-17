import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { addPlant } from '../../axios/plantAxios';
import Swal from "sweetalert2";

const AddPlant = () => {
  const [form, setForm] = useState({
    name: '',
    description: '',
    type: '',
    image: ''
  })
  const [file, setFile] = useState(null)



  const navigate = useNavigate()

  const submitHandler = () => {
    if (file !== null) {
      const fromData = new FormData();
      fromData.append("name", form.name)
      fromData.append("description", form.description)
      fromData.append("image", file)
      fromData.append("type", form.type)

      addPlant(fromData, (status) => {
        if (status) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your Plant has been saved',
            showConfirmButton: false,
            timer: 1500,
          })
          navigate(-1)
        }
        else {
        }
      })
    } else {
      Swal.fire("Plant Image", "cannot be empty", "error");
    }
  }
  console.log(form)
  return (
    <>
      <div className='bg-dark bg-opacity-10'>
        <h4 className=' bg-dark text-white text-center'>Add Plant</h4>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-6">
              <div className="bg-light p-3 rounded">
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" id="description" onChange={(e) => setForm({ ...form, description: e.target.value })}></textarea>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image</label>
                    <input type="file" className="form-control" id="image"
                      onChange={(e) => {
                        setFile(e.target.files[0])
                      }} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="type" className="form-label">Type</label>
                    <select className="form-control" id="type" onChange={(e) => setForm({ ...form, type: e.target.value })}>
                      <option value="type1">Indoor Plant</option>
                      <option value="type2">Outdoor Plant</option>
                      <option value="type3">Other</option>
                    </select>
                  </div>
                  <Link type="submit" className="btn btn-primary" onClick={() => submitHandler()}>Submit</Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>

  )
}

export default AddPlant