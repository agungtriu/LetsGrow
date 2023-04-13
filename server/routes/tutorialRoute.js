const { TutorialController } = require("../controllers");
const { auth, upload } = require("../middlewares");
const tutorialRoutes = require("express").Router();

tutorialRoutes.get("/", TutorialController.getTutorials);
tutorialRoutes.get("/:id", TutorialController.getTutorial);
tutorialRoutes.get("/search/:key", TutorialController.searchByKey);
tutorialRoutes.post("/add", upload.single("image"), auth, TutorialController.add);
tutorialRoutes.put("/edit/:id", upload.single("image"), auth, TutorialController.edit);
tutorialRoutes.get("/delete/:id", auth, TutorialController.delete);

module.exports = tutorialRoutes;
