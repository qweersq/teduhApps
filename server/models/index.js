const User = require('./User');
const sequelize = require('../config/database');
const { DataTypes } = require('sequelize');

module.exports = {
    User,
    sequelize,
    DataTypes,
};