const { UserController } = require("../controllers");
const { auth, upload } = require("../middlewares");
const userRoutes = require("express").Router();

userRoutes.get("/", UserController.getUsers);
userRoutes.get("/delete", auth, UserController.delete);
userRoutes.get("/:username", UserController.getUserByUsername);
userRoutes.get("/id/:id", UserController.getUserById);
userRoutes.post("/register", UserController.register);
userRoutes.post("/login", UserController.login);
userRoutes.put("/edit/password", auth, UserController.editPassword);
userRoutes.put("/edit/profile", auth, UserController.editProfile);
userRoutes.put("/edit/avatar", upload.single("avatar"), auth, UserController.editAvatar);

module.exports = userRoutes;
