import axios from "axios";
import Swal from "sweetalert2";
const config = require("../config/config.js");
const baseUrl = config.baseUrl;

const URL = baseUrl + "/comments";

const getComments = async () => {};

const addComment = async (comment, cb) => {
  try {
    let result = await axios({
      method: "POST",
      url: URL + "/add",
      data: comment,
      headers: {
        access_token: localStorage.access_token,
      },
    });
    Swal.fire("Add Comment", result.data.message, "success");
    cb(true);
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
    cb(false);
  }
};

const editComment = async () => {};

const deleteComment = async (id, cb) => {
  try {
    let result = await axios({
      method: "GET",
      url: URL + "/delete/" + id,
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

export { getComments, addComment, editComment, deleteComment };
