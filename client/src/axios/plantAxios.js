import axios from "axios"
import Swal from "sweetalert2"
const config = require('../../config/config.js')
const baseUrl = config.baseUrl

const URL = baseUrl + '/plants'

const getPlants = async () => {

}

const getPlantsById = async () => {

}

const addPlants = async () => {

}

const editPlants = async () => {

}

const deletePlants = async () => {

}

export {
    getPlants,
    addPlants,
    editPlants,
    deletePlants,
    getPlantsById
}
