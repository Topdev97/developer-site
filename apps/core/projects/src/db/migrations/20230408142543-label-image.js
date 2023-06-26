'use strict';
const { LABEL_TABLE } = require('../models/label.model');
const { Sequelize, DataTypes } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(LABEL_TABLE, 'image', {
      type: DataTypes.TEXT,
      allowNull: true
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(LABEL_TABLE, 'image');
  }
};
