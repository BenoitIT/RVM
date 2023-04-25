'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Operators', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      phoneNumber: {
        type: Sequelize.INTEGER,
        allowNull:false,
        unique: true,
      },
      nationalID: {
        type: Sequelize.BIGINT,
        allowNull:false,
        unique: true,
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
    await queryInterface.dropTable('Operators');
  }
};