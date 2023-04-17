'use strict';
const { LABEL_PROJECT_TABLE } = require('../models/label-project.model');
const { LABEL_TABLE } = require('../models/label.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn(LABEL_PROJECT_TABLE, 'label_id', {
      type: Sequelize.INTEGER,
      allowNull: true
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn(LABEL_PROJECT_TABLE, 'label_id', {
      type: Sequelize.INTEGER,
      allowNull: false
    });
  }
};
