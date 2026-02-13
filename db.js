const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "page_tracker", 
  "root",
  "Dev@1234",
  {
    host: "localhost",
    dialect: "mysql",
    logging: false,
  }
);

sequelize
  .authenticate()
  .then(() => console.log(" MySQL Connected"))
  .catch((err) => console.log(" DB Error:", err));

module.exports = sequelize;
