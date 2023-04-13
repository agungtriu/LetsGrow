"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      profile.belongsTo(models.user);
    }
  }
  profile.init(
    {
      avatar: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Avatar can not be empty.",
          },
        },
      },
      phone: DataTypes.STRING,
      address: DataTypes.STRING,
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
      hooks: {
        beforeCreate: function (profile, option) {
          profile.avatar = "avatar_default.png";
        },
      },
      sequelize,
      modelName: "profile",
    }
  );
  return profile;
};
