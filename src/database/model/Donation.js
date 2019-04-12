import Sequelize from 'sequelize';
import db from 'database/db';

const Donation = db.define(
    'donation',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: Sequelize.STRING
        },
        content: {
            type: Sequelize.STRING
        },
        image: {
            type: Sequelize.STRING
        },
        target_amount: {
            type: Sequelize.INTEGER
        },
        current_amount: {
            type: Sequelize.INTEGER
        },
        started_at: {
            type: Sequelize.TIME
        },
        closed_at: {
            type: Sequelize.TIME
        },
        is_achieved: {
            type: Sequelize.BOOLEAN
        },
        donator_id: {
            type: Sequelize.INTEGER
        }
    },
    {
        timestamps: false
    }
);

export default Donation;