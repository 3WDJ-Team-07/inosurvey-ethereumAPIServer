import Sequelize from 'sequelize';
import db from 'database/db';

const Target = db.define(
    'target',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        start_age: {
            type: Sequelize.INTEGER
        },
        end_age: {
            type: Sequelize.INTEGER
        },
        gender: {
            type: Sequelize.INTEGER
        },
        job_id: {
            type: Sequelize.INTEGER
        }
    },
    {
        timestamps: false
    }
);

export default Target;
