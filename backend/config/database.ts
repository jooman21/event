import { Sequelize } from 'sequelize';
import { DB_CONFIG } from './env';

// Ensure DB_CONFIG properties are always strings
const sequelize = new Sequelize(
  DB_CONFIG.database as string,
  DB_CONFIG.user as string,
  DB_CONFIG.password as string,
  {
    host: DB_CONFIG.host as string,
    dialect: "mysql",
    logging: false, // optional, set to true for debugging
  }
);

export default sequelize;
