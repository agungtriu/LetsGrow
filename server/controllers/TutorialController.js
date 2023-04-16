const fs = require("fs");
const { promisify } = require("util");
const unlinkAsync = promisify(fs.unlink);

const { Op } = require("sequelize");
const models = require("../models");
const deleteFile = require("../helpers/deleteFile");
const deleteBulkFile = require("../helpers/deleteBulkFile");
const tutorial = models.tutorial;
const step = models.step;
const comment = models.comment;
const plant = models.plant;
const users = models.users

class TutorialController {
  static async getTutorials(req, res) {
    try {
      const tutorials = await tutorial.findAll();
      res.status(200).json({
        status: true,
        count: tutorials.length,
        data: tutorials,
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        error: error,
      });
    }
  }
  static async getTutorial(req, res) {
    try {
      const id = +req.params.id;
      const result = await tutorial.findOne({
        where: { id },
        include: [step, comment],
      });
      const _plant = await plant.findOne({
        where: { id: +result.dataValues.plantId },
      });
      if (result !== null) {
        res.status(200).json({
          status: true,
          data: { ...result.dataValues, plantName: _plant.dataValues.name },
        });
      } else {
        res.status(404).json({
          status: false,
          message: "tutorial not found!",
        });
      }
    } catch (error) {
      res.status(500).json({
        status: false,
        error: error,
      });
    }
  }
  static async searchByKey(req, res) {
    try {
      const key = req.params.key;
      const result = await tutorial.findAll({
        where: { name: { [Op.iLike]: `%${key}%` } },
      });
      res.status(200).json({
        status: true,
        count: result.length,
        data: result,
      });
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
      const image = req.file.filename || "image_default.png";
      const result = await tutorial.create({
        name,
        description,
        image,
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
          error: "tutorial failed to created!",
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
      const id = +req.params.id;
      const _tutorial = await tutorial.findOne({
        where: { id },
      });

      const { name, description, plantId } = req.body;
      const image = req.file.filename;
      const result = await tutorial.update(
        {
          name,
          description,
          image,
          plantId,
        },
        { where: { id } }
      );

      if (result[0] === 1) {
        deleteFile(_tutorial.image);
        res.status(201).json({
          status: true,
          message: "update tutorial successful",
        });
      } else {
        res.status(400).json({
          status: false,
          message: "update tutorial unsuccessful",
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
      const id = +req.params.id;
      const _tutorial = await tutorial.findOne({
        where: { id },
      });
      const result = await tutorial.destroy({ where: { id } });
      if (result === 1) {
        deleteFile(_tutorial.image);

        const steps = await step.findAll({
          where: { tutorialId: id },
        });
        await step.destroy({ where: { tutorialId: id } });
        deleteBulkFile(steps);

        await comment.destroy({ where: { tutorialId: id } });

        res.status(201).json({
          status: true,
          message: "delete tutorial successful",
        });
      } else {
        res.status(400).json({
          status: false,
          message: "delete tutorial unsuccessful",
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

module.exports = TutorialController;
