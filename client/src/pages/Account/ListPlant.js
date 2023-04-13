import React from 'react'
import { images } from '../../images'
const ListPlant = () => {
  return (
    <>
      <div>ListPlant</div>
      <div class="card mb-3" >
        <div class="row g-0">
          <div class="col-md-4">
            <div class="card" style={{width: "18rem"}}>
              <img src={images.Melati} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ListPlant