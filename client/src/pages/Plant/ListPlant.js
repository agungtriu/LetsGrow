import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons'
import { deletePlant, getPlants } from '../../axios/plantAxios'
import Loading from '../Loading'

const ListPlant = () => {
  const [plants, setPlants] = useState([])

  
  useEffect(() => {
    getPlants((result) => setPlants(result))
  })
  
  const navigate = useNavigate();
  const deleteHandler = (id) => {
    deletePlant(id)
    navigate('/plants')
  }

  return (

    <>

      <div className='mx-auto row'>
        <Link className='btn btn-outline-dark' to='/plants/add'>Add Plant <FontAwesomeIcon icon={faPlus} /></Link>
      </div>
      {
        plants.length > 0 ?
          plants.map(plant => {
            const {id, name, description, type, image, updatedAt} = plant
            return (
              <div className="card mb-3" key={id} >
                <div className="row g-0">
                  <div className="col-md-4">
                    <div className="card" style={{ width: "18rem" }}>
                      <img src={image} className="card-img-top" alt="..." />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{name}</h5>
                      <p className="card-text">{description}</p>
                      <h6>{type}</h6>
                      <p className="card-text"><small className="text-body-secondary">{updatedAt}</small></p>
                      <div className='row row-cols-auto d-flex justify-content-center'>
                        <div className='col'>
                          <div className="input-group flex-nowrap">
                            <button className='btn btn-outline-dark' onClick={() => deleteHandler(+id)}><FontAwesomeIcon icon={faTrash} style={{ color: "#ba1c1c", }} /></button>
                          </div>
                        </div>
                        <div className='col'>
                          <div className="input-group flex-nowrap">
                            <Link className='btn btn-outline-dark' to={`/plants/edit/:${+id}`}><FontAwesomeIcon icon={faPen} /></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )

          }) : <Loading></Loading>
      }

    </>
  )
}

export default ListPlant