const { CommentController } = require("../controllers");
const { auth } = require("../middlewares");
const commentRoutes = require("express").Router();

commentRoutes.get("/", CommentController.getComments);
commentRoutes.get("/:id", auth, CommentController.getComment);
commentRoutes.post("/add", auth, CommentController.add);
commentRoutes.put("/edit/:id", auth, CommentController.edit);
commentRoutes.get("/delete/:id", auth, CommentController.delete);

module.exports = commentRoutes;
