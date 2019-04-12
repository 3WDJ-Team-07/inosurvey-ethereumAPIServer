import Sequelize from 'sequelize';
import db from 'database/db';
import User from './User';

const Wallet = db.define(
    'wallet',
    {
        user_id: {
            type: Sequelize.INTEGER
        },
        public_key: {
            type: Sequelize.STRING
        },
        private_key: {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false
    }
);
Wallet.removeAttribute('id');

Wallet.associate = function() {
    Wallet.belongsTo(User, { foreignKey: 'user_id', onDelete: 'CASCADE'});
}

export default Wallet;