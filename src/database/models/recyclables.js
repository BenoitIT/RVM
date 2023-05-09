"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Recyclables extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Users, { foreignKey: "userId", allowNull: false });
    }
  }
  Recyclables.init(
    {
      userId: DataTypes.INTEGER,
      Location: DataTypes.STRING,
      zone: DataTypes.STRING,
      numberOfRecyclables: DataTypes.INTEGER,
      rewardPerEach: DataTypes.INTEGER,
      totalRewards: DataTypes.INTEGER,
      bootleType: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "Recyclables",
    }
  );
  return Recyclables;
};
