import Sequelize from 'sequelize';
import db from 'database/db';

const SurveyUser = db.define(
    'survey_user',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        survey_id: {
            type: Sequelize.INTEGER
        },
        respondent_id: {
            type: Sequelize.INTEGER
        }
    },
    {
        underscored: true,
        timestamps: false
    }
);

export default SurveyUser;