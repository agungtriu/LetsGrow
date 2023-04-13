const deleteFile = require("../helpers/deleteFile");
const models = require("../models");
const step = models.step;

class StepController {
  static async getSteps(req, res) {
    try {
      const steps = await step.findAll();
      res.status(200).json({
        status: true,
        count: steps.length,
        data: steps,
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        error: error,
      });
    }
  }
  static async getStep(req, res) {
    try {
      const id = req.params.id;
      const result = await step.findOne({
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
          message: "step not found!",
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
      const { description, tutorialId } = req.body;
      const image = req.file.filename || "image_default.png";
      const result = await step.create({
        image,
        description,
        tutorialId,
        userId,
      });
      if (result !== null) {
        res.status(201).json({
          status: true,
          message: `step has been created!`,
          data: result,
        });
      } else {
        res.status(400).json({
          status: false,
          error: "step failed to created!",
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
      const _step = await step.findOne({
        where: { id },
      });
      const { description } = req.body;
      const image = req.file.filename;
      const result = await step.update(
        {
          image,
          description,
        },
        { where: { id } }
      );
      if (result[0] === 1) {
        deleteFile(_step.image);
        res.status(201).json({
          status: true,
          message: "update step successful",
        });
      } else {
        res.status(400).json({
          status: false,
          message: "update step unsuccessful",
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
      const _step = await step.findOne({
        where: { id },
      });
      const result = await step.destroy({ where: { id } });
      if (result === 1) {
        deleteFile(_step.image);
        res.status(201).json({
          status: true,
          message: "delete step successful",
        });
      } else {
        res.status(400).json({
          status: false,
          message: "delete step unsuccessful",
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

module.exports = StepController;
