const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.js"); 

const Visit = sequelize.define("Visit", {
  ipAddress: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  page: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  count: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
  lastVisitedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = Visit;
