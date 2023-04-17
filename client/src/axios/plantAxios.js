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

const getPlantById = async (id, cb) => {
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

const addPlant = async (plant, cb) => {
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
    Swal.fire("Add Plants", plants.data.message, "success");

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

const editPlant = async (id, plant, cb) => {
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
    cb(true)
    Swal.fire(
      'Edit plants' + id,
      plants.data.message,
      'success'
    )
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

const deletePlant = async (id, cb) => {
  try {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        let plants = await axios({
          method: "GET",
          url: URL + "delete/" + id,
          headers: {
            access_token: localStorage.access_token,
          }
        })
        cb(true)
        Swal.fire(
          'Deleted!',
          `${plants.data.message}`,
          'success'
        )
      }
    })
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
  addPlant,
  editPlant,
  deletePlant,
  getPlantById
};
