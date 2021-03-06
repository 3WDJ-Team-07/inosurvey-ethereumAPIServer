import Sequelize from 'sequelize';
import db from 'database/db';

const Type = db.define(
    'types',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        type: {
            type: Sequelize.STRING
        }
    },
    {
        underscored: true,
        timestamps: false
    }
);

export default Type;