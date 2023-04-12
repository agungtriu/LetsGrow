'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      post.belongsTo(models.storage)
      post.belongsTo(models.user)
    }
  }
  post.init({
    caption: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: {
          message: "Caption can not be empty.",
        },
      },
    },
    image: DataTypes.STRING,
    storageId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          message: "StorageID can not be empty.",
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
  }, {
    sequelize,
    modelName: 'post',
  });
  return post;
};