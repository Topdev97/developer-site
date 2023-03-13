const { Sequelize, DataTypes, Model } = require('sequelize') 

const LABEL_TABLE = "labels"
const LabelSchema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
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
};


class Label extends Model{
  static associate(models) {
    this.belongsToMany(models.Project, {
      through:"LabelProject",
      foreignKey:"labelId",
      otherKey:"projectId"
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: LABEL_TABLE,
      modelName: 'Label',
      timestamps: false
    }
  }

}

module.exports =  {
  LABEL_TABLE,
  Label,
  LabelSchema
}