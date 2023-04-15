import axios from "axios";
import Swal from "sweetalert2";
const config = require("../config/config");
const baseUrl = config.baseUrl;

const URL = baseUrl + "/users/";

const getUsers = async (cb) => {
  try {
    let users = await axios({
      method: "GET",
      url: URL,
    });

    cb(users.data.data);
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
    let result = await axios({
      method: "GET",
      url: URL + username,
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
const deleteUser = async (cb) => {
  try {
    let result = await axios({
      method: "GET",
      url: URL + "delete",
      headers: {
        access_token: localStorage.access_token,
      },
    });
    cb(true)
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

const editPassword = async (data, cb) => {
  try {
    let result = await axios({
      method: "PUT",
      url: URL + "edit/password",
      data: data,
      headers: {
        access_token: localStorage.access_token,
      },
    });
    cb(true);
    Swal.fire("Edit Password", result.data.message, "success");
  } catch (error) {
    console.log(error);
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

const editProfile = async (user, cb) => {
  try {
    let result = await axios({
      method: "PUT",
      url: URL + "edit/profile",
      data: user,
      headers: {
        access_token: localStorage.access_token,
      },
    });
    cb(true);
    localStorage.setItem("username", user.username);
    Swal.fire("Edit Profile", result.data.message, "success");
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

const editAvatar = async (image, cb) => {
  console.log(image)
  try {
    let result = await axios({
      method: "PUT",
      url: URL + "edit/avatar",
      data: image,
      headers: {
        "Content-Type": "multipart/form-data",
        access_token: localStorage.access_token,
      },
    });
    cb(true, result.data.data.image);
    localStorage.setItem("avatar", result.data.data.image);
    Swal.fire("Edit Avatar", result.data.message, "success");
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
