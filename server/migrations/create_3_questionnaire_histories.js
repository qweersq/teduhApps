'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('questionnaire_histories', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            user_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id',
                }
            },
            type: {
                type: Sequelize.ENUM('pre', 'post'),
                allowNull: false,
            },
            total_score: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            start_date: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            end_date: {
                type: Sequelize.DATE,
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
        await queryInterface.dropTable('questionnaire_histories');
    }
};