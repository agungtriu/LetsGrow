import React, { useEffect, useState } from 'react'
import { editPlants, getPlantsById } from '../../axios/plantAxios'
import { useNavigate, useParams } from 'react-router-dom'

const EditPlant = () => {
  const [form, setForm] = useState({
    name: '',
    description: '',
    image: null,
    type: ''
  })

  const navigate = useNavigate()
  const params = useParams()

  const getPlantKey = () => {
    const { id } = params
    getPlantsById(+id, result => {
        setForm({
          name: result.name,
          description: result.description,
          image: result.image,
          type: result.type
        })

    })

}

  useEffect(() => {
    getPlantKey()
  })

  const submitHandler = () => {
    editPlants(+params.id,form)
    navigate('/plants')
  }


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
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name"/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" id="description"></textarea>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image</label>
                    <input type="file" className="form-control" id="image" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="type" className="form-label">Type</label>
                    <select className="form-control" id="type">
                      <option value="type1">Indoor Plant</option>
                      <option value="type2">Outdoor Plant</option>
                      <option value="type3">Other</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-primary" onClick={() => submitHandler()}>Submit</button>
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