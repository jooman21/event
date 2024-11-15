import dotenv from 'dotenv';
import path from 'path';

// Ensure the path is correct
const envPath = path.resolve(__dirname, '../.env');
dotenv.config({ path: envPath });


// if (!process.env.DB_HOST || !process.env.DB_USER || !process.env.DB_PASSWORD || !process.env.DB_NAME) {
//   console.error("Environment variables are missing!");
// } else {
//   console.log("Environment variables loaded successfully.");
// }

export const PORT = process.env.PORT || 3000;
export const DB_CONFIG = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

//console.log("DB_CONFIG:", DB_CONFIG); // Add this line for debugging

export default DB_CONFIG;