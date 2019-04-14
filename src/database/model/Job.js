import Sequelize from 'sequelize';
import db from 'database/db';
import User from './User';

const Job = db.define(
    'jobs',
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
        underscored: true,
        timestamps: false
    }
);

Job.associate = function () {
    Job.hasOne(User);
}

export default Job;