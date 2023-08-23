'use strict';
const { LABEL_PROJECT_TABLE } = require('../models/label-project.model');
const { Sequelize, DataTypes } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(LABEL_PROJECT_TABLE, 'order', {
      type: DataTypes.INTEGER,
      allowNull: true
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(LABEL_PROJECT_TABLE, 'order');
  }
};