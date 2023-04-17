import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons'
import { deletePlant, getPlants } from '../../axios/plantAxios'
import Loading from '../Loading'
import { imageUrl } from '../../config/config'
import { formatDate } from '../../helpers/timeSince'

const ListPlant = () => {
  const [plants, setPlants] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [plantsPerPage] = useState(3)
  const location = useLocation()


  const getAll = () => {
    getPlants(result => {
      setPlants(result.map(plant => ({
        id: +plant.id,
        name: plant.name,
        description: plant.description,
        image: `${imageUrl}${plant.image}`,
        type: plant.type,
        updatedAt: formatDate(plant.updatedAt)
      })))
    })
  }

  useEffect(() => {
    getAll()
  },[location.key])

  const navigate = useNavigate();

  const deleteHandler = (id) => {
    deletePlant(id, (status) => {
      if (status) {
        if (plants.length === indexOfFirstPlant + 1) {
          setCurrentPage(currentPage-1)
        }
        navigate('/plants')
      }
    })
  }

  const indexOfLastPlant = currentPage * plantsPerPage
  const indexOfFirstPlant = indexOfLastPlant - plantsPerPage
  const currentPlants = plants.slice(indexOfFirstPlant, indexOfLastPlant)
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <>
      <div className='container'>
        <div className='mx-auto row'>
          <Link className='btn btn-outline-dark' to='/plants/add'>Add Plant <FontAwesomeIcon icon={faPlus} /></Link>
        </div>
       <div className="row row-cols-3">
          {
            currentPlants.length > 0 ?
              currentPlants.map(plant => {
                const truncatedDesc =
                plant.description.length > 100
                  ? plant.description.substring(0, 100) + "..."
                  : plant.description;
                return (
                  <div className="card h-100 px-3 " key={plant.id} >
                    <div className='img-container rounded'>
                    <img src={plant.image} className="img-fit rounded w-100" alt="..." />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{plant.name}</h5>
                      <p className="card-text">{truncatedDesc}</p>
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
