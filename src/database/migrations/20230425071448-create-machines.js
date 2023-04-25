'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Machines', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Location: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      zone: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      operatorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references :{
          model: 'Operators',
          key: 'id',
        }
      },
      gps_longitude: {
        type: Sequelize.DECIMAL(10, 8),
        allowNull: false,
        unique:true
      },
      gps_latitude: {
        type: Sequelize.DECIMAL(10, 8),
        allowNull: false,
        unique:true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Machines');
  }
};