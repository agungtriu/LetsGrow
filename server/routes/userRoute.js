const { UserController } = require("../controllers");
const { auth } = require("../middlewares");
const userRoutes = require("express").Router();

userRoutes.get("/", UserController.getUsers);
userRoutes.get("/delete", auth, UserController.delete);
userRoutes.get("/:username", UserController.getUserByUsername);
userRoutes.post("/register", UserController.register);
userRoutes.post("/login", UserController.login);
userRoutes.put("/edit/password", auth, UserController.editPassword);
userRoutes.put("/edit/profile", auth, UserController.editProfile);

module.exports = userRoutes;
