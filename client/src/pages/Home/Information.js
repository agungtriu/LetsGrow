import React from 'react'
import { Link } from 'react-router-dom'

const Information = () => {
    return (
        <>
            <div className="card bg-dark bg-opacity-10 mb-3">
                <div className="card-header">Informasi Website</div>
                <div className="card-body">
                    <p className="card-text">Ikuti kami di sosial media:</p>
                    <Link to={''} className="btn btn-primary"><i className="fab fa-facebook fa-fw"></i> Facebook</Link>
                    <Link to={''} className="btn btn-info"><i className="fab fa-twitter fa-fw"></i> Twitter</Link>
                    <Link to={''} className="btn btn-danger"><i className="fab fa-youtube fa-fw"></i> YouTube</Link>
                </div>
                <ul className="d-flex align-items-end">
                    <li className="list-group-item">Telephone: (123) 456-7890||</li>
                    <li className="list-group-item">Email: info@website.com||</li>
                    <li className="list-group-item">Alamat: Jl. Sudirman No. 123, Jakarta</li>
                </ul>
            </div>

        </>

    )
}

export default Information