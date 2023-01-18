'use strict';

const { USER_TABLE } = require('../models/user.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(USER_TABLE, 'recovery_token', {
      field: 'recovery_token',
      allowNull: true,
      type: DataTypes.STRING
    });
    await queryInterface.addColumn(USER_TABLE, 'siuu_points', {
      field: 'siuu_points',
      allowNull: true,
      type: DataTypes.DOUBLE,
      defaultValue: 0
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('recovery_token');
    await queryInterface.removeColumn('siuu_points');
  }
};
