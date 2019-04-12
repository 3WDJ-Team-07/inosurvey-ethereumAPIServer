import Sequelize from 'sequelize';
import db from 'database/db';

const User = db.define(
    'user',
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
        },
    },
    {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
);

User.associate = function () {

};

export default User;