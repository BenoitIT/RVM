'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Recyclables', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references :{
          model: 'Users',
          key: 'id',
        }
      },
      Location: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bootleType:{
        type: Sequelize.STRING,
        allowNull: false
      },
      zone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      numberOfRecyclables: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      rewardPerEach: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      totalRewards: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
    await queryInterface.dropTable('Recyclables');
  }
};