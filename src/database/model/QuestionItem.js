import Sequelize from 'sequelize';
import db from 'database/db';

const QuestionItem = db.define(
    'question_items',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        content: {
            type: Sequelize.STRING
        },
        content_number: {
            type: Sequelize.INTEGER
        },
        content_image: {
            type: Sequelize.TEXT
        },
        question_id: {
            type: Sequelize.INTEGER
        }
    },
    {
        underscored: true,
        timestamps: false
    }
);

export default QuestionItem;