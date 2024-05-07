'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('content_materials', {
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
            content_description: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            source_type: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            source_link: {
                type: Sequelize.STRING,
                allowNull: false,
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
                type: Sequelize.DATE,
                allowNull: true,
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('content_materials');
    }
};