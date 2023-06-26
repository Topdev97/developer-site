const {config} = require('../config')

module.exports =  {
  development: {
    url: config.dbUrl,
    dialect: "postgres",
  },
  stage: {
    url: config.dbUrl,
    dialect: "postgres",
    dialectOptions:{
      ssl:{
        rejectUnauthorized:false
      }
    }
  },
  production: {
    url: config.dbUrl,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
};
