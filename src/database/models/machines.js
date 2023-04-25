'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Machines extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Machines.belongsTo(models.Operators, {
        foreignKey: 'operatorId',
        allowNull: false
      });
    }
  }
  Machines.init({
    Location: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    zone: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    status: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    operatorId: {
      type:DataTypes.INTEGER,
    },
    gps_longitude: {
      type: DataTypes.DECIMAL(10, 8),
      allowNull: false,
      unique:true
    },
    gps_latitude: {
      type: DataTypes.DECIMAL(10, 8),
      allowNull: false,
      unique:true
    },
  }, {
    sequelize,
    modelName: 'Machines',
  });
  return Machines;
};