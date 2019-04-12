import Sequelize from 'sequelize';
import db from 'database/db';

const Job = db.define(
    'job',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false
    }
);

export default Job;