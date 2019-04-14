import Sequelize from 'sequelize';
import db from 'database/db';

const Response = db.define(
    'responses',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        question_text: {
            type: Sequelize.STRING
        },
        question_id: {
            type: Sequelize.INTEGER
        },
        response_id: {
            type: Sequelize.INTEGER
        }
    },
    {
        underscored: true,
        timestamps: false
    }
);

export default Response;