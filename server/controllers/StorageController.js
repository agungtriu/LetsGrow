const models = require("../models");
const user = models.user
const storage = models.storage;
const post = models.post;

class StorageController {
  static async getStorages(req, res) {
    try {
      const storages = await storage.findAll({
        include: [post],
      });
      res.status(200).json({
        status: true,
        count: storages.length,
        data: storages,
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        error: error,
      });
    }
  }
  static async getStorage(req, res) {
    try {
      const id = req.params.id;
      const result = await storage.findOne({
        where: { id },
        include: [post],
      });
      if (result !== null) {
        res.status(200).json({
          status: true,
          data: result,
        });
      } else {
        res.status(404).json({
          status: false,
          message: "storage not found!",
        });
      }
    } catch (error) {
      res.status(500).json({
        status: false,
        error: error,
      });
    }
  }
  static async add(req, res) {
    try {
      const userId = +req.userData.id;
      const { name, description, plantId } = req.body;
      const result = await storage.create({
        name,
        description,
        userId,
        plantId,
      });

      if (result !== null) {
        res.status(201).json({
          status: true,
          message: `${name} has been created!`,
          data: result,
        });
      } else {
        res.status(400).json({
          status: false,
          error: "storage failed to created!",
        });
      }
    } catch (error) {
      res.status(500).json({
        status: false,
        error: error,
      });
    }
  }
  static async edit(req, res) {
    try {
      const id = req.params.id;
      const { name, description, plantId } = req.body;
      const result = await storage.update(
        {
          name,
          description,
          plantId,
        },
        { where: { id } }
      );

      if (result[0] === 1) {
        res.status(201).json({
          status: true,
          message: "update storage successful",
        });
      } else {
        res.status(400).json({
          status: false,
          message: "update storage unsuccessful",
        });
      }
    } catch (error) {
      res.status(500).json({
        status: false,
        error: error,
      });
    }
  }
  static async delete(req, res) {
    try {
      const id = req.params.id;
      const result = await storage.destroy({ where: { id } });
      if (result === 1) {
        await post.destroy({ where: { storageId: id } });

        res.status(201).json({
          status: true,
          message: "delete storage successful",
        });
      } else {
        res.status(400).json({
          status: false,
          message: "delete storage unsuccessful",
        });
      }
    } catch (error) {
      res.status(500).json({
        status: false,
        error: error,
      });
    }
  }
}

module.exports = StorageController;
