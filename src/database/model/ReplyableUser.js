import Sequelize from 'sequelize';
import db from 'database/db';

const ReplyableUser = db.define(
    'replyable_user',
    {
        replyable_id: {
            type: Sequelize.INTEGER
        },
        survey_id: {
            type: Sequelize.INTEGER
        }
    },
    {
        underscored: true,
        timestamps: false
    }
);

ReplyableUser.removeAttribute('id');

export default ReplyableUser;