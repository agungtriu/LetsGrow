import axios from "axios"
import Swal from "sweetalert2"
const config = require('../../config/config.js')
const baseUrl = config.baseUrl

const URL = baseUrl + '/steps'

const getSteps = async () => {

}

const getStepsById = async () => {

}

const addSteps = async () => {

}

const editSteps = async () => {

}

const deleteSteps = async () => {

}

export {
    getSteps,
    addSteps,
    editSteps,
    deleteSteps,
    getStepsById
}
