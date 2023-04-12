'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tutorial extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tutorial.belongsTo(models.user)
      tutorial.belongsTo(models.plant)
      tutorial.hasMany(models.step)
      tutorial.hasMany(models.comment)
    }
  }
  tutorial.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Name can not be empty.",
        },
      },
    },
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          message: "UserID can not be empty.",
        },
      },
    },
    plantId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          message: "PlantID can not be empty.",
        },
      },
    },
  }, {
    sequelize,
    modelName: 'tutorial',
  });
  return tutorial;
};