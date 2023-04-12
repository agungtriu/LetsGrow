"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class step extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      step.belongsTo(models.tutorial);
      step.belongsTo(models.user);
    }
  }
  step.init(
    {
      image: DataTypes.STRING,
      description: {
        type: DataTypes.TEXT,
        validate: {
          notEmpty: {
            message: "Description can not be empty.",
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
      modelName: "step",
    }
  );
  return step;
};
