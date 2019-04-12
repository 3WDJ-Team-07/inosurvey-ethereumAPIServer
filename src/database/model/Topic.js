import Sequelize from 'sequelize';
import db from 'database/db';

const Topic = db.define(
    'topic',
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
