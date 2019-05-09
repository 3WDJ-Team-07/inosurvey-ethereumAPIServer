import Sequelize from 'sequelize';
import db from 'database/db';
import { User } from 'database/model';

const Donation = db.define(
    'donations',
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
        is_achieved: {
            type: Sequelize.BOOLEAN
        },
        donator_id: {
            type: Sequelize.INTEGER
        },
        created_at: {
            type: Sequelize.TIME
        },
        updated_at: {
            type: Sequelize.TIME
        },
        closed_at: {
            type: Sequelize.TIME
        },
        
    },
    {
        underscored: true,
        timestamps: false
    }
);

Donation.associate = function () {
    Donation.belongsTo(User, { as: 'donator' });
}

export default Donation;