'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Operators extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Machines, { foreignKey: 'operatorId' });
    }
  }
  Operators.init({
    firstName:{
      type:DataTypes.STRING,
      allowNull:false
    } ,
    lastName:{
      type:DataTypes.STRING,
      allowNull:false
    },
    phoneNumber: {
      type:DataTypes.INTEGER,
      allowNull:false,
      unique:true
    },
    nationalID: {
      type:DataTypes.BIGINT,
      allowNull:false,
      unique:true
    },
  }, {
    sequelize,
    modelName: 'Operators',
  });
  return Operators;
};