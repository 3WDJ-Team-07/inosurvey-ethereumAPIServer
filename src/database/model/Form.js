import Sequelize from 'sequelize';
import db from 'database/db';
const Form = db.define(
    'forms',
    {
        id: { 
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        respondent_number: {
            type: Sequelize.INTEGER
        },
        respondent_count: {
            type: Sequelize.INTEGER
        },
        is_completed: {
            type: Sequelize.BOOLEAN
        },
        is_sale: {
            type: Sequelize.BOOLEAN
        },
        target_isactive: {
            type: Sequelize.BOOLEAN
        },
        bgcolor: {
            type: Sequelize.STRING
        },
        target_id: {
            type: Sequelize.INTEGER
        },
        user_id: {
            type: Sequelize.INTEGER
        },
        created_at: {
            type: Sequelize.TIME
        },
        updated_at: {
            type: Sequelize.TIME
        },
        closed_at: {
            type: Sequelize.TIME
        }
    },
    {
        underscored: true,
        timestamps: false
    }
);

Form.associate = function () {

}

export default Form;