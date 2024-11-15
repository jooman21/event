import express, { Application, Request, Response, NextFunction } from 'express';
import sequelize from "../config/database"; // Import your database connection
import "../model/user"; // Ensure the User model is loaded
import "../model/event"; // Ensure the Event model is loaded
import "../config/env";
import { errorHandler } from '../middleware/errorHandler';
const app = express();
app.use(express.json());

// import userRoutes from '../routes/eventRoutes';
import eventRoutes from '../routes/eventRoutes'; // Adjust if path is different

//import { authMiddleware } from './middlewares/authMiddleware';
//import { logger } from './utils/logger';

// Use the error handling middleware
 app.use(errorHandler);


// Middleware for JSON parsing


// Custom logger middleware
// app.use((req: Request, res: Response, next: NextFunction) => {
//     logger(req, res);
//     next();
// });

// Authentication and authorization middleware
//app.use(authMiddleware);

// Routes
// app.use('/users', userRoutes);
app.use('/events', eventRoutes);

// Root endpoint
app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the backend API!');
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});





// Test the database connection and sync models
sequelize.authenticate()
  .then(async () => {
    console.log("Connection established successfully.");

    // Synchronize all models with the database
    await sequelize.sync({ alter: true }); // alter:true updates schema without data loss
    console.log("All models were synchronized successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

