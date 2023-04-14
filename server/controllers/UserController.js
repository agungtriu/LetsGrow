const { encryptPwd, decryptPwd } = require("../helpers/bcrypt");
const deleteBulkFile = require("../helpers/deleteBulkFile");
const deleteFile = require("../helpers/deleteFile");
const { tokenGenerator } = require("../helpers/jsonwebtoken");
const models = require("../models");
const user = models.user;
const profile = models.profile;
const tutorial = models.tutorial;
const comment = models.comment;
const step = models.step;
class UserController {
  static async getUsers(req, res) {
    try {
      const users = await user.findAll({
        include: [profile],
      });
      res.status(200).json({
        status: true,
        count: users.length,
        data: users,
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        error: error,
      });
    }
  }
  static async getUserByUsername(req, res) {
    try {
      const username = req.params.username;
      const result = await user.findOne({
        where: { username: username },
        include: [profile, tutorial],
      });
      if (result !== null) {
        res.status(200).json({
          status: true,
          data: result,
        });
      } else {
        res.status(404).json({
          status: false,
          message: "account not found!",
        });
      }
    } catch (error) {
      res.status(500).json({
        status: false,
        error: error,
      });
    }
  }
  static async register(req, res) {
    try {
      const { username, name, email, password, confirmPassword } = req.body;
      if (password === confirmPassword) {
        const checkUsername = await user.findOne({ where: { username } });
        if (checkUsername === null) {
          const result = await user.create({
            username,
            name,
            email,
            password: encryptPwd(password),
          });
          if (result !== null) {
            await profile.create({
              userId: result.id,
            });

            res.status(201).json({
              status: true,
              message: `${username} has been created!`,
              data: result,
            });
          } else {
            res.status(400).json({
              status: false,
              message: "account failed to created!",
            });
          }
        } else {
          res.status(400).json({
            status: false,
            message: "username not available",
          });
        }
      } else {
        res.status(400).json({
          status: false,
          message: "password and confirm password not match!",
        });
      }
    } catch (error) {
      res.status(500).json({
        status: false,
        error: error,
      });
    }
  }
  static async login(req, res) {
    try {
      const { username, password } = req.body;
      const result = await user.findOne({
        where: { username },
        include: [profile],
      });
      if (result !== null) {
        if (decryptPwd(password, result.password)) {
          const access_token = tokenGenerator(result);
          res.status(202).json({
            status: true,
            message: "login successful",
            data: {
              username: result.username,
              image: result.profile.avatar,
              access_token: access_token,
            },
          });
        } else {
          res.status(400).json({
            status: false,
            message: "invalid password!",
          });
        }
      } else {
        res.status(404).json({
          status: false,
          message: `${username} was not registered!`,
        });
      }
    } catch (error) {
      res.status(500).json({
        status: false,
        error: error,
      });
    }
  }
  static async editPassword(req, res) {
    try {
      const { oldPassword, newPassword, confirmPassword } = req.body;
      const username = req.userData.username;

      if (newPassword === confirmPassword) {
        const account = await user.findOne({ where: { username } });
        if (decryptPwd(oldPassword, account.password)) {
          const result = await user.update(
            {
              password: encryptPwd(newPassword),
            },
            {
              where: { username },
            }
          );
          if (result[0] === 1) {
            res.status(201).json({
              status: true,
              message: "update password successful",
            });
          } else {
            res.status(400).json({
              status: false,
              message: "update password unsuccessful",
            });
          }
        } else {
          res.status(400).json({
            status: false,
            message: "invalid old password!",
          });
        }
      } else {
        res.status(400).json({
          status: false,
          message: "new password and confirm password not match!",
        });
      }
    } catch (error) {
      res.status(500).json({
        status: false,
        error: error,
      });
    }
  }

  static async editProfile(req, res) {
    try {
      const _id = +req.userData.id;
      const _username = req.userData.username;
      const { username, name, email, phone, address } = req.body;
      const checkUsername = await user.findOne({ where: { username } });
      if (checkUsername === null || _username === username) {
        const result = await user.update(
          {
            username,
            name,
            email,
          },
          { where: { id: _id } }
        );
        if (result[0] === 1) {
          await profile.update(
            {
              phone,
              address,
            },
            { where: { userId: _id } }
          );
          res.status(201).json({
            status: true,
            message: "update profile successful",
          });
        } else {
          res.status(400).json({
            status: false,
            message: "update profile unsuccessful",
          });
        }
      } else {
        res.status(400).json({
          status: false,
          message: "username not available",
        });
      }
    } catch (error) {
      res.status(500).json({
        status: false,
        error: error,
      });
    }
  }
  static async editAvatar(req, res) {
    try {
      const id = +req.userData.id;
      const _profile = await profile.findOne({
        where: { userId: id },
      });
      const avatar = req.file.filename;
      const result = await profile.update(
        {
          avatar,
        },
        { where: { userId: id } }
      );

      if (result[0] === 1) {
        deleteFile(_profile.avatar);
        res.status(201).json({
          status: true,
          message: "update avatar successful",
        });
      } else {
        res.status(400).json({
          status: false,
          message: "update avatar unsuccessful",
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
      const id = +req.userData.id;
      const result = await user.destroy({ where: { id } });
      if (result === 1) {
        const _profile = await profile.findOne({
          where: { userId: id },
        });
        await profile.destroy({ where: { userId: id } });
        deleteFile(_profile.avatar);

        const tutorials = await tutorial.findAll({
          where: { userId: id },
        });
        await tutorial.destroy({ where: { userId: id } });
        deleteBulkFile(tutorials);

        const steps = await step.findAll({ where: { userId: id } });
        await step.destroy({ where: { userId: id } });
        deleteBulkFile(steps);

        await comment.destroy({ where: { userId: id } });

        res.status(201).json({
          status: true,
          message: "delete account successful",
        });
      } else {
        res.status(400).json({
          status: false,
          message: "delete account unsuccessful",
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

module.exports = UserController;
