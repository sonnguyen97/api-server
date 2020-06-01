const Sequelize = require("sequelize");
const db = require("../config/db-connection");

const DepartmentOperatorStatus = db.define(
    "departmentoperatorstatus",
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
);

module.exports = DepartmentOperatorStatus;