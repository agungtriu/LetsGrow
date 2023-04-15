import React, { useEffect, useState } from 'react'
import { getTutorials } from '../../axios/tutorialAxios'
import { images } from '../../images'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrash, faPen } from '@fortawesome/free-solid-svg-icons'
import Loading from '../Loading'

const ListTutorial = () => {
    const [tutorials, setTutorials] = useState([])

    useEffect(() => {
        getTutorials(result => setTutorials(result))
    }, [])
    return (
        <>
            <div className='mx-auto row'>
                <Link className='btn btn-outline-dark' to='/tutorials/add'>Add Tutorial <FontAwesomeIcon icon={faPlus} /></Link>
            </div>
            {
                tutorials.length > 0 ?
                    tutorials.map((tutorial) => {
                        return (
                            <div className="card">
                                <div className="row g-0">
                                    <div className="col-md-3">
                                        <img src={tutorial.image} className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-9">
                                        <div className="card-body">
                                            <h5 className="card-title">{tutorial.name}</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">{tutorial.userId}</h6>
                                            <p className="card-text overflow-hidden" style={{ maxHeight: "4.5em" }}>
                                                {tutorial.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='row row-cols-auto d-flex justify-content-center'>
                                    <div className='col'>
                                        <div className="input-group flex-nowrap">
                                            <button className='btn btn-outline-dark'><FontAwesomeIcon icon={faTrash} style={{ color: "#ba1c1c", }} /></button>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className="input-group flex-nowrap">
                                            <Link className='btn btn-outline-dark' to={`/tutorials/edit/:tutorialId`}><FontAwesomeIcon icon={faPen} /></Link>
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

export default ListTutorial