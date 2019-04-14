import Sequelize from 'sequelize';
import db from 'database/db';

const QuestionBank = db.define(
    'question_banks',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        questions: {
            type: Sequelize.JSON
        }
    },
    {
        underscored: true,
        timestamps: false
    }
);

export default QuestionBank;