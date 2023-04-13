"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      comment.belongsTo(models.tutorial);
      comment.belongsTo(models.user);
    }
  }
  comment.init(
    {
      text: {
        type: DataTypes.TEXT,
        validate: {
          notEmpty: {
            message: "Text can not be empty.",
          },
        },
      },
      tutorialId: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "TutorialID can not be empty.",
          },
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "UserID can not be empty.",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "comment",
    }
  );
  return comment;
};
