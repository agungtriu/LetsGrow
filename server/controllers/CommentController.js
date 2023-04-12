const models = require("../models");
const comment = models.comment;

class CommentController {
  static async getComments(req, res) {
    try {
      const comments = await comment.findAll();
      res.status(200).json({
        status: true,
        count: comments.length,
        data: comments,
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
      const { text, stepId } = req.body;
      const result = await comment.create({
        text,
        stepId,
        userId,
      });

      if (result !== null) {
        res.status(201).json({
          status: true,
          message: `comment has been created!`,
          data: result,
        });
      } else {
        res.status(400).json({
          status: false,
          error: "comment failed to created!",
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
      const { text } = req.body;
      const result = await comment.update(
        {
          text,
        },
        { where: { id } }
      );
      if (result[0] === 1) {
        res.status(201).json({
          status: true,
          message: "update comment successful",
        });
      } else {
        res.status(400).json({
          status: false,
          message: "update comment unsuccessful",
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
      const result = await comment.destroy({ where: { id } });
      if (result === 1) {
        res.status(201).json({
          status: true,
          message: "delete comment successful",
        });
      } else {
        res.status(400).json({
          status: false,
          message: "delete comment unsuccessful",
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

module.exports = CommentController;
