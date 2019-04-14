import Sequelize from 'sequelize';
import db from 'database/db';
import User from './User';

const Wallet = db.define(
    'wallets',
    {
        public_key: {
            type: Sequelize.STRING
        },
        private_key: {
            type: Sequelize.STRING
        },
        user_id: {
            type: Sequelize.INTEGER
        }
    },
    {
        timestamps: false,
        underscored: true
    }
);
Wallet.removeAttribute('id');

Wallet.associate = function() {
    Wallet.belongsTo(User);
}

export default Wallet;