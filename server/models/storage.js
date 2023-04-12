'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class storage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      storage.belongsTo(models.user)
      storage.belongsTo(models.plant)
      storage.hasMany(models.post)
    }
  }
  storage.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Name can not be empty.",
        },
      },
    },
    description: DataTypes.TEXT,
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
    modelName: 'storage',
  });
  return storage;
};