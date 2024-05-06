// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('teduh', 'root', null, {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, // Set to true if you want to see SQL queries in the console
});

module.exports = sequelize;
