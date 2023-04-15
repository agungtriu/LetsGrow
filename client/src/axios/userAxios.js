import axios from "axios";
import Swal from "sweetalert2";
const config = require("../config/config");
const baseUrl = config.baseUrl;

const URL = baseUrl + "/users/";

const getUsers = async (cb) => {
  try {
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
const getUserByUsername = async (username, cb) => {
  try {
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
const deleteUser = async () => {
  try {
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

const editPassword = async (user) => {
  try {
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

const editProfile = async (user) => {
  try {
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

const editAvatar = async () => {
  try {
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

const loginUser = async (user, cb) => {
  if (user.username === "") {
    Swal.fire("Login", "Username can not be empty.", "error");
  } else if (user.password === "") {
    Swal.fire("Login", "Password can not be empty.", "error");
  } else {
    try {
      let result = await axios({
        method: "POST",
        url: URL + "login",
        data: user,
      });
      Swal.fire("Login", result.data.message, "success");
      localStorage.setItem("access_token", result.data.data.access_token);
      localStorage.setItem("username", result.data.data.username);
      localStorage.setItem("avatar", result.data.data.image);
      localStorage.setItem("role", result.data.data.role);
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
    }
  }
};

const registerUser = async (user, cb) => {
  try {
    let result = await axios({
      method: "POST",
      url: URL + "register",
      data: user,
    });
    Swal.fire("Register", result.data.message, "success");
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

export {
  getUsers,
  getUserByUsername,
  deleteUser,
  editProfile,
  editPassword,
  editAvatar,
  loginUser,
  registerUser,
};
