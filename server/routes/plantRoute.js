const { PlantController } = require("../controllers");
const { auth, upload } = require("../middlewares");
const plantRoutes = require("express").Router();

plantRoutes.get("/", PlantController.getPlants);
plantRoutes.get("/:id", PlantController.getPlant);
plantRoutes.post("/add", upload.single("image"), auth, PlantController.add);
plantRoutes.put("/edit/:id", upload.single("image"), auth, PlantController.edit);
plantRoutes.get("/delete/:id", auth, PlantController.delete);

module.exports = plantRoutes;
