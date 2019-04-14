import Sequelize from 'sequelize';
import db from 'database/db';

const ItemResponse = db.define(
    'item_response',
    {
        response_id: {
            type: Sequelize.INTEGER
        },
        item_id: {
            type: Sequelize.INTEGER
        }
    },
    {
        underscored: true,
        timestamps: false
    }
);

ItemResponse.removeAttribute('id');

export default ItemResponse;