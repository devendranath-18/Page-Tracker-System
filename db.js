const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(
  "page_tracker",   
  "root",           
  "Dev@1234",       
  {
    host: "localhost",
    dialect: "mysql",
  }
);
sequelize
  .authenticate()
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));
module.exports = sequelize;
