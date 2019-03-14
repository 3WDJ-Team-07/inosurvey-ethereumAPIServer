import Sequelize from 'sequelize';
import db from 'database/db';
import { generate } from 'lib/token';

const User = db.define('user', {
    num: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    id: {
        type: Sequelize.STRING,
        unique: true,
    },
    password: {
        type: Sequelize.STRING,
    },
});

export default User;