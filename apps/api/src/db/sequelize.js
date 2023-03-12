const { Sequelize } = require("sequelize") 

const { config } = require("../config/config");
const setupModels = require("./models");

const options = {
  dialect: "postgres",
};


const sequelize = new Sequelize(config.dbUrl, options);

setupModels(sequelize);

export { sequelize };
