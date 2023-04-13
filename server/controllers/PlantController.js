const deleteBulkFile = require("../helpers/deleteBulkFile");
const deleteFile = require("../helpers/deleteFile");
const models = require("../models");
const plant = models.plant;
const tutorial = models.tutorial;
const step = models.step;
const comment = models.comment;

class PlantController {
  static async getPlants(req, res) {
    try {
      const plants = await plant.findAll();
      res.status(200).json({
        status: true,
        count: plants.length,
        data: plants,
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        error: error,
      });
    }
  }
  static async getPlant(req, res) {
    try {
      const id = req.params.id;
      const result = await plant.findOne({
        where: { id },
      });
      if (result !== null) {
        res.status(200).json({
          status: true,
          data: result,
        });
      } else {
        res.status(404).json({
          status: false,
          message: "plant not found!",
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
      const { name, description, type } = req.body;
      const image = req.file.filename || "";
      const result = await plant.create({
        name,
        description,
        image,
        type,
      });

      if (result !== null) {
        res.status(201).json({
          status: true,
          message: `plant has been created!`,
          data: result,
        });
      } else {
        res.status(400).json({
          status: false,
          error: "plant failed to created!",
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
      const _plant = await plant.findOne({ where: { id } });
      const { name, description, type } = req.body;
      const image = req.file.filename;
      const result = await plant.update(
        {
          name,
          description,
          image,
          type,
        },
        { where: { id } }
      );

      if (result[0] === 1) {
        deleteFile(_plant.image);
        res.status(201).json({
          status: true,
          message: "update plant successful",
        });
      } else {
        res.status(400).json({
          status: false,
          message: "update plant unsuccessful",
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
      const _plant = await plant.findOne({ where: { id } });
      const result = await plant.destroy({ where: { id } });
      if (result === 1) {
        deleteFile(_plant.image);

        const tutorials = await tutorial.findAll({
          where: { plantId: id },
        });
        await tutorial.destroy({ where: { plantId: id } });
        deleteBulkFile(tutorials);

        tutorials.forEach(async (tutorial) => {
          const steps = await step.findAll({
            where: { tutorialId: tutorial.id },
          });
          await step.destroy({ where: { tutorialId: tutorial.id } });
          deleteBulkFile(steps);

          await comment.destroy({ where: { tutorialId: tutorial.id } });
        });

        res.status(201).json({
          status: true,
          message: "delete plant successful",
        });
      } else {
        res.status(400).json({
          status: false,
          message: "delete plant unsuccessful",
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

module.exports = PlantController;
