const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const visitRoutes = require("./routes/visitRoutes");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/visits", visitRoutes);
const PORT = 5000; 
sequelize.sync().then(() => {
  console.log("DB Synced");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
