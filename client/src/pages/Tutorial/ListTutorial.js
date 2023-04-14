import React from 'react'
import { images } from '../../images'

const ListTutorial = () => {
    return (
        <>
            <div className="card">
                <div className="row g-0">
                    <div className="col-md-3">
                        <img src={images.Corn} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-9">
                        <div className="card-body">
                            <h5 className="card-title">Tutorial Name</h5>
                            <h6 className="card-subtitle mb-2 text-muted">UserName</h6>
                            <p className="card-text overflow-hidden" style={{ maxHeight: "4.5em" }}>
                                Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae velit nec dolor tempus venenatis a at turpis. Proin viverra sapien vel mi eleifend imperdiet. Sed quis tellus eget ante posuere auctor non nec justo. Integer et nisi vel velit efficitur porttitor eget eu sem. Nunc posuere eleifend leo in fringilla.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ListTutorial