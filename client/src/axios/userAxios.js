import axios from "axios"
import Swal from "sweetalert2"
const config = require('../../config/config.js')
const url = config.baseURL

const URL = url + '/users'

const getUsers = async () => {

}
const getUsersbyName = async () => {

}
const deleteUsers = async () => {

}

const editUsersByPassword = async () => {

}


const editUsersByProfile = async () => {

}

const editUsersByAvatar = async () => {

}

const loginUsers = async () => {

}

const registerUsers = async () => {

}


export {
    getUsers,
    getUsersbyName,
    deleteUsers,
    editUsersByProfile,
    editUsersByPassword,
    editUsersByAvatar,
    loginUsers,
    registerUsers
   
}
