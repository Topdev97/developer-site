require('dotenv/config')

console.log(process.env.DATABASE_URL);

module.exports = {
  development: {
    url: process.env.DATABASE_URL,
    dialect: "postgres",
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
};
