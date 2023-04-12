const models = require("../models");
const post = models.post;

class PostController {
  static async getPosts(req, res) {
    try {
      const posts = await post.findAll();
      res.status(200).json({
        status: true,
        count: posts.length,
        data: posts,
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        error: error,
      });
    }
  }
  static async getPost(req, res) {
    try {
      const id = req.params.id;
      const result = await post.findOne({
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
          message: "post not found!",
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
      const { caption, storageId } = req.body;
      const image = req.file.filename || "";
      const result = await post.create({
        caption,
        image,
        storageId,
        userId,
      });
      if (result !== null) {
        res.status(201).json({
          status: true,
          message: `post has been created!`,
          data: result,
        });
      } else {
        res.status(400).json({
          status: false,
          error: "post failed to created!",
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
      const { caption, storageId } = req.body;
      const image = req.file.filename || "";
      const result = await post.update(
        {
          caption,
          image,
          storageId,
        },
        { where: { id } }
      );
      if (result[0] === 1) {
        res.status(201).json({
          status: true,
          message: "update post successful",
        });
      } else {
        res.status(400).json({
          status: false,
          message: "update post unsuccessful",
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
      const result = await post.destroy({ where: { id } });
      if (result === 1) {
        res.status(201).json({
          status: true,
          message: "delete post successful",
        });
      } else {
        res.status(400).json({
          status: false,
          message: "delete post unsuccessful",
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

module.exports = PostController;
