'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('answer_histories', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            questionnaire_histories_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'questionnaire_histories',
                    key: 'id',
                }
            },
            question_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'questions',
                    key: 'id',
                }
            },
            answer: {
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
        await queryInterface.dropTable('answer_histories');
    }
};