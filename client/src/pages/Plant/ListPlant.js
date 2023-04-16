import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons'
import { deletePlants, getPlants } from '../../axios/plantAxios'
import Loading from '../Loading'
import { imageUrl } from '../../config/config'

const ListPlant = () => {
  const [plants, setPlants] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [plantsPerPage] = useState(3)

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

  const navigate = useNavigate();

  const deleteHandler = (id) => {
    deletePlants(id)
    navigate('/plants')
  }

  const indexOfLastPlant = currentPage * plantsPerPage
  const indexOfFirstPlant = indexOfLastPlant - plantsPerPage
  const currentPlants = plants.slice(indexOfFirstPlant, indexOfLastPlant)
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <>
      <div className='mx-auto row'>
        <Link className='btn btn-outline-dark' to='/plants/add'>Add Plant <FontAwesomeIcon icon={faPlus} /></Link>
      </div>
      <div className="card-group">
        {
          currentPlants.length > 0 ?
            currentPlants.map(plant => {
              return (
                <div className="card mb-3" key={plant.id} >
                  <img src={plant.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{plant.name}</h5>
                    <p className="card-text">{plant.description}</p>
                    <p className="card-text"><small className="text-body-secondary">{plant.updatedAt}</small></p>
                    <div className='d-flex justify-content-center'>
                      <div className='p-1'>
                        <button className='btn btn-outline-dark' onClick={() => deleteHandler(+plant.id)}>
                          <FontAwesomeIcon icon={faTrash} style={{ color: "#ba1c1c" }} />
                        </button>
                      </div>
                      <div className='p-1'>
                        <Link className='btn btn-outline-dark' to={`edit/${plant.id}`}>
                          <FontAwesomeIcon icon={faPen} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }) : <Loading></Loading>
        }
      </div>
      <div className='d-flex justify-content-center'>
        <nav>
          <ul className='pagination'>
            {
              Array.from({ length: Math.ceil(plants.length / plantsPerPage) }, (_, index) => {
                const pageNumber = index + 1
                return (
                  <li key={pageNumber} className='page-item'>
                    <button onClick={() => paginate(pageNumber)} className='page-link'>
                      {pageNumber}
                    </button>
                  </li>
                )
              })
            }
          </ul>
        </nav>
      </div>
    </>
  )
}

export default ListPlant
