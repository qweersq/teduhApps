// migrations/XXXXXXXXXXXXXX-create-users.js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      identity_number: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      gender: {
        type: Sequelize.ENUM('male', 'female', 'other'),
        allowNull: false,
      },
      date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      last_education: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      working: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      disease: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      long_suffering: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      blood_pressure: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      respiratory_rate: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      pulse: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      temperature: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      oxygen_saturation: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  },
};
