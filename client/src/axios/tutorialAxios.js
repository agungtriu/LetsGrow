import axios from 'axios'
import Swal from 'sweetalert2'
const config = require('../config/config')
const baseUrl = config.baseUrl

//baseUrl
const URL = baseUrl + '/tutorials'
const getTutorials = async (cb) => {
    try {
        let tutorials = await axios({
            method: "GET",
            url: URL
        })
        cb(tutorials.data.data)

    } catch (err) {
        console.log(err)
    }
}

const getTutorialsById = async () => {

}

const getTutorialsByKey = async () => {

}

const addTutorials = async (tutorial) => {
    try {
        let tutorials = await axios({
            method: "POST",
            url: URL + "add",
            data: tutorial
        })
        console.log(tutorials.data.data)

    } catch (err) {
        console.log(err)
    }

}

const editTutorials = async () => {

}

const deleteTutorials = async () => {

}

export {
    getTutorials,
    getTutorialsById,
    getTutorialsByKey,
    addTutorials,
    editTutorials,
    deleteTutorials
}