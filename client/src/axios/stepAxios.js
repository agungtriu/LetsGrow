import axios from "axios";
import Swal from "sweetalert2";
const config = require("../config/config.js");
const baseUrl = config.baseUrl;

const URL = baseUrl + "/steps/";

const getSteps = async () => {};

const getStepById = async (id, cb) => {
  try {
    let result = await axios({
      method: "GET",
      url: URL + id,
      headers: {
        access_token: localStorage.access_token,
      },
    });

    cb(result.data.data);
  } catch (error) {
    if (error.response.status === 500) {
      Swal.fire(
        "Error!",
        error.response.data.error.errors[0].original.validatorArgs[0].message,
        "error"
      );
    } else {
      Swal.fire("Error!", error.response.data.message, "error");
    }
  }
};

const addStep = async (form, cb) => {
  try {
    let result = await axios({
      method: "POST",
      url: URL + "add",
      data: form,
      headers: {
        "Content-Type": "multipart/form-data",
        access_token: localStorage.access_token,
      },
    });
    cb(true);
    Swal.fire("Add Step", result.data.message, "success");
  } catch (error) {
    if (error.response.status === 500) {
      Swal.fire(
        "Error!",
        error.response.data.error.errors[0].original.validatorArgs[0].message,
        "error"
      );
    } else {
      Swal.fire("Error!", error.response.data.message, "error");
    }
  }
};

const editStep = async (stepId, form, cb) => {
  try {
    let result = await axios({
      method: "PUT",
      url: URL + "edit/"+stepId,
      data: form,
      headers: {
        "Content-Type": "multipart/form-data",
        access_token: localStorage.access_token,
      },
    });
    cb(true);
    Swal.fire("Add Step", result.data.message, "success");
  } catch (error) {
    if (error.response.status === 500) {
      Swal.fire(
        "Error!",
        error.response.data.error.errors[0].original.validatorArgs[0].message,
        "error"
      );
    } else {
      Swal.fire("Error!", error.response.data.message, "error");
    }
  }
};

const deleteSteps = async (id, cb) => {
  try {
    let result = await axios({
      method: "GET",
      url: URL + "delete/" + id,
      headers: {
        access_token: localStorage.access_token,
      },
    });
    cb(true);
    Swal.fire("Delete", result.data.message, "success");
  } catch (error) {
    if (error.response.status === 500) {
      Swal.fire(
        "Error!",
        error.response.data.error.errors[0].original.validatorArgs[0].message,
        "error"
      );
    } else {
      Swal.fire("Error!", error.response.data.message, "error");
    }
  }
};

export { getSteps, addStep, editStep, deleteSteps, getStepById };
