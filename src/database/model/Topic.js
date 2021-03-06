import Sequelize from 'sequelize';
import db from 'database/db';

const Topic = db.define(
    'topics',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        topic: {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false
    }
);

export default Topic;
