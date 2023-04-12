const { StorageController } = require("../controllers");
const { auth } = require("../middlewares");
const storageRoutes = require("express").Router();

storageRoutes.get("/", auth, StorageController.getStorages);
storageRoutes.get("/:id", auth, StorageController.getStorage);
storageRoutes.post("/add", auth, StorageController.add);
storageRoutes.put("/edit/:id", auth, StorageController.edit);
storageRoutes.get("/delete/:id", auth, StorageController.delete);

module.exports = storageRoutes;
