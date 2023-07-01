'use strict';
const { PROJECT_TABLE } = require('../models/project.model');
const { LABEL_PROJECT_TABLE } = require('../models/label-project.model');
const { LABEL_TABLE } = require('../models/label.model');
const { IMAGE_TABLE } = require('../models/image.model');
const { USER_TABLE } = require('../models/user.model');
const { Sequelize, DataTypes } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable(USER_TABLE,{
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING
      },
      recoveryToken: {
        field: 'recovery_token',
        allowNull: true,
        type: DataTypes.STRING
      },
      role: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: 'customer'
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW
      }
    }
    )

    await queryInterface.createTable(LABEL_TABLE,{
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement:true
      },
      title: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique:true
      },
      type: {
        type: DataTypes.STRING(255),
      },
    
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW
      }
    })
    await queryInterface.createTable(PROJECT_TABLE,{
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement:true
      },
      link: {
        type: DataTypes.TEXT,
      },
      repository: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      shortDescription: {
        field:"short_description",
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      published: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
    
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW
      },
      slug:{
        allowNull:false,
        type:DataTypes.STRING,
        unique:true
      }
    })
    await queryInterface.createTable(LABEL_PROJECT_TABLE,{
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement:true
      },
      projectId: {
        field:"project_id",
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: PROJECT_TABLE,
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      labelId: {
        field:"label_id",
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: LABEL_TABLE,
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
    
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW
      }
    
    })
    await queryInterface.createTable(IMAGE_TABLE,{
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement:true
      },
      url: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      projectId: {
        field:"project_id",
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: PROJECT_TABLE,
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
    
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW
      }
    })

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */


    await queryInterface.dropTable(LABEL_PROJECT_TABLE);
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(LABEL_TABLE);
    await queryInterface.dropTable(IMAGE_TABLE);
    await queryInterface.dropTable(PROJECT_TABLE);
  }
};
