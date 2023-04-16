import axios from "axios";
import Swal from "sweetalert2";
const config = require("../config/config");
const baseUrl = config.baseUrl;

const URL = baseUrl + "/plants/";

const getPlants = async (cb) => {
  try {
    let plants = await axios({
      method: "GET",
      url: URL,
    });
    cb(plants.data.data);
  } catch (err) {
    if (err.response.status === 500) {
      Swal.fire(
        "Error!",
        err.response.data.error.errors[0].original.validatorArgs[0].message,
        "error"
      );
    } else {
      Swal.fire("Error!", err.response.data.message, "error");
    }
  }
};

const getPlantsById = async (id, cb) => {
  try {
    let plants = await axios({
      method: "GET",
      url: URL + id,
    });
    cb(plants.data.data);
  } catch (err) {
    if (err.response.status === 500) {
      Swal.fire(
        "Error!",
        err.response.data.error.errors[0].original.validatorArgs[0].message,
        "error"
      );
    } else {
      Swal.fire("Error!", err.response.data.message, "error");
    }
  }
};

const addPlants = async (plant, cb) => {
  try {
    let plants = await axios({
      method: "POST",
      url: URL + "add",
      data: plant,
      headers: {
        "Content-Type": "multipart/form-data",
        access_token: localStorage.access_token,
      },
    })
    cb(true)
    console.log(plants.data.data)

  } catch (err) {
    if (err.response.status === 500) {
      Swal.fire(
        "Error!",
        err.response.data.error.errors[0].original.validatorArgs[0].message,
        "error"
      );
    } else {
      Swal.fire("Error!", err.response.data.message, "error");
    }
  }
}

const editPlants = async (id, plant) => {
  try {
    let plants = await axios({
      method: "PUT",
      url: URL + "edit/" + id,
      data: plant,
      headers: {
        "Content-Type": "multipart/form-data",
        access_token: localStorage.access_token,
      }
    })
    Swal.fire(
      'Edit plants' + id,
      'Item' + id + ' has been updated',
      'success'
    )
    console.log(plants.data.data)
    localStorage.setItem("image", plants.data.data.image)
  } catch (err) {
    if (err.response.status === 500) {
      Swal.fire(
        "Error!",
        err.response.data.error.errors[0].original.validatorArgs[0].message,
        "error"
      );
    } else {
      Swal.fire("Error!", err.response.data.message, "error");
    }
  }
};

const deletePlants = async (id) => {
  try {
    let plants = await axios({
      method: "GET",
      url: URL + "delete/" + id,
      headers: {
        access_token: localStorage.access_token,
      }
    })
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
    console.log(plants.data.data)

  } catch (err) {

    if (err.response.status === 500) {
      Swal.fire(
        "Error!",
        err.response.data.error.errors[0].original.validatorArgs[0].message,
        "error"
      );
    } else {
      Swal.fire("Error!", err.response.data.message, "error");
    }
  }
};

export {
  getPlants,
  addPlants,
  editPlants,
  deletePlants,
  getPlantsById
};
