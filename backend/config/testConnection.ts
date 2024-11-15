import express from "express";
import sequelize from "../config/database"; // Import your database connection

// Test the database connection
sequelize.authenticate()
  .then(() => {
    console.log("Connection established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
