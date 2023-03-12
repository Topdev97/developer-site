const { Sequelize, DataTypes, Model } = require('sequelize'); 
const { PROJECT_TABLE } = require('./project.model');

const IMAGE_TABLE = 'images'

const ImageSchema =  {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  url: {
    type: DataTypes.TEXT,
    allowNull: false,
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

  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
}

class Image extends Model{
  static associate(models) {
    this.hasOne(models.Project, {
      as: 'project',
      foreignKey:"projectId"
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: IMAGE_TABLE,
      modelName: 'Image',
      timestamps: false
    }
  }

}

module.exports =  {
  Image,
  ImageSchema,
  IMAGE_TABLE
}