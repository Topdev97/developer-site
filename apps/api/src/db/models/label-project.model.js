const { Sequelize, DataTypes, Model } = require('sequelize') 
const { PROJECT_TABLE } =  require ('./project.model')
const { LABEL_TABLE } = require('./label.model') 

const LABEL_PROJECT_TABLE = 'labels_projects_bridge'

const LabelProjectSchema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,

    autoIncrement:true
  },
  projectId: {
    field:"project_id",
    type: DataTypes.INTEGER,
    allowNull: false,
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

}

class LabelProject extends Model{
  static config(sequelize) {
    return {
      sequelize,
      tableName: LABEL_PROJECT_TABLE,
      modelName: 'LabelProject',
      timestamps: false
    }
  }
}

module.exports =  {
  LabelProject,
  LabelProjectSchema,
  LABEL_PROJECT_TABLE
}