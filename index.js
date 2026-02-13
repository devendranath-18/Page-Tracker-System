const express = require("express");
const cors = require("cors");

const sequelize = require("./config/db.js"); 
const visitRoutes = require("./routes/visitRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", visitRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
