// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Pastikan sesuaikan path berdasarkan struktur proyek Anda
const bcrypt = require('bcrypt');

const User = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isNewUser: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
    identity_number: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    gender: {
        type: DataTypes.ENUM('male', 'female', 'other'),
        allowNull: true,
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
    },
    last_education: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    working: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    disease: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    long_suffering: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    blood_pressure: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    respiratory_rate: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    pulse: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    temperature: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    oxygen_saturation: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
    },
}, {
    tableName: 'users', // Optional: Define the table name if different from the model name
    timestamps: true,
    paranoid: true, // Enable soft deletes
    hooks: {
        beforeCreate: async (user) => {
            const hashedPassword = await bcrypt.hash(user.password, 10);
            user.password = hashedPassword;
        },
        beforeUpdate: async (user) => {
            // Check if the password has been modified before updating
            if (user.changed('password')) {
                const hashedPassword = await bcrypt.hash(user.password, 10);
                user.password = hashedPassword;
            }
        },
    },
});

module.exports = User;
