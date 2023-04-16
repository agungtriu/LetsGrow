import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons'
import { deletePlant, getPlants } from '../../axios/plantAxios'
import Loading from '../Loading'
import { imageUrl } from '../../config/config'

const ListPlant = () => {
  const [plants, setPlants] = useState([])

  const getAll = () => {
    getPlants(result => {
      setPlants(result.map(plant => ({
        id: +plant.id,
        name: plant.name,
        description: plant.description,
        image: `${imageUrl}${plant.image}`,
        type: plant.type,
        updatedAt: plant.updatedAt
      })))
    })
  }


  useEffect(() => {
    getAll()
  }, [])
  // const cek =plants.map(plant => {
  //   return plant.id
  // })
  // console.log(typeof(+cek))

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
            return (
              <div className="card mb-3" key={plant.id} >
                <div className="row g-0">
                  <div className="col-md-4">
                    <div className="card" style={{ width: "100%" }}>
                      <img src={plant.image} className="card-img-left" alt="..." />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{plant.name}</h5>
                      <p className="card-text">{plant.description}</p>
                      <h6>{plant.type}</h6>
                      <p className="card-text"><small className="text-body-secondary">{plant.updatedAt}</small></p>
                      <div className='row row-cols-auto d-flex justify-content-center'>
                        <div className='col'>
                          <div className="input-group flex-nowrap">
                            <button className='btn btn-outline-dark' onClick={() => deleteHandler(+plant.id)}>
                              <FontAwesomeIcon icon={faTrash} style={{ color: "#ba1c1c" }} />
                            </button>
                          </div>
                        </div>
                        <div className='col'>
                          <div className="input-group flex-nowrap">
                            <Link className='btn btn-outline-dark' to={`edit/${plant.id}`}>
                              <FontAwesomeIcon icon={faPen} /> {console.log(typeof(plant.id))}
                            </Link>
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