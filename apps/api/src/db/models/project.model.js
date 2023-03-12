const { Sequelize, DataTypes, Model } = require('sequelize') 


const PROJECT_TABLE = 'projects'

const ProjectSchema =  {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
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
  }
}

class Project extends Model{
  static associate(models) {
    this.belongsToMany(models.Image, {
      as: 'image'
    });
    this.belongsToMany(models.Label,{
      through:"LabelProject",
      foreignKey:"label_id"
    })
    

  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: PROJECT_TABLE,
      modelName: 'Project',
      timestamps: false
    }
  }

}

module.exports =  {
  Project,
  ProjectSchema,
  PROJECT_TABLE
}