import Sequelize from 'sequelize';
import db from 'database/db';

const Question = db.define(
    'questions',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        question_title: {
            type: Sequelize.STRING,
        },
        question_number: {
            type: Sequelize.INTEGER
        },
        image: { 
            type: Sequelize.STRING
        },
        form_id: {
            type: Sequelize.INTEGER 
        },
        type_id: {
            type: Sequelize.INTEGER
        }
    },
    {
        underscored: true,
        timestamps: false
    }
);

export default Question;