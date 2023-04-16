import axios from "axios";
import Swal from "sweetalert2";
const config = require("../config/config");
const baseUrl = config.baseUrl;

//baseUrl
const URL = baseUrl + "/tutorials/";
const getTutorials = async (cb) => {
  try {
    let tutorials = await axios({
      method: "GET",
      url: URL,
    });
    cb(tutorials.data.data);
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

const getTutorialById = async (id, cb) => {
  try {
    let tutorial = await axios({
      method: "GET",
      url: URL + id,
    });
    cb(tutorial.data.data);
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

const getTutorialsByKey = async () => {};

const addTutorial = async (form, cb) => {
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
      Swal.fire("Add Tutorial", result.data.message, "success");
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

const editTutorial = async (tutorialId, form, cb) => {
  try {
    let result = await axios({
      method: "PUT",
      url: URL + "edit/" + tutorialId,
      data: form,
      headers: {
        "Content-Type": "multipart/form-data",
        access_token: localStorage.access_token,
      },
    });
    cb(true);
    Swal.fire("Add Tutorial", result.data.message, "success");
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

const deleteTutorial = async (id, cb) => {
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

export {
  getTutorials,
  getTutorialById,
  getTutorialsByKey,
  addTutorial,
  editTutorial,
  deleteTutorial,
};
