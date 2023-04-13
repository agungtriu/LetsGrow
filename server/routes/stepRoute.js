const { StepController } = require("../controllers");
const { auth, upload } = require("../middlewares");
const stepRoutes = require("express").Router();

stepRoutes.get("/", StepController.getSteps);
stepRoutes.get("/:id", auth, StepController.getStep);
stepRoutes.post("/add", upload.single("image"), auth, StepController.add);
stepRoutes.put("/edit/:id", upload.single("image"), auth, StepController.edit);
stepRoutes.get("/delete/:id", auth, StepController.delete);

module.exports = stepRoutes;
