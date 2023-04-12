const { PostController } = require("../controllers");
const { auth, upload } = require("../middlewares");
const postRoute = require("express").Router();

postRoute.get("/", PostController.getPosts);
postRoute.get("/:id", PostController.getPost);
postRoute.post("/add", upload.single("image"), auth, PostController.add);
postRoute.put("/edit/:id", upload.single("image"), auth, PostController.edit);
postRoute.get("/delete/:id", auth, PostController.delete);

module.exports = postRoute;
