import Sequelize from 'sequelize';
import db from 'database/db';

import {
    Wallet,
    Job,
    Donation
} from 'database/model';

const User = db.define(
    'users',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        nickname: {
            type: Sequelize.STRING
        },
        gender: {
            type: Sequelize.INTEGER
        },
        age: {
            type: Sequelize.INTEGER
        },
        is_donator: {
            type: Sequelize.BOOLEAN
        },
        job_id: {
            type: Sequelize.INTEGER
        }
    },
    {
        underscored: true,
        timestamps: true,
    }
);

User.associate = function () {
    User.hasOne(Wallet);
    User.belongsTo(Job);
    User.hasMany(Donation, { foreignKey: 'donator_id' });
};

export default User;