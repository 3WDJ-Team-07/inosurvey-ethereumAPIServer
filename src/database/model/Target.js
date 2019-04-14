import Sequelize from 'sequelize';
import db from 'database/db';

const Target = db.define(
    'targets',
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
        underscored: true,
        timestamps: false
    }
);

export default Target;
