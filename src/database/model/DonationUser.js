import Sequelize from 'sequelize';
import db from 'database/db';

const DonationUser = db.define(
    'donation_user',
    {
        donation_id: {
            type: Sequelize.INTEGER
        },
        sponsors_id: {
            type: Sequelize.INTEGER
        }
    },
    {
        underscored: true,
        timestamps: false
    }
);

DonationUser.removeAttribute('id');

export default DonationUser;